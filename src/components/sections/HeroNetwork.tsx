import { useEffect, useRef } from 'react';
import {
  skillCategories,
  projectList,
  experienceList,
  techAliases,
} from '@/data/profile';
import { buildSkillGraph } from '@/lib/skillGraph';
import { watchFrameRate } from '@/lib/devicePerf';

// Mêmes teintes que la constellation et les cartes Compétences
const categoryColors = ['59,130,246', '16,185,129', '168,85,247', '245,158,11'];

interface Dot {
  label: string;
  color: string;
  bx: number; // position de base, 0..1
  by: number;
  depth: number; // intensité de la parallaxe
  phase: number;
}

// Générateur pseudo-aléatoire déterministe : même dessin à chaque visite
const seeded = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Points = compétences ; liens = compétences utilisées ensemble dans les mêmes projets/postes
const buildNetwork = () => {
  const graph = buildSkillGraph({
    skillCategories,
    projects: projectList,
    experiences: experienceList,
    aliases: techAliases,
  });
  const skills = graph.nodes.filter((n) => n.kind === 'skill');
  const index = new Map(skills.map((s, i) => [s.id, i]));
  const random = seeded(2018);
  const dots: Dot[] = skills.map((s) => ({
    label: s.label,
    color: categoryColors[(s.category ?? 0) % categoryColors.length],
    bx: 0.04 + random() * 0.92,
    by: 0.08 + random() * 0.84,
    depth: 0.4 + random() * 0.8,
    phase: random() * Math.PI * 2,
  }));

  // Co-occurrences, puis 2 partenaires les plus fréquents par compétence
  const counts = new Map<string, number>();
  graph.nodes
    .filter((n) => n.kind !== 'skill')
    .forEach((owner) => {
      const ids = [...graph.neighbors.get(owner.id)!].map((id) => index.get(id)!).sort((a, b) => a - b);
      ids.forEach((a, i) => ids.slice(i + 1).forEach((b) => counts.set(`${a}-${b}`, (counts.get(`${a}-${b}`) || 0) + 1)));
    });
  const edges = new Set<string>();
  dots.forEach((_, a) => {
    [...counts.entries()]
      .filter(([key]) => key.split('-').map(Number).includes(a))
      .sort((p, q) => q[1] - p[1])
      .slice(0, 2)
      .forEach(([key]) => edges.add(key));
  });
  return { dots, edges: [...edges].map((key) => key.split('-').map(Number) as [number, number]) };
};

const HeroNetwork: React.FC<{ animate: boolean }> = ({ animate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const { dots, edges } = buildNetwork();
    const pointer = { x: -1, y: -1, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    let visible = true;
    // passe à false si l'appareil se révèle trop lent pendant la 1re seconde
    let moving = animate;
    // état exposé dans le DOM (diagnostic) : animated | static
    canvas.dataset.motion = moving ? 'animated' : 'static';

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const dark = document.documentElement.classList.contains('dark');
      // plus discret sur petit écran, où le réseau passe derrière le texte
      const strength = (dark ? 1 : 0.8) * (width < 768 ? 0.7 : 1);
      const maxLength = Math.max(width, height) * 0.3;
      ctx.clearRect(0, 0, width, height);

      // décalage vers le pointeur (parallaxe douce), dérive lente
      const ox = pointer.active ? (pointer.x - width / 2) / width : 0;
      const oy = pointer.active ? (pointer.y - height / 2) / height : 0;
      const points = dots.map((d) => ({
        x: d.bx * width + ox * 28 * d.depth + (moving ? Math.sin(time / 2600 + d.phase) * 7 : 0),
        y: d.by * height + oy * 20 * d.depth + (moving ? Math.cos(time / 3100 + d.phase) * 6 : 0),
      }));
      const near = (p: { x: number; y: number }) =>
        pointer.active ? Math.max(0, 1 - Math.hypot(p.x - pointer.x, p.y - pointer.y) / 180) : 0;

      edges.forEach(([a, b]) => {
        const p = points[a];
        const q = points[b];
        // liens longs estompés puis masqués : le réseau reste local et sobre
        const fade = 1 - Math.hypot(p.x - q.x, p.y - q.y) / maxLength;
        if (fade <= 0) return;
        const glow = Math.max(near(p), near(q));
        ctx.strokeStyle = `rgba(${dots[a].color},${(0.12 + glow * 0.35) * fade * strength})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      });

      let closest = -1;
      let closestDistance = 40;
      points.forEach((p, i) => {
        const glow = near(p);
        ctx.fillStyle = `rgba(${dots[i].color},${(0.35 + glow * 0.5) * strength})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 + dots[i].depth * 1.2 + glow * 1.5, 0, Math.PI * 2);
        ctx.fill();
        const distance = pointer.active ? Math.hypot(p.x - pointer.x, p.y - pointer.y) : Infinity;
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });

      // nom de la compétence la plus proche du pointeur
      if (closest >= 0) {
        const p = points[closest];
        ctx.font = '500 12px Inter, system-ui, sans-serif';
        ctx.fillStyle = dark ? 'rgba(229,231,235,0.8)' : 'rgba(55,65,81,0.8)';
        ctx.fillText(dots[closest].label, p.x + 8, p.y - 8);
      }
    };

    // 30 images/s au maximum, uniquement quand le Hero est visible
    const loop = (time: number) => {
      frame = requestAnimationFrame(loop);
      if (!visible || time - last < 33) return;
      last = time;
      draw(time);
    };

    resize();
    draw(0);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(last);
    });
    resizeObserver.observe(canvas);

    if (!animate) {
      return () => resizeObserver.disconnect();
    }

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.y >= 0 && pointer.y <= rect.height;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('pointerdown', onPointer, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
    });
    visibility.observe(canvas);
    frame = requestAnimationFrame(loop);

    // Fluidité réelle : au-delà de ~25 ms par image en moyenne, image fixe
    const stopWatching = watchFrameRate(() => {
      moving = false;
      canvas.dataset.motion = 'static';
      cancelAnimationFrame(frame);
      pointer.active = false;
      draw(0);
    });

    return () => {
      stopWatching();
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [animate]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default HeroNetwork;
