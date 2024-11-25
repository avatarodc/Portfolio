// src/components/ui/CVQRCode/CVQRCode.tsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';

const CVQRCode = () => {
  // L'URL sera relative au domaine de votre site
  const CV_URL = "https://drive.google.com/file/d/1bIoDtJjuILsZgQuLmkK4Xl17ZaycUIfA/view?usp=sharing";

  return (
    <div className="flex items-center gap-4">
      {/* Icône animée */}
      <div className={cn(
        "p-3.5 rounded-xl border-2 group/icon relative overflow-hidden",
        "bg-gradient-to-br from-emerald-50/80 to-blue-50/80 border-emerald-200/50",
        "dark:from-emerald-500/5 dark:to-blue-500/5 dark:border-emerald-500/20",
        "transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/20",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000",
        "transform hover:scale-105"
      )}>
        <FileText className={cn(
          "w-6 h-6",
          "text-emerald-600 dark:text-emerald-400",
          "transition-all duration-300 group-hover/icon:rotate-12 group-hover/icon:scale-110"
        )} />
      </div>

      {/* Conteneur QR */}
      <div className="flex-1">
        <p className={cn(
          "flex items-center gap-2 text-sm",
          "text-gray-600 dark:text-white/60",
          "font-mono"
        )}>
          <span className="text-emerald-600 dark:text-emerald-400 animate-pulse">❯</span>
          <span className="text-blue-500 dark:text-blue-400">cat</span>
          <span className="text-purple-500 dark:text-purple-400">CV.qr</span>
        </p>

        <div className="mt-3 mb-10 relative group/qr">
          {/* Effet de lueur amélioré */}
          <div className={cn(
            "absolute -inset-3 rounded-2xl opacity-40 group-hover/qr:opacity-70",
            "bg-gradient-conic from-emerald-500 via-blue-500 to-purple-500",
            "blur-xl transition-all duration-500",
            "animate-spin-slow group-hover/qr:animate-spin-slower",
            "scale-90 group-hover/qr:scale-105"
          )} />

          {/* QR Code */}
          <div className={cn(
            "relative w-[140px] p-3 rounded-2xl border-2",
            "bg-white/90 dark:bg-gray-900/90",
            "backdrop-blur-sm border-white/50 dark:border-gray-700/50",
            "shadow-2xl shadow-emerald-500/10",
            "transition-all duration-500",
            "group-hover/qr:scale-105 group-hover/qr:rotate-3",
            "group-hover/qr:shadow-emerald-500/30"
          )}>
            <QRCodeSVG
              value={CV_URL}
              size={115}
              level="H"
              bgColor="transparent"
              fgColor="currentColor"
              className={cn(
                "text-gray-800 dark:text-white p-1",
                "transition-all duration-500",
                "group-hover/qr:rotate-3"
              )}
            />
          </div>

          {/* Label */}
          <div className={cn(
            "absolute -bottom-8 left-1/2 -translate-x-1/2 z-10",
            "transition-all duration-500",
            "opacity-0 group-hover/qr:opacity-100",
            "translate-y-2 group-hover/qr:translate-y-0"
          )}>
            <span className={cn(
              "px-4 py-2 rounded-full text-xs font-medium",
              "bg-gradient-to-r from-emerald-50/90 via-blue-50/90 to-purple-50/90",
              "dark:from-emerald-900/50 dark:via-blue-900/50 dark:to-purple-900/50",
              "border border-emerald-200/30 dark:border-emerald-500/30",
              "text-emerald-600 dark:text-emerald-400",
              "shadow-lg backdrop-blur-sm",
              "flex items-center gap-2"
            )}>
              <span className="animate-pulse">👆</span>
              Scannez pour voir mon CV
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVQRCode;