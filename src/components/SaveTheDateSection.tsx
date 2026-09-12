import React from 'react';
import { motion } from 'motion/react';
import { WeddingInfo } from '../types';
import { getGoogleCalendarUrl } from '../utils/calendar';
import { Calendar, ExternalLink } from 'lucide-react';
import { CardCornerFlourish, OrnamentalDivider, MulticolorFolkBorder, DiyaLamp, RoyalLotus } from './IndianMotifs';

interface SaveTheDateSectionProps {
  wedding: WeddingInfo;
}

export const SaveTheDateSection: React.FC<SaveTheDateSectionProps> = ({ wedding }) => {
  const googleCalendarUrl = getGoogleCalendarUrl(wedding);

  const handleGoogleCalendarClick = () => {
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calendar-section" className="py-8 sm:py-10 px-3 sm:px-6 relative">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-3 border-[#D4AF37] shadow-[0_20px_50px_-15px_rgba(180,83,9,0.2)] relative overflow-hidden"
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
            <div className="flex items-center justify-center gap-3 mb-2">
              <DiyaLamp size={26} className="animate-diya-flicker" />
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF8EE] text-[#EA580C] border-2 border-[#D4AF37] shadow-xs">
                <Calendar className="w-6 h-6 text-[#EA580C]" />
              </div>
              <DiyaLamp size={26} className="scale-x-[-1] animate-diya-flicker" />
            </div>

            <span className="font-title text-[11px] sm:text-xs tracking-[0.28em] text-[#991B1B] uppercase font-bold">
              SAVE THE AUSPICIOUS DATE
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1A18] font-bold tracking-wide mt-1.5">
              24 November 2026
            </h3>

            <p className="text-sm sm:text-base text-[#3D302A] font-medium mt-1">
              11:00 AM IST &bull; Mumbai
            </p>

            <OrnamentalDivider className="my-5 max-w-xs mx-auto" />

            {/* ONE Google Calendar Button in Royal Maroon & Gold */}
            <div className="w-full max-w-xs">
              <button
                id="add-to-google-calendar-btn"
                onClick={handleGoogleCalendarClick}
                className="gold-shimmer-btn w-full py-4 px-6 rounded-xl text-white font-title text-xs sm:text-sm tracking-[0.2em] uppercase font-bold shadow-lg shadow-[#7F1D1D]/35 hover:shadow-xl hover:shadow-[#991B1B]/45 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                aria-label="Add wedding to Google Calendar"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>ADD TO GOOGLE CALENDAR</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
              </button>
            </div>

            <p className="text-xs text-[#78350F] mt-3 font-sans font-medium">
              Opens Google Calendar to confirm and save the ceremony in your schedule.
            </p>
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
