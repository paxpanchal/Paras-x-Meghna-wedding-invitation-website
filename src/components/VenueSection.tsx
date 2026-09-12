import React from 'react';
import { motion } from 'motion/react';
import { WeddingInfo } from '../types';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { CardCornerFlourish, OrnamentalDivider, MulticolorFolkBorder, DiyaLamp, RoyalLotus } from './IndianMotifs';

interface VenueSectionProps {
  wedding: WeddingInfo;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ wedding }) => {
  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/bJxEDWNxDQtLD2CBA', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="venue-section" className="py-8 sm:py-10 px-3 sm:px-6 relative">
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

          {/* Inner frame */}
          <div className="absolute inset-2.5 sm:inset-3.5 border-2 border-[#D4AF37]/40 rounded-2xl pointer-events-none" />

          <CardCornerFlourish position="top-left" />
          <CardCornerFlourish position="top-right" />
          <CardCornerFlourish position="bottom-left" />
          <CardCornerFlourish position="bottom-right" />

          <div className="relative z-10 flex flex-col items-center pt-2">
            {/* Temple / Mandir decorative icon with flanking diyas */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <DiyaLamp size={26} className="animate-diya-flicker" />
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF8EE] text-[#EA580C] border-2 border-[#D4AF37] shadow-xs">
                <MapPin className="w-6 h-6 text-[#EA580C]" />
              </div>
              <DiyaLamp size={26} className="scale-x-[-1] animate-diya-flicker" />
            </div>

            <span className="text-[11px] sm:text-xs font-title tracking-[0.28em] text-[#991B1B] uppercase font-bold">
              VENUE &amp; DIRECTIONS
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1A18] font-bold tracking-wide uppercase mt-1">
              {wedding.venue.name}
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#3D302A] font-medium mt-1.5">
              {wedding.venue.subLocation}, Mumbai
            </p>

            <OrnamentalDivider className="my-5 max-w-xs mx-auto" />

            {/* Get Directions Button in Royal Red & Gold */}
            <div className="w-full max-w-xs">
              <button
                id="get-directions-btn"
                onClick={handleGetDirections}
                className="gold-shimmer-btn w-full py-4 px-6 rounded-xl text-white font-title text-xs sm:text-sm tracking-[0.22em] uppercase font-bold shadow-lg shadow-[#7F1D1D]/35 hover:shadow-xl hover:shadow-[#991B1B]/45 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                aria-label="Get directions to Dandeshwar Shankar Mandir"
              >
                <Navigation className="w-4 h-4 text-amber-200" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
              </button>
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
