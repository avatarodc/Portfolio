import { useEffect, useMemo, useState } from 'react';
import type { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force';
import { X, ArrowDownRight } from 'lucide-react';
import {
  sections,
  skillCategories,
  projectList,
  experienceList,
  archiveProjects,
  techAliases,
} from '@/data/profile';
import { buildSkillGraph, GraphNode } from '@/lib/skillGraph';

const text = sections.constellation;

// Mêmes teintes que les cartes de la section Compétences (cycle de 4 couleurs)
const categoryColors = ['#3b82f6', '#10b981', '#a855f7', '#f59e0b'];
const kindColors = { project: '#64748b', company: '#06b6d4', archives: '#94a3b8' };

const nodeColor = (node: GraphNode) =>
  node.kind === 'skill' ? categoryColors[(node.category ?? 0) % categoryColors.length] : kindColors[node.kind];

const nodeRadius = (node: GraphNode) => {
  if (node.kind === 'skill') return 4 + Math.min(node.degree, 6);
  if (node.kind === 'company') return 10;
  if (node.kind === 'archives') return 9;
  return 6;
};

interface Point { x: number; y: number }
type SimNode = SimulationNodeDatum & { id: string; r: number };

const isConstrained = () => {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return (
    window.matchMedia('(max-width: 767px)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    (navigator.hardwareConcurrency || 8) <= 4 ||
    Boolean(nav.connection?.saveData)
  );
};

const NodeShape: React.FC<{ node: GraphNode; r: number }> = ({ node, r }) => {
  const fill = nodeColor(node);
  if (node.kind === 'project') {
    return <rect x={-r} y={-r} width={r * 2} height={r * 2} rx={2} fill={fill} />;
  }
  if (node.kind === 'company') {
    return <rect x={-r * 0.75} y={-r * 0.75} width={r * 1.5} height={r * 1.5} rx={2} transform="rotate(45)" fill={fill} />;
  }
  if (node.kind === 'archives') {
    return <circle r={r} fill="none" stroke={fill} strokeWidth={2} strokeDasharray="3 3" />;
  }
  return <circle r={r} fill={fill} />;
};

const Constellation: React.FC = () => {
  const graph = useMemo(
    () =>
      buildSkillGraph({
        skillCategories,
        projects: projectList,
        experiences: experienceList,
        archives: archiveProjects,
        archivesLabel: text.archivesLabel,
        aliases: techAliases,
      }),
    []
  );
  const byId = useMemo(() => new Map(graph.nodes.map((n) => [n.id, n])), [graph]);

  const [constrained] = useState(isConstrained);
  const width = constrained ? 400 : 1000;
  const height = constrained ? 480 : 620;
  const fontSize = constrained ? 13 : 11;

  const [positions, setPositions] = useState<Map<string, Point> | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Disposition par d3-force (chargé à part) : animée puis arrêtée sur grand écran,
  // calculée une seule fois et figée sur mobile, appareil faible ou mouvement réduit.
  useEffect(() => {
    let cancelled = false;
    let stop = () => {};

    import('d3-force').then(({ forceSimulation, forceLink, forceManyBody, forceRadial, forceCollide }) => {
      if (cancelled) return;
      // Simulation dans un carré, en anneaux : entreprises au centre, projets autour,
      // compétences à l'extérieur ; le résultat est ensuite étiré au format du cadre.
      const size = 600;
      const ring = { company: 70, archives: 150, project: 150, skill: 265 };
      const kindOf = new Map(graph.nodes.map((n) => [n.id, n.kind]));
      // Départ régulier sur chaque anneau : les compétences dans l'ordre des catégories,
      // puis chaque projet / entreprise trié selon l'angle moyen de ses compétences,
      // pour que les liens restent courts ; la simulation n'a plus qu'à ajuster.
      const angles = new Map<string, number>();
      const spread = (nodes: GraphNode[], start = -Math.PI / 2) =>
        nodes.forEach((n, i) => angles.set(n.id, start + (2 * Math.PI * i) / nodes.length));
      spread(graph.nodes.filter((n) => n.kind === 'skill'));
      const meanAngle = (n: GraphNode) => {
        let sx = 0;
        let sy = 0;
        graph.neighbors.get(n.id)!.forEach((id) => {
          sx += Math.cos(angles.get(id)!);
          sy += Math.sin(angles.get(id)!);
        });
        return Math.atan2(sy, sx);
      };
      // répartition régulière dans l'ordre des angles moyens, en partant du premier
      const spreadByMeanAngle = (nodes: GraphNode[]) => {
        const sorted = nodes.map((n) => ({ n, a: meanAngle(n) })).sort((p, q) => p.a - q.a);
        spread(sorted.map((p) => p.n), sorted[0]?.a);
      };
      spreadByMeanAngle(graph.nodes.filter((n) => n.kind === 'project' || n.kind === 'archives'));
      spreadByMeanAngle(graph.nodes.filter((n) => n.kind === 'company'));

      const simNodes: SimNode[] = graph.nodes.map((n) => {
        const angle = angles.get(n.id)!;
        const radius = ring[n.kind];
        return { id: n.id, r: nodeRadius(n), x: size / 2 + radius * Math.cos(angle), y: size / 2 + radius * Math.sin(angle) };
      });
      const simLinks: SimulationLinkDatum<SimNode>[] = graph.links.map((l) => ({ ...l }));

      const simulation = forceSimulation(simNodes)
        .force('link', forceLink<SimNode, SimulationLinkDatum<SimNode>>(simLinks).id((d) => d.id).distance(90).strength(0.08))
        .force('charge', forceManyBody().strength(-70))
        .force('radial', forceRadial<SimNode>((d) => ring[kindOf.get(d.id)!], size / 2, size / 2).strength(0.9))
        .force('collide', forceCollide<SimNode>((d) => d.r + 9));

      // marges : place des libellés orientés vers l'extérieur à gauche et à droite
      const padX = constrained ? 18 : 130;
      const padY = 24;
      const snapshot = () =>
        new Map(
          simNodes.map((n) => [
            n.id,
            {
              x: Math.max(padX, Math.min(width - padX, width / 2 + ((n.x ?? size / 2) - size / 2) * ((width - padX * 2) / size))),
              y: Math.max(padY, Math.min(height - padY, height / 2 + ((n.y ?? size / 2) - size / 2) * ((height - padY * 2) / size))),
            },
          ])
        );

      if (constrained) {
        simulation.stop();
        simulation.tick(300);
        setPositions(snapshot());
        return;
      }

      let frame = 0;
      simulation.alphaDecay(0.035).on('tick', () => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          setPositions(snapshot());
        });
      });
      stop = () => {
        simulation.stop();
        cancelAnimationFrame(frame);
      };
    });

    return () => {
      cancelled = true;
      stop();
    };
  }, [graph, constrained, width, height]);

  // Nœud actif : sélection, ou survol en l'absence de sélection
  const active = selected ?? hovered;
  const lit = useMemo(() => {
    if (!active) return null;
    return new Set([active, ...(graph.neighbors.get(active) || [])]);
  }, [active, graph]);

  const toggle = (id: string) => setSelected((current) => (current === id ? null : id));

  const selectedNode = selected ? byId.get(selected) : undefined;
  const related = selectedNode
    ? [...(graph.neighbors.get(selectedNode.id) || [])].map((id) => byId.get(id)!)
    : [];

  // Sur mobile : au repos, seulement les entreprises et les compétences les plus reliées
  const showLabel = (node: GraphNode) =>
    !constrained ||
    (lit ? lit.has(node.id) : node.kind === 'company' || (node.kind === 'skill' && node.degree >= 4));

  // Libellé orienté vers l'extérieur, retourné s'il sortirait du cadre
  const labelAnchor = (node: GraphNode, p: Point, r: number) => {
    const w = node.label.length * fontSize * 0.55 + r + 4;
    const outward = p.x < width / 2 ? 'end' : 'start';
    if (outward === 'end' && p.x - w < 0) return 'start';
    if (outward === 'start' && p.x + w > width) return 'end';
    return outward;
  };

  const skillNodes = graph.nodes.filter((n) => n.kind === 'skill');
  const ownerNodes = graph.nodes.filter((n) => n.kind !== 'skill');

  const chip = (node: GraphNode) => (
    <button
      key={node.id}
      type="button"
      onClick={() => toggle(node.id)}
      aria-pressed={selected === node.id}
      className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition ${
        selected === node.id
          ? 'bg-blue-600 border-blue-600 text-white'
          : lit && !lit.has(node.id)
            ? 'border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600'
            : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600'
      }`}
    >
      {node.label}
    </button>
  );

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'Escape') setSelected(null);
      }}
    >
      {/* Graphe (complément visuel ; l'interface clavier est la liste de boutons) */}
      <div className="relative rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto block select-none"
          role="img"
          aria-label={text.graphLabel}
          onClick={() => setSelected(null)}
        >
          {positions && (
            <>
              <g>
                {graph.links.map((link) => {
                  const a = positions.get(link.source)!;
                  const b = positions.get(link.target)!;
                  const on = active && (link.source === active || link.target === active);
                  return (
                    <line
                      key={`${link.source}-${link.target}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke={on ? '#3b82f6' : 'currentColor'}
                      strokeWidth={on ? 1.6 : 0.8}
                      className={`text-gray-300 dark:text-gray-700 motion-safe:transition-opacity motion-safe:duration-300 ${
                        lit && !on ? 'opacity-10' : 'opacity-70'
                      }`}
                    />
                  );
                })}
              </g>
              <g>
                {graph.nodes.map((node) => {
                  const p = positions.get(node.id)!;
                  const r = nodeRadius(node);
                  const dim = lit && !lit.has(node.id);
                  return (
                    <g
                      key={node.id}
                      transform={`translate(${p.x},${p.y})`}
                      className={`cursor-pointer motion-safe:transition-opacity motion-safe:duration-300 ${dim ? 'opacity-15' : 'opacity-100'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle(node.id);
                      }}
                      onMouseEnter={() => setHovered(node.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* zone de clic élargie pour le tactile */}
                      <circle r={Math.max(r + 6, 12)} fill="transparent" />
                      {selected === node.id && <circle r={r + 5} fill="none" stroke="#3b82f6" strokeWidth={2} />}
                      <NodeShape node={node} r={r} />
                      {showLabel(node) && (
                        <text
                          x={labelAnchor(node, p, r) === 'end' ? -(r + 4) : r + 4}
                          textAnchor={labelAnchor(node, p, r)}
                          y={4}
                          className={`fill-gray-600 dark:fill-gray-300 ${node.kind === 'skill' ? '' : 'font-semibold'}`}
                          fontSize={fontSize}
                        >
                          {node.label}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            </>
          )}
        </svg>

        {/* Légende */}
        <ul className="flex flex-wrap gap-x-4 gap-y-1 px-4 py-3 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          <li className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" />{text.legend.skill}</li>
          <li className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-slate-500" />{text.legend.project}</li>
          <li className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rotate-45 rounded-sm bg-cyan-500" />{text.legend.company}</li>
          <li className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full border-2 border-dashed border-slate-400" />{text.legend.archives}</li>
        </ul>
      </div>

      {/* Synthèse en texte, annoncée aux lecteurs d'écran */}
      <div aria-live="polite" className="mt-4 min-h-[3rem] rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-sm">
        {selectedNode ? (
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <p className="font-bold text-gray-900 dark:text-white">
                {selectedNode.label}
                {selectedNode.anchor && (
                  <a href={selectedNode.anchor} className="inline-flex items-center gap-0.5 ml-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
                    {text.detailLink}
                    <ArrowDownRight size={12} />
                  </a>
                )}
              </p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <X size={14} />
                {text.clearLabel}
              </button>
            </div>
            {selectedNode.kind === 'skill' ? (
              <>
                {[
                  { label: text.projectsLabel, items: related.filter((n) => n.kind === 'project' || n.kind === 'archives') },
                  { label: text.companiesLabel, items: related.filter((n) => n.kind === 'company') },
                ]
                  .filter((group) => group.items.length > 0)
                  .map((group) => (
                    <div key={group.label} className="flex flex-wrap items-center gap-1.5">
                      <span className="text-gray-500 dark:text-gray-400 mr-1">{group.label} ({group.items.length}) :</span>
                      {group.items.map(chip)}
                    </div>
                  ))}
              </>
            ) : (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-gray-500 dark:text-gray-400 mr-1">{text.linkedSkillsLabel} ({related.length}) :</span>
                {related.map(chip)}
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">{text.hint}</p>
        )}
      </div>

      {/* Interface clavier : toutes les compétences, projets et entreprises */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{text.skillsTitle}</h4>
          <div className="flex flex-wrap gap-1.5">
            {skillCategories.map((_, index) => skillNodes.filter((n) => n.category === index).map(chip))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{text.ownersTitle}</h4>
          <div className="flex flex-wrap gap-1.5">{ownerNodes.map(chip)}</div>
        </div>
      </div>
    </div>
  );
};

export default Constellation;
