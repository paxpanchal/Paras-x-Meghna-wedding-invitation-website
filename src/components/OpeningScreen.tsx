import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MandalaAura,
  CardCornerFlourish,
  OrnamentalDivider,
  MandapCanopyToran,
  MulticolorFolkBorder,
  TraditionalGaneshMurti,
  RoyalPeacock,
  SacredOm,
  DiyaLamp
} from './IndianMotifs';
import { WeddingInfo } from '../types';
import { Sparkles, Heart } from 'lucide-react';

interface OpeningScreenProps {
  wedding: WeddingInfo;
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = memo(({ wedding, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOpening) return;
    setIsOpening(true);

    // Give time for envelope 3D flap opening and golden burst animation
    setTimeout(() => {
      onOpen();
    }, 950);
  };

  return (
    <motion.div
      key="opening-screen-root"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A080C] p-3 sm:p-6 overflow-hidden select-none"
    >
      {/* Background festive ambient glowing light in traditional Royal Saffron & Maroon */}
      <div className="absolute inset-0 bg-radial from-[#7F1D1D] via-[#4A0E17] to-[#1F0407] opacity-95" />

      {/* Rotating Sacred Mandala Aura behind envelope */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <div className="text-[#D4AF37] animate-[spin_120s_linear_infinite] will-change-transform">
          <MandalaAura size={750} />
        </div>
      </div>

      {/* Ambient festive firefly sparkles / diyas */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#EA580C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#BE185D]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Bursting Golden Particle Glow when opening */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute z-40 w-96 h-96 rounded-full bg-radial from-[#FEF08A]/70 via-[#F59E0B]/40 to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 3D ENVELOPE / KANKOTRI CARD CONTAINER */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-md perspective-1000 z-30">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 25 }}
          animate={isOpening ? { scale: 1.04, y: -10 } : { scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9] to-[#FBF4E8] rounded-3xl pt-2 pb-8 px-5 sm:px-8 border-3 border-[#D4AF37] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.7)] text-center overflow-hidden"
        >
          {/* Top Royal Silk Canopy & Marigold Toran */}
          <div className="w-full -mx-2 mb-1 pointer-events-none">
            <MandapCanopyToran className="opacity-95" />
          </div>

          {/* Multicolor Folk Border ribbon */}
          <div className="opacity-90 pointer-events-none -mt-1">
            <MulticolorFolkBorder />
          </div>

          {/* Double Gold Filigree Borders */}
          <div className="absolute inset-2.5 sm:inset-3.5 border-2 border-[#D4AF37]/45 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-[#991B1B]/25 rounded-xl pointer-events-none" />

          {/* Traditional Corner Flourishes with Kumkum Jewel Dots */}
          <CardCornerFlourish position="top-left" />
          <CardCornerFlourish position="top-right" />
          <CardCornerFlourish position="bottom-left" />
          <CardCornerFlourish position="bottom-right" />

          {/* Flanking Peacocks at top */}
          <div className="absolute top-10 left-3 opacity-90 hidden sm:block pointer-events-none">
            <RoyalPeacock size={46} />
          </div>
          <div className="absolute top-10 right-3 opacity-90 hidden sm:block pointer-events-none">
            <RoyalPeacock size={46} flip={true} />
          </div>

          <div className="relative z-10 flex flex-col items-center pt-1">
            
            {/* 1. Traditional Ganesh Idol with Lotus Throne & Aureole */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-1"
            >
              <TraditionalGaneshMurti size={100} showMantra={true} />
            </motion.div>

            {/* Auspicious Shubh Vivah */}
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              <span className="font-title tracking-[0.32em] text-xs sm:text-sm font-bold text-[#991B1B] uppercase">
                SHUBH VIVAH
              </span>
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
            </div>

            <OrnamentalDivider className="my-2 max-w-xs" />

            {/* Couple Names in Royal Maroon & Gold */}
            <div className="my-1 sm:my-1.5">
              <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.1em] font-bold text-[#7F1D1D] uppercase leading-tight">
                {wedding.groomName}
              </h1>
              
              <div className="my-0.5 font-serif italic text-2xl text-[#D4AF37] font-semibold flex items-center justify-center gap-2">
                <span className="w-4 h-[1px] bg-[#D4AF37]/50" />
                <span>&amp;</span>
                <span className="w-4 h-[1px] bg-[#D4AF37]/50" />
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.1em] font-bold text-[#7F1D1D] uppercase leading-tight">
                {wedding.brideName}
              </h1>
            </div>

            {/* Wedding Date in Auspicious Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF8EE] border border-[#D4AF37] shadow-xs mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <p className="font-title text-xs sm:text-sm tracking-[0.22em] text-[#85601E] font-bold uppercase">
                {wedding.weddingDateFormatted}
              </p>
              <span className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
            </div>

            {/* Royal Wax Seal & Open Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-5 sm:mt-6 w-full flex flex-col items-center"
            >
              {/* Embossed Royal Wax Seal */}
              <motion.div
                animate={
                  isOpening
                    ? { scale: [1, 1.3, 0], rotate: 45, opacity: 0 }
                    : { scale: [1, 1.05, 1] }
                }
                transition={
                  isOpening
                    ? { duration: 0.5, ease: 'easeInOut' }
                    : { repeat: Infinity, duration: 3.5, ease: 'easeInOut' }
                }
                className="w-14 h-14 -mb-3 z-20 rounded-full bg-gradient-to-br from-[#DC2626] via-[#991B1B] to-[#7F1D1D] border-2 border-[#FEF08A] shadow-[0_4px_15px_rgba(220,38,38,0.5)] flex items-center justify-center text-[#FEF08A]"
              >
                <div className="w-11 h-11 rounded-full border border-[#FEF08A]/60 flex items-center justify-center">
                  <span className="font-serif text-base font-bold tracking-widest text-[#FFFDF9]">
                    शुभ
                  </span>
                </div>
              </motion.div>

              {/* Grand Button: OPEN INVITATION */}
              <button
                id="open-invitation-btn"
                type="button"
                disabled={isOpening}
                onClick={handleOpenClick}
                className="gold-shimmer-btn group w-full py-4 px-6 rounded-xl text-white font-title text-xs sm:text-sm tracking-[0.26em] uppercase font-bold shadow-lg shadow-[#7F1D1D]/40 hover:shadow-xl hover:shadow-[#991B1B]/50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer disabled:cursor-default"
                aria-label="Open wedding invitation"
              >
                <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />
                <span>OPEN INVITATION</span>
                <Sparkles className="w-4 h-4 text-amber-200 group-hover:-rotate-12 transition-transform duration-300" />
              </button>

              <p className="text-[11px] font-sans font-medium text-[#85601E] mt-2 flex items-center justify-center gap-1.5">
                <DiyaLamp size={16} />
                <span>Tap to unseal the auspicious wedding invitation</span>
                <DiyaLamp size={16} className="scale-x-[-1]" />
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});
