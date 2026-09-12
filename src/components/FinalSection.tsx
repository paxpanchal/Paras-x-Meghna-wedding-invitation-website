import React from 'react';
import { motion } from 'motion/react';
import { WeddingInfo } from '../types';
import {
  OrnamentalDivider,
  CardCornerFlourish,
  RoyalLotus,
  MulticolorFolkBorder,
  RoyalPeacock,
  RajasthaniPalaceDesertLandscape,
  DiyaLamp
} from './IndianMotifs';

interface FinalSectionProps {
  wedding: WeddingInfo;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ wedding }) => {
  return (
    <footer id="final-section" className="pt-6 pb-20 px-3 sm:px-6 relative bg-gradient-to-b from-transparent via-[#FFF8EE]/60 to-[#FDE68A]/40">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-3 border-[#D4AF37] shadow-[0_20px_50px_-12px_rgba(180,83,9,0.22)] overflow-hidden"
        >
          {/* Top border ribbon */}
          <div className="absolute top-2 inset-x-8 opacity-85 pointer-events-none">
            <MulticolorFolkBorder />
          </div>

          {/* Inner hairline border */}
          <div className="absolute inset-2.5 sm:inset-3.5 border-2 border-[#D4AF37]/40 rounded-2xl pointer-events-none" />

          <CardCornerFlourish position="top-left" />
          <CardCornerFlourish position="top-right" />
          <CardCornerFlourish position="bottom-left" />
          <CardCornerFlourish position="bottom-right" />

          <div className="relative z-10 flex flex-col items-center pt-2">
            
            {/* Flanking Royal Peacocks & Blooming Lotus */}
            <div className="text-[#D4AF37] mb-2 flex items-center justify-center gap-3">
              <RoyalPeacock size={48} className="hidden sm:inline-block drop-shadow-xs" />
              <RoyalLotus size={54} />
              <RoyalPeacock size={48} flip={true} className="hidden sm:inline-block drop-shadow-xs" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1F1A18] font-bold tracking-[0.06em] sm:tracking-[0.08em] uppercase">
              <span className="text-[#7F1D1D]">{wedding.coupleDisplay}</span>
            </h2>

            <p className="font-title text-xs sm:text-sm tracking-[0.28em] text-[#85601E] font-bold uppercase mt-2">
              {wedding.weddingDateFormatted}
            </p>

            <OrnamentalDivider className="my-5 max-w-xs mx-auto" />

            <p className="font-serif italic text-xl sm:text-2xl text-[#2E231F] font-medium leading-relaxed max-w-md mx-auto">
              &ldquo;{wedding.closing.message}&rdquo;
            </p>

            <p className="font-serif text-base sm:text-lg text-[#991B1B] font-bold mt-4 tracking-wide">
              {wedding.closing.signOff}
            </p>

            {/* Auspicious closing chant */}
            <p className="font-serif text-xs sm:text-sm text-[#78350F] tracking-widest mt-2 opacity-95 font-medium">
              ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
            </p>

            {/* Glowing Diya Lamps */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <DiyaLamp size={22} className="animate-diya-flicker" />
              <span className="w-12 h-[1px] bg-[#D4AF37]" />
              <DiyaLamp size={22} className="scale-x-[-1] animate-diya-flicker" />
            </div>
          </div>

          {/* Authentic Rajasthani Desert Palace & Camel Caravan Landscape Banner */}
          <div className="mt-6 -mx-6 sm:-mx-10 -mb-10 relative z-0">
            <RajasthaniPalaceDesertLandscape />
          </div>

          {/* Bottom border ribbon */}
          <div className="absolute bottom-2 inset-x-8 opacity-85 pointer-events-none z-10">
            <MulticolorFolkBorder />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
