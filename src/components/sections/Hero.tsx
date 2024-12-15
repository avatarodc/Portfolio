import React from 'react';
import { 
  Mail, 
  MapPin, 
  GithubIcon, 
  LinkedinIcon, 
  Code2, 
  Terminal, 
  Globe,
  Database,
  Cpu,
  Server,
  Brackets,
  Hash,
  FileText
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '@/lib/utils';
import CV from './CV';

const HeroSection = () => {
  const codeSnippet = `
// Hello World
function welcome() {
  return "Hello, I'm Mamadou!";
}`;

  const techIcons = [
    { icon: <Code2 size={24} />, delay: '0s', duration: '15s', label: 'Code' },
    { icon: <Terminal size={24} />, delay: '2s', duration: '18s', label: 'CLI' },
    { icon: <Database size={24} />, delay: '4s', duration: '20s', label: 'DB' },
    { icon: <Globe size={24} />, delay: '6s', duration: '17s', label: 'Web' },
    { icon: <Cpu size={24} />, delay: '8s', duration: '19s', label: 'System' },
    { icon: <Server size={24} />, delay: '10s', duration: '16s', label: 'Backend' },
    { icon: <Brackets size={24} />, delay: '12s', duration: '21s', label: 'Frontend' },
    { icon: <Hash size={24} />, delay: '14s', duration: '14s', label: 'Algorithm' }
  ];

  return (
    <header id="home" className="relative min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Background */}
      <div className={cn(
        "absolute inset-0",
        "bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100",
        "dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
      )}>
        <div className={cn(
          "absolute inset-0",
          "bg-white/50 dark:bg-black/70"
        )} />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute text-xs whitespace-nowrap animate-matrix",
                "text-emerald-600/30 dark:text-green-500/40"
              )}
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {codeSnippet}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map((item, index) => (
        <div
          key={index}
          className="group absolute"
          style={{
            animation: `float ${item.duration} linear infinite`,
            animationDelay: item.delay,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        >
          <div className={cn(
            "relative p-3 rounded-lg backdrop-blur-sm border",
            "transform transition-all duration-300",
            "bg-white/20 border-gray-200/50", 
            "dark:bg-gray-800/20 dark:border-gray-700/30"
          )}>
            <div className={cn(
              "text-blue-600/40 dark:text-blue-400/50" 
            )}>
              {item.icon}
            </div>
            <span className={cn(
              "absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs",
              "opacity-0 group-hover:opacity-100 transition-opacity",
              "text-gray-700/30 dark:text-gray-300/50", 
              "px-2 py-1 rounded bg-white/20 dark:bg-gray-800/20", 
              "shadow-lg"
            )}>
              {item.label}
            </span>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className={cn(
                "inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border",
                "text-sm mb-4",
                "bg-white/80 border-gray-200 text-emerald-600",
                "dark:bg-gray-800/80 dark:border-gray-700 dark:text-green-400"
              )}>
                <Terminal size={14} className="mr-2" />
                <span>root@portfolio:~$</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-gray-900 dark:text-white">Mamadou</span>
                <span className={cn(
                  "block text-transparent bg-clip-text",
                  "bg-gradient-to-r from-blue-600 to-purple-600",
                  "dark:from-blue-400 dark:to-purple-400"
                )}>
                  Gueye
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-800 dark:text-white/90">
                <span className="text-emerald-600 dark:text-green-400">&lt;</span>
                Développeur Full Stack Junior
                <span className="text-emerald-600 dark:text-green-400">/&gt;</span>
              </h2>
            </div>

            <div className="relative">
              <div className={cn(
                "absolute -inset-1 rounded-lg blur opacity-25",
                "bg-gradient-to-r from-blue-400 to-purple-400",
                "dark:from-blue-600 dark:to-purple-600"
              )} />
              <p className={cn(
                "relative rounded-lg p-4",
                "text-lg max-w-xl leading-relaxed font-light backdrop-blur-sm",
                "bg-white/80 text-gray-700",
                "dark:bg-black/50 dark:text-white/80"
              )}>
                Passionné par le développement logiciel et la création de solutions innovantes.
                Je transforme des idées en applications web modernes et performantes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { href: "https://github.com/avatarodc", icon: <GithubIcon />, label: "GitHub" },
                { href: "https://linkedin.com/in/Mamadou_GUEYE", icon: <LinkedinIcon />, label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex items-center gap-2 px-6 py-3 rounded-full",
                    "transition-all duration-300 backdrop-blur-lg border",
                    "bg-white/80 hover:bg-gray-50/80 border-gray-200 text-gray-700",
                    "dark:bg-gray-800/80 dark:hover:bg-gray-700/80 dark:border-gray-700 dark:text-white"
                  )}
                >
                  <div className="w-5 h-5 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Terminal Card */}
          <div className="relative">
            <div className={cn(
              "absolute inset-0 rounded-2xl blur-xl",
              "bg-gradient-to-r from-blue-300/30 to-purple-300/30",
              "dark:from-blue-500/30 dark:to-purple-500/30"
            )} />
            <div className={cn(
              "relative rounded-2xl border overflow-hidden shadow-2xl",
              "backdrop-blur-xl",
              "bg-white/90 border-gray-200",
              "dark:bg-gray-800/90 dark:border-gray-700"
            )}>
              {/* Terminal Header */}
              <div className={cn(
                "flex items-center gap-2 px-4 py-3 border-b",
                "bg-gray-100/80 border-gray-200",
                "dark:bg-gray-900/80 dark:border-gray-700"
              )}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-gray-600 dark:text-white/60">
                  contact.sh
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-full border",
                    "bg-blue-50 border-blue-200",
                    "dark:bg-blue-500/10 dark:border-blue-500/20"
                  )}>
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-white/60">
                      $ echo $EMAIL
                    </p>
                    <p className="text-emerald-600 dark:text-green-400">
                      mamadougueye@groupeisi.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-full border",
                    "bg-purple-50 border-purple-200",
                    "dark:bg-purple-500/10 dark:border-purple-500/20"
                  )}>
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-white/60">
                      $ echo $LOCATION
                    </p>
                    <p className="text-emerald-600 dark:text-green-400">
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>
                {/* QR Code Section with Mobile Optimization */}
                <div className="flex items-center gap-4">
                  {/* Icône animée */}
                  <div className={cn(
                    "p-3 md:p-3.5 rounded-xl border-2 group/icon relative overflow-hidden shrink-0",
                    "bg-gradient-to-br from-emerald-50/80 to-blue-50/80 border-emerald-200/50",
                    "dark:from-emerald-500/5 dark:to-blue-500/5 dark:border-emerald-500/20",
                    "transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/20",
                    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
                    "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000",
                    "transform hover:scale-105"
                  )}>
                    <FileText className={cn(
                      "w-5 h-5 md:w-6 md:h-6",
                      "text-emerald-600 dark:text-emerald-400",
                      "transition-all duration-300 group-hover/icon:rotate-12 group-hover/icon:scale-110"
                    )} />
                  </div>

                  {/* Conteneur principal QR */}
                  <div className="flex-1 min-w-0">
                    {/* Terminal command line */}
                    <p className={cn(
                      "flex items-center gap-2 text-xs md:text-sm",
                      "text-gray-600 dark:text-white/60",
                      "font-mono"
                    )}>
                      <span className="text-emerald-600 dark:text-emerald-400 animate-pulse">❯</span>
                      <span className="text-blue-500 dark:text-blue-400">cat</span>
                      <span className="text-purple-500 dark:text-purple-400">CV.qr</span>
                    </p>

                    {/* QR Code container with label space */}
                    <div className="relative mt-2 md:mt-3 pb-10 group/qr">
                      {/* Rotating gradient background effect */}
                      <div className={cn(
                        "absolute -inset-2 md:-inset-3 rounded-2xl opacity-40 group-hover/qr:opacity-70",
                        "bg-gradient-conic from-emerald-500 via-blue-500 to-purple-500",
                        "blur-lg transition-all duration-500",
                        "animate-spin-slow group-hover/qr:animate-spin-slower",
                        "scale-90 group-hover/qr:scale-105"
                      )} />

                      {/* QR Code glass container */}
                      <div className={cn(
                        "relative w-[100px] md:w-[140px] p-2 md:p-3 rounded-xl md:rounded-2xl border-2",
                        "bg-white/90 dark:bg-gray-900/90",
                        "backdrop-blur-sm border-white/50 dark:border-gray-700/50",
                        "shadow-2xl shadow-emerald-500/10",
                        "transition-all duration-500",
                        "group-hover/qr:scale-105 group-hover/qr:rotate-3",
                        "group-hover/qr:shadow-emerald-500/30",
                        "after:absolute after:inset-0 after:rounded-2xl",
                        "after:bg-gradient-to-br after:from-white/5 after:to-transparent"
                      )}>
                        {/* QR Code SVG */}
                        <QRCodeSVG
                          value="https://drive.google.com/uc?export=download&id=1bIoDtJjuILsZgQuLmkK4Xl17ZaycUIfA"
                          size={90}
                          level="H"
                          bgColor="transparent"
                          fgColor="currentColor"
                          className={cn(
                            "text-gray-800 dark:text-white w-full h-auto",
                            "transition-all duration-500",
                            "group-hover/qr:rotate-3"
                          )}
                        />
                      </div>

                      {/* Hover label */}
                      <div className={cn(
                        "absolute -bottom-2 left-1/2 -translate-x-1/2 z-10",
                        "w-max transform",
                        "transition-all duration-500",
                        "opacity-0 group-hover/qr:opacity-100",
                        "translate-y-0 group-hover/qr:translate-y-0"
                      )}>
                        <span className={cn(
                          "px-3 py-1.5 rounded-full text-[10px] md:text-xs font-medium",
                          "bg-gradient-to-r from-emerald-50/90 via-blue-50/90 to-purple-50/90",
                          "dark:from-emerald-900/50 dark:via-blue-900/50 dark:to-purple-900/50",
                          "border border-emerald-200/30 dark:border-emerald-500/30",
                          "text-emerald-600 dark:text-emerald-400",
                          "shadow-lg backdrop-blur-sm",
                          "flex items-center gap-1.5 whitespace-nowrap"
                        )}>
                          <span className="animate-pulse hidden md:inline">👆</span>
                          <span>Scannez pour voir mon CV</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <CV />

        </div>
      </div>

      {/* Custom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-white/60 animate-bounce">
            scroll.start()
          </span>
          <div className={cn(
            "w-6 h-10 border-2 rounded-full p-1",
            "border-gray-300 dark:border-white/20"
          )}>
            <div className="w-1.5 h-1.5 rounded-full animate-scroll bg-emerald-500 dark:bg-green-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;