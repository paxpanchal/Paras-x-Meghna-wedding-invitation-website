import React from 'react';
import { motion } from 'motion/react';
import { WeddingInfo } from '../types';
import {
  SacredKalash,
  CardCornerFlourish,
  OrnamentalDivider,
  DiyaLamp,
  MulticolorFolkBorder,
  RoyalLotus
} from './IndianMotifs';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface WeddingDetailsSectionProps {
  wedding: WeddingInfo;
}

export const WeddingDetailsSection: React.FC<WeddingDetailsSectionProps> = ({ wedding }) => {
  return (
    <section id="wedding-details-section" className="py-8 sm:py-10 px-3 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-3 border-[#D4AF37] shadow-[0_20px_50px_-15px_rgba(180,83,9,0.2)] text-center overflow-hidden"
        >
          {/* Top border ribbon */}
          <div className="absolute top-2 inset-x-8 opacity-85 pointer-events-none">
            <MulticolorFolkBorder />
          </div>

          {/* Inner border frame */}
          <div className="absolute inset-2.5 sm:inset-3.5 border-2 border-[#D4AF37]/40 rounded-2xl pointer-events-none" />

          <CardCornerFlourish position="top-left" />
          <CardCornerFlourish position="top-right" />
          <CardCornerFlourish position="bottom-left" />
          <CardCornerFlourish position="bottom-right" />

          {/* Header Sacred Kalash Emblem with flanking auspicious Diya lamps */}
          <div className="relative z-10 flex flex-col items-center pt-2">
            <div className="flex items-center justify-center gap-4 text-[#D4AF37] mb-2">
              <DiyaLamp size={28} className="animate-diya-flicker" />
              <SacredKalash size={52} />
              <DiyaLamp size={28} className="scale-x-[-1] animate-diya-flicker" />
            </div>

            <span className="text-xs sm:text-sm font-title tracking-[0.28em] text-[#991B1B] uppercase font-bold">
              Mangal Vivah Mahotsav
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1A18] font-bold tracking-[0.08em] uppercase mt-1">
              THE WEDDING
            </h2>

            <OrnamentalDivider className="my-4 max-w-xs mx-auto" />

            {/* Details Stack */}
            <div className="space-y-6 my-2 w-full">
              {/* Date Block */}
              <div className="flex flex-col items-center bg-[#FFF8EE]/60 p-3.5 rounded-2xl border border-[#D4AF37]/35 shadow-2xs">
                <div className="w-12 h-12 rounded-full bg-[#FFF8EE] border-2 border-[#D4AF37] flex items-center justify-center text-[#EA580C] mb-1.5 shadow-xs">
                  <Calendar className="w-6 h-6 text-[#EA580C]" />
                </div>
                <p className="font-serif text-2xl sm:text-3xl text-[#7F1D1D] font-bold tracking-wide">
                  {wedding.weddingDateFormatted}
                </p>
                <span className="text-[11px] font-title tracking-widest uppercase text-[#85601E] font-semibold mt-0.5">
                  Auspicious Vivah Tithi
                </span>
              </div>

              {/* Time Block */}
              <div className="flex flex-col items-center bg-[#FFF8EE]/60 p-3.5 rounded-2xl border border-[#D4AF37]/35 shadow-2xs">
                <div className="w-12 h-12 rounded-full bg-[#FFF8EE] border-2 border-[#D4AF37] flex items-center justify-center text-[#991B1B] mb-1.5 shadow-xs">
                  <Clock className="w-6 h-6 text-[#991B1B]" />
                </div>
                <p className="font-serif text-2xl sm:text-3xl text-[#1F1A18] font-bold tracking-wide">
                  {wedding.weddingTimeFormatted}
                </p>
                <span className="text-[11px] font-title tracking-widest uppercase text-[#85601E] font-semibold mt-0.5">
                  Shubh Muhurat
                </span>
              </div>

              {/* Venue Block */}
              <div className="flex flex-col items-center bg-[#FFF8EE]/60 p-4 rounded-2xl border border-[#D4AF37]/35 shadow-2xs">
                <div className="w-12 h-12 rounded-full bg-[#FFF8EE] border-2 border-[#D4AF37] flex items-center justify-center text-[#047857] mb-1.5 shadow-xs">
                  <MapPin className="w-6 h-6 text-[#047857]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#7F1D1D] font-bold tracking-wide">
                  {wedding.venue.name}
                </h3>
                <p className="text-sm sm:text-base text-[#3D302A] font-sans font-medium mt-1">
                  {wedding.venue.subLocation}
                </p>
                <p className="text-xs sm:text-sm text-[#85601E] font-title tracking-wider mt-0.5 uppercase font-bold">
                  {wedding.venue.cityState}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom border ribbon */}
          <div className="absolute bottom-2 inset-x-8 opacity-85 pointer-events-none">
            <MulticolorFolkBorder />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
