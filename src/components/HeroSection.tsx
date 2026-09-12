import React, { useState, memo } from 'react';
import { motion } from 'motion/react';
import { WeddingInfo } from '../types';
import {
  CardCornerFlourish,
  OrnamentalDivider,
  TraditionalGaneshMurti,
  MandapCanopyToran,
  MulticolorFolkBorder,
  RoyalPeacock,
  RoyalRajasthaniCamel,
  RegalElephant,
  JharokhaArchHeader,
  DiyaLamp,
  SacredKalash,
  RoyalLotus
} from './IndianMotifs';
import { Camera, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  wedding: WeddingInfo;
}

const getStoredPhoto = (fallbackUrl: string): string => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem('paras_meghna_photo');
      if (stored) return stored;
    }
  } catch {
    // Storage access restricted in iframe or sandbox
  }
  return fallbackUrl;
};

export const HeroSection: React.FC<HeroSectionProps> = memo(({ wedding }) => {
  // Check for locally saved user photo from previous session
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return getStoredPhoto(wedding.photoUrl || '/1777036404843.png');
  });
  const [hasImageError, setHasImageError] = useState(false);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          setHasImageError(false);
          try {
            if (typeof window !== 'undefined' && window.localStorage) {
              window.localStorage.setItem('paras_meghna_photo', result);
            }
          } catch {
            // storage quota fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hero-section" className="pt-2 sm:pt-4 pb-10 px-3 sm:px-6 relative overflow-hidden">
      
      {/* 1. GRAND WEDDING MANDAP CANOPY & LUSH MARIGOLD TORAN */}
      <div className="relative mb-2 sm:mb-4">
        <MandapCanopyToran className="opacity-95 drop-shadow-sm" />
      </div>

      {/* Main Wedding Invitation Card with Grand Festive Mandap Layout */}
      <div className="max-w-2xl mx-auto bg-[#FFFDF9] rounded-3xl p-5 sm:p-8 md:p-10 border-3 border-[#D4AF37] shadow-[0_25px_65px_-15px_rgba(180,83,9,0.22)] relative overflow-hidden">
        
        {/* Authentic Gujarati / Rajasthani Multicolor Ribbon Border on top of card */}
        <div className="absolute top-2 inset-x-6 sm:inset-x-10 pointer-events-none opacity-90">
          <MulticolorFolkBorder />
        </div>

        {/* Traditional Corner Flourishes with Kumkum Jewel Dots */}
        <CardCornerFlourish position="top-left" />
        <CardCornerFlourish position="top-right" />
        <CardCornerFlourish position="bottom-left" />
        <CardCornerFlourish position="bottom-right" />

        {/* Double Gold Filigree Hairline Inner Frame */}
        <div className="absolute inset-2.5 sm:inset-3.5 border-2 border-[#D4AF37]/40 rounded-2xl pointer-events-none" />
        <div className="absolute inset-4 sm:inset-5 border border-[#991B1B]/20 rounded-xl pointer-events-none" />

        <div className="relative z-10 text-center flex flex-col items-center">
          
          {/*
            ==================================================================
            2. PROMINENT TOP-CENTER TRADITIONAL LORD GANESHA MURTI
            Reverently placed at the top-center of the main homepage hierarchy,
            seated upon an ornate Lotus Throne with radiant golden aura.
            ==================================================================
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center pt-2 sm:pt-4 mb-2 relative"
          >
            {/* Flanking Auspicious Kalash Pots */}
            <div className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 hidden xs:block opacity-90">
              <SacredKalash size={42} />
            </div>
            <div className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 hidden xs:block opacity-90">
              <SacredKalash size={42} />
            </div>

            {/* Traditional Ganesh Murti with Mantra */}
            <TraditionalGaneshMurti size={128} showMantra={true} />
          </motion.div>

          {/*
            ==================================================================
            3. WEDDING INVITATION TYPOGRAPHY HIERARCHY
            SHUBH VIVAH
            ↓
            PARAS & MEGHNA
            ↓
            24 NOVEMBER 2026
            ==================================================================
          */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full mt-1 mb-2"
          >
            {/* SHUBH VIVAH Heading with Decorative Accents */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="font-title text-xs sm:text-sm tracking-[0.32em] text-[#991B1B] font-bold uppercase">
                SHUBH VIVAH
              </span>
              <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            {/* Sanskrit blessing verse */}
            {wedding.sanskritVerse && (
              <p className="font-serif text-[12px] sm:text-[13px] text-[#78350F] font-medium tracking-wide mb-3 max-w-lg mx-auto opacity-95">
                {wedding.sanskritVerse}
              </p>
            )}

            {/* COUPLE'S NAMES: PARAS & MEGHNA */}
            <div className="my-2 sm:my-3">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1F1A18] tracking-[0.06em] sm:tracking-[0.08em] uppercase leading-tight">
                <span className="inline-block text-[#7F1D1D] hover:text-[#991B1B] transition-colors">
                  {wedding.groomName}
                </span>
                <span className="block sm:inline sm:mx-3 my-1 sm:my-0 font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#D4AF37] font-normal">
                  &amp;
                </span>
                <span className="inline-block text-[#7F1D1D] hover:text-[#991B1B] transition-colors">
                  {wedding.brideName}
                </span>
              </h1>
            </div>

            {/* WEDDING DATE BADGE */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-5 py-2 rounded-full bg-[#FFF8EE] border-2 border-[#D4AF37] shadow-sm mt-1">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <p className="font-title text-xs sm:text-sm md:text-base tracking-[0.24em] text-[#85601E] font-bold uppercase">
                24 NOVEMBER 2026
              </p>
              <span className="w-2 h-2 rounded-full bg-[#047857]" />
            </div>

            {/* Tagline */}
            <p className="font-serif italic text-base sm:text-xl text-[#3D2C24] font-medium max-w-lg mx-auto pt-3 leading-relaxed">
              &ldquo;{wedding.tagline}&rdquo;
            </p>
          </motion.div>

          <OrnamentalDivider className="my-4 max-w-xs mx-auto" />

          {/*
            ==================================================================
            4. HERO PHOTOGRAPH IN LUXURIOUS JHAROKHA ARCH FRAME
            Flanked by majestic royal peacocks (Mor) and Rajasthani decorated camels!
            ==================================================================
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto relative"
          >
            {/* Rajasthani Jharokha Arch Header crowning the photograph */}
            <JharokhaArchHeader className="mb-[-12px] relative z-20 text-[#D4AF37]" />

            {/* Flanking Royal Peacocks (Mor) */}
            <div className="hidden sm:block absolute -left-14 bottom-14 z-20 pointer-events-none drop-shadow-md">
              <RoyalPeacock size={62} />
            </div>
            <div className="hidden sm:block absolute -right-14 bottom-14 z-20 pointer-events-none drop-shadow-md">
              <RoyalPeacock size={62} flip={true} />
            </div>

            {/* Outer Luxurious Arched Frame */}
            <div className="relative bg-[#FFFDF9] rounded-t-full rounded-b-2xl p-3 sm:p-4.5 border-2 border-[#D4AF37] shadow-[0_18px_50px_-12px_rgba(180,83,9,0.25)] transition-all">
              
              {/* Inner Ornamental Frame with subtle Rajasthani arch contours */}
              <div className="relative rounded-t-full rounded-b-xl border border-[#D4AF37]/50 p-2 sm:p-2.5 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F7ECE1]">
                
                <CardCornerFlourish position="bottom-left" />
                <CardCornerFlourish position="bottom-right" />

                {/* Photo Viewport Container (Aspect Ratio 3:4) */}
                <div className="relative aspect-[3/4] w-full rounded-t-full rounded-b-lg overflow-hidden bg-[#FAF7F2] border-2 border-[#D4AF37]/50 shadow-inner group">
                  
                  {!hasImageError ? (
                    <img
                      src={photoSrc}
                      alt="Paras & Meghna"
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={() => setHasImageError(true)}
                      className="w-full h-full object-cover object-center rounded-t-full rounded-b-lg transition-transform duration-700 group-hover:scale-102"
                    />
                  ) : (
                    /* Fallback display if missing */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FAF7F2] via-[#F8EFE2] to-[#EFE2CE]">
                      <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] bg-[#FDFBF7] flex items-center justify-center mb-4 shadow-sm">
                        <span className="font-serif text-2xl text-[#991B1B] font-semibold">
                          P <span className="italic text-[#D4AF37]">&amp;</span> M
                        </span>
                      </div>
                      
                      <p className="font-serif text-lg text-[#1F1A18] font-medium">
                        Paras &amp; Meghna
                      </p>
                      <p className="font-serif italic text-xs text-[#78350F] mt-1 max-w-[200px] leading-relaxed">
                        Personal photograph uploaded in invitation
                      </p>

                      <label
                        htmlFor="photo-upload-input"
                        className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F3ECE1] border border-[#D4AF37] text-[#85601E] text-xs font-sans font-medium cursor-pointer shadow-xs transition-colors"
                      >
                        <Camera className="w-3.5 h-3.5 text-[#EA580C]" />
                        <span>Select Photo</span>
                      </label>
                    </div>
                  )}

                  {/* Photo replace button */}
                  <label
                    htmlFor="photo-upload-input"
                    title="Update photograph"
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#FAF7F2]/95 hover:bg-[#FAF7F2] border border-[#D4AF37] text-[#85601E] flex items-center justify-center shadow-md cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Camera className="w-4 h-4 text-[#EA580C]" />
                    <input
                      id="photo-upload-input"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="sr-only"
                    />
                  </label>
                </div>

                {/* Auspicious Diya Lamps and Couple Names banner under portrait */}
                <div className="pt-2.5 pb-1 flex items-center justify-center gap-3">
                  <DiyaLamp size={24} className="opacity-95 animate-diya-flicker" />
                  <span className="font-title text-[11px] sm:text-xs tracking-[0.28em] text-[#991B1B] font-bold uppercase">
                    {wedding.coupleDisplay}
                  </span>
                  <DiyaLamp size={24} className="opacity-95 scale-x-[-1] animate-diya-flicker" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Traditional Procession Elements at base of hero: Camels & Elephants */}
          <div className="w-full flex items-center justify-around pt-5 pb-1 opacity-90">
            <div className="flex items-center gap-1">
              <RoyalRajasthaniCamel size={58} />
              <span className="hidden sm:inline-block text-[11px] font-title tracking-widest text-[#78350F] uppercase font-bold">
                Mangal Utsav
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#BE185D]">
              <RoyalLotus size={36} />
            </div>

            <div className="flex items-center gap-1">
              <span className="hidden sm:inline-block text-[11px] font-title tracking-widest text-[#78350F] uppercase font-bold">
                Shubh Vivah
              </span>
              <RoyalRajasthaniCamel size={58} flip={true} />
            </div>
          </div>

        </div>

        {/* Bottom Gujarati Folk Border on card */}
        <div className="absolute bottom-2 inset-x-6 sm:inset-x-10 pointer-events-none opacity-90">
          <MulticolorFolkBorder />
        </div>
      </div>
    </section>
  );
});
