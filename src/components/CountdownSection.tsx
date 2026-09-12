import React, { useState, useEffect, memo } from 'react';
import { motion } from 'motion/react';
import { TimeLeft } from '../types';
import {
  OrnamentalDivider,
  MulticolorFolkBorder,
  CardCornerFlourish,
  DiyaLamp,
  RoyalLotus
} from './IndianMotifs';
import { Heart } from 'lucide-react';

interface CountdownSectionProps {
  targetDateISO: string;
  isActive?: boolean;
}

function calculateTimeLeft(targetDateISO: string): TimeLeft {
  // 2026-11-24 11:00:00 Asia/Kolkata
  const targetTime = new Date(targetDateISO).getTime();
  const now = new Date();
  const difference = targetTime - now.getTime();

  if (difference <= 0) {
    return {
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true
    };
  }

  // Calculate calendar months from now to target
  let tempDate = new Date(now.getTime());
  let months = 0;

  while (true) {
    const nextMonth = new Date(tempDate.getTime());
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    if (nextMonth.getTime() <= targetTime) {
      months++;
      tempDate = nextMonth;
    } else {
      break;
    }
  }

  // Calculate remaining days, hours, minutes, seconds after full months
  const remainingMs = targetTime - tempDate.getTime();
  const msInDay = 1000 * 60 * 60 * 24;
  const msInHour = 1000 * 60 * 60;
  const msInMinute = 1000 * 60;
  const msInSecond = 1000;

  const days = Math.floor(remainingMs / msInDay);
  const hours = Math.floor((remainingMs % msInDay) / msInHour);
  const minutes = Math.floor((remainingMs % msInHour) / msInMinute);
  const seconds = Math.floor((remainingMs % msInMinute) / msInSecond);

  return {
    months,
    days,
    hours,
    minutes,
    seconds,
    isExpired: false
  };
}

export const CountdownSection: React.FC<CountdownSectionProps> = memo(({ targetDateISO, isActive = true }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDateISO));

  useEffect(() => {
    // Only run timer interval when section is actively visible/active
    if (!isActive) return;

    // Refresh immediately upon becoming active
    setTimeLeft(calculateTimeLeft(targetDateISO));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO, isActive]);

  const units = [
    { label: 'MONTHS', value: timeLeft.months },
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section id="countdown-section" className="py-8 sm:py-10 px-3 sm:px-6 relative">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Outer Card Enclosure */}
        <div className="relative bg-[#FFFDF9] rounded-3xl p-5 sm:p-8 border-3 border-[#D4AF37] shadow-[0_20px_50px_-15px_rgba(180,83,9,0.2)] overflow-hidden">
          
          {/* Top border ribbon */}
          <div className="absolute top-2 inset-x-8 opacity-85 pointer-events-none">
            <MulticolorFolkBorder />
          </div>

          <CardCornerFlourish position="top-left" />
          <CardCornerFlourish position="top-right" />
          <CardCornerFlourish position="bottom-left" />
          <CardCornerFlourish position="bottom-right" />

          {/* Inner hairline */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-[#D4AF37]/35 rounded-2xl pointer-events-none" />

          <div className="relative z-10 pt-2">
            
            {/* Flanking Diyas & Lotus */}
            <div className="flex items-center justify-center gap-3 mb-1 text-[#D4AF37]">
              <DiyaLamp size={26} className="animate-diya-flicker" />
              <RoyalLotus size={38} />
              <DiyaLamp size={26} className="scale-x-[-1] animate-diya-flicker" />
            </div>

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF8EE] border border-[#D4AF37] shadow-2xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span className="font-title text-[11px] sm:text-xs tracking-[0.26em] text-[#991B1B] uppercase font-bold">
                Shubh Muhurat Countdown
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#1F1A18] font-bold tracking-wide uppercase mt-1">
              COUNTING DOWN TO THE CELEBRATION
            </h2>

            <p className="font-title text-xs sm:text-sm tracking-[0.22em] text-[#85601E] font-semibold uppercase mt-1">
              24 NOVEMBER 2026 &bull; 11:00 AM IST
            </p>

            {timeLeft.isExpired ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="my-6 p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-md"
              >
                <div className="flex items-center justify-center gap-2 text-rose-600 mb-2">
                  <Heart className="w-8 h-8 fill-rose-600 animate-pulse" />
                </div>
                <h3 className="font-serif text-3xl sm:text-5xl text-[#7F1D1D] font-bold">
                  Today is the auspicious day! ❤️
                </h3>
              </motion.div>
            ) : (
              <div className="mt-6 mb-2 grid grid-cols-5 gap-1.5 sm:gap-3.5 max-w-xl mx-auto">
                {units.map((unit, idx) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FFF8EE] rounded-xl sm:rounded-2xl py-3 px-1 sm:py-4 sm:px-2 border-2 border-[#D4AF37] shadow-md flex flex-col items-center justify-center overflow-hidden"
                  >
                    {/* Traditional Kumkum top highlight */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EA580C] via-[#DC2626] to-[#BE185D]" />
                    
                    {/* Corner bandhani dots */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

                    <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#7F1D1D] tracking-tight tabular-nums mt-1">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    
                    <span className="font-title text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] text-[#B45309] font-bold uppercase mt-1">
                      {unit.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            <OrnamentalDivider className="mt-6 max-w-xs mx-auto" />
          </div>

          {/* Bottom border ribbon */}
          <div className="absolute bottom-2 inset-x-8 opacity-85 pointer-events-none">
            <MulticolorFolkBorder />
          </div>
        </div>
      </div>
    </section>
  );
});
