import React, { memo } from 'react';
import { motion } from 'motion/react';
import { WeddingInfo } from '../types';
import {
  CardCornerFlourish,
  OrnamentalDivider,
  RegalElephant,
  PaisleyMotif,
  MulticolorFolkBorder,
  SacredKalash,
  RoyalLotus
} from './IndianMotifs';

interface FamilySectionProps {
  wedding: WeddingInfo;
}

export const FamilySection: React.FC<FamilySectionProps> = memo(({ wedding }) => {
  const { groom, bride } = wedding.family;

  return (
    <section id="the-families-section" className="py-8 sm:py-10 px-3 sm:px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-3 border-[#D4AF37] shadow-[0_20px_50px_-15px_rgba(180,83,9,0.2)] text-center overflow-hidden"
        >
          {/* Top Folk border ribbon */}
          <div className="absolute top-2 inset-x-8 opacity-85 pointer-events-none">
            <MulticolorFolkBorder />
          </div>

          {/* Inner decorative border frame */}
          <div className="absolute inset-2.5 sm:inset-3.5 border-2 border-[#D4AF37]/40 rounded-2xl pointer-events-none" />

          {/* Luxury gold corner flourishes */}
          <CardCornerFlourish position="top-left" />
          <CardCornerFlourish position="top-right" />
          <CardCornerFlourish position="bottom-left" />
          <CardCornerFlourish position="bottom-right" />

          {/* Auspicious Royal Elephants & section heading */}
          <div className="relative z-10 flex flex-col items-center pt-2">
            
            {/* Auspicious Hastimangala / Royal Elephants welcoming with raised trunks */}
            <div className="flex items-center justify-center gap-4 text-[#D4AF37] mb-1">
              <RegalElephant size={46} />
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-sm font-serif tracking-[0.24em] text-[#991B1B] uppercase font-bold">
                  ॥ कुलदीपक ॥
                </span>
                <span className="text-[11px] sm:text-xs font-title tracking-[0.22em] text-[#85601E] uppercase font-bold mt-0.5">
                  Shubh Vivah
                </span>
              </div>
              <RegalElephant size={46} flip={true} />
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#1F1A18] font-bold tracking-[0.06em] sm:tracking-[0.08em] uppercase mt-1">
              With the Blessings of Our Families
            </h2>
            <OrnamentalDivider className="my-3 sm:my-4 max-w-xs mx-auto" />
          </div>

          {/* Symmetrical Couple & Family Grid */}
          <div className="relative z-10 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            {/* PARAS'S FAMILY */}
            <div className="flex flex-col items-center text-center space-y-3 px-2 bg-gradient-to-b from-[#FFFDF9] to-[#FFF8EE]/50 p-4 rounded-2xl border border-[#D4AF37]/35 shadow-xs">
              <span className="inline-block px-4 py-1 rounded-full bg-[#FFF8EE] text-[#991B1B] font-title text-[11px] tracking-[0.22em] uppercase font-bold border-2 border-[#D4AF37] shadow-xs">
                Groom's Family
              </span>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#7F1D1D] font-bold tracking-wide uppercase">
                  {groom.fullName}
                </h3>
              </div>

              <div className="space-y-1">
                <p className="font-sans text-xs sm:text-sm text-[#78350F] uppercase tracking-wider font-semibold">
                  Son of
                </p>
                <p className="font-serif text-lg sm:text-xl text-[#1F1A18] font-semibold leading-relaxed">
                  {groom.father}
                </p>
                <p className="text-base text-[#D4AF37] font-serif font-bold">&amp;</p>
                <p className="font-serif text-lg sm:text-xl text-[#1F1A18] font-semibold leading-relaxed">
                  {groom.mother}
                </p>
              </div>

              <div className="pt-2 border-t border-[#D4AF37]/40 w-full max-w-[200px]">
                <p className="text-[11px] uppercase tracking-wider text-[#85601E] font-title font-bold">
                  Hometown
                </p>
                <p className="font-serif text-base text-[#2D2421] font-semibold mt-0.5">
                  {groom.hometown}
                </p>
              </div>
            </div>

            {/* Symmetrical Central Divider for Desktop (Decorative Paisley & Bar) */}
            <div className="hidden md:flex absolute inset-y-8 left-1/2 -translate-x-1/2 flex-col items-center justify-center pointer-events-none">
              <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFDF9] p-2 text-[#D4AF37] rounded-full border-2 border-[#D4AF37] shadow-sm">
                  <PaisleyMotif size={28} />
                </div>
              </div>
            </div>

            {/* Mobile Divider */}
            <div className="md:hidden flex items-center justify-center gap-3 text-[#D4AF37] py-1">
              <span className="w-14 h-[1.5px] bg-[#D4AF37]" />
              <PaisleyMotif size={26} />
              <span className="w-14 h-[1.5px] bg-[#D4AF37]" />
            </div>

            {/* MEGHNA'S FAMILY */}
            <div className="flex flex-col items-center text-center space-y-3 px-2 bg-gradient-to-b from-[#FFFDF9] to-[#FFF8EE]/50 p-4 rounded-2xl border border-[#D4AF37]/35 shadow-xs">
              <span className="inline-block px-4 py-1 rounded-full bg-[#FFF8EE] text-[#991B1B] font-title text-[11px] tracking-[0.22em] uppercase font-bold border-2 border-[#D4AF37] shadow-xs">
                Bride's Family
              </span>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#7F1D1D] font-bold tracking-wide uppercase">
                  {bride.fullName}
                </h3>
              </div>

              <div className="space-y-1">
                <p className="font-sans text-xs sm:text-sm text-[#78350F] uppercase tracking-wider font-semibold">
                  Daughter of
                </p>
                <p className="font-serif text-lg sm:text-xl text-[#1F1A18] font-semibold leading-relaxed">
                  {bride.father}
                </p>
                <p className="text-base text-[#D4AF37] font-serif font-bold">&amp;</p>
                <p className="font-serif text-lg sm:text-xl text-[#1F1A18] font-semibold leading-relaxed">
                  {bride.mother}
                </p>
              </div>

              <div className="pt-2 border-t border-[#D4AF37]/40 w-full max-w-[200px]">
                <p className="text-[11px] uppercase tracking-wider text-[#85601E] font-title font-bold">
                  From
                </p>
                <p className="font-serif text-base text-[#2D2421] font-semibold mt-0.5">
                  {bride.from}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Folk border ribbon */}
          <div className="absolute bottom-2 inset-x-8 opacity-85 pointer-events-none">
            <MulticolorFolkBorder />
          </div>
        </motion.div>
      </div>
    </section>
  );
});
