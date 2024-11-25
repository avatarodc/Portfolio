// src/components/ui/CVQRCode/CVQRCode.tsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CVQRCodeProps {
  cvUrl: string;
}

const CVQRCode: React.FC<CVQRCodeProps> = ({ cvUrl }) => {
  return (
    <div className="flex-1">
      <p className="text-sm text-gray-600 dark:text-white/60">
        $ cat CV.qr
      </p>
      <div className="mt-2 relative group">
        <div className={cn(
          "absolute -inset-0.5 rounded-lg opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur-md",
          "bg-gradient-to-r from-emerald-400 to-blue-400",
          "dark:from-emerald-600 dark:to-blue-600"
        )} />
        <div className={cn(
          "relative rounded-lg bg-white dark:bg-gray-900 overflow-hidden",
          "border border-gray-200 dark:border-gray-700",
          "transition-all duration-300 group-hover:scale-105"
        )}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <QRCodeSVG
              value={cvUrl}
              size={120}
              level="H"
              bgColor="transparent"
              fgColor="currentColor"
              className="text-gray-900 dark:text-white p-2"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CVQRCode;