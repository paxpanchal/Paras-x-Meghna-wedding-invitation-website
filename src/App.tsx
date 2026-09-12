import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { WEDDING_DATA } from './data/weddingData';
import { OpeningScreen } from './components/OpeningScreen';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { FamilySection } from './components/FamilySection';
import { WeddingDetailsSection } from './components/WeddingDetailsSection';
import { VenueSection } from './components/VenueSection';
import { SaveTheDateSection } from './components/SaveTheDateSection';
import { FinalSection } from './components/FinalSection';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloatingPetals';
import { SacredOm } from './components/IndianMotifs';
import { weddingAudio } from './utils/audio';
import { MailOpen } from 'lucide-react';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const wedding = WEDDING_DATA;

  const handleOpenInvitation = useCallback(() => {
    setIsInvitationOpen(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Start subtle wedding music on user interaction
    weddingAudio.startOnOpen(wedding.music.audioSrc);
  }, [wedding.music.audioSrc]);

  const handleShowCover = useCallback(() => {
    setIsInvitationOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1A18] relative selection:bg-[#D4AF37]/25 selection:text-[#7F1D1D]">
      
      {/* 1. CINEMATIC OPENING SCREEN / CEREMONIAL ENVELOPE */}
      <AnimatePresence mode="wait">
        {!isInvitationOpen && (
          <OpeningScreen
            key="opening-screen"
            wedding={wedding}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* FESTIVE FLOATING PETALS EFFECT (Subtle and lightweight) */}
      <FloatingPetals />

      {/* BACKGROUND ORNAMENTAL JALI / PARCHMENT TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 bg-mandala-pattern" />

      {/* TOP INVITATION BAR */}
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D4AF37]/35 px-4 py-2.5 transition-all shadow-2xs">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37]">
              <SacredOm size={24} />
            </span>
            <span className="font-title text-xs sm:text-sm tracking-[0.24em] uppercase font-bold text-[#7F1D1D]">
              {wedding.coupleDisplay}
            </span>
          </div>

          <button
            onClick={handleShowCover}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF8EE] hover:bg-[#FDF0D5] text-[#85601E] font-title tracking-wider text-[11px] uppercase transition-colors border border-[#D4AF37] cursor-pointer shadow-2xs font-semibold"
            title="View the ceremonial cover card"
            aria-label="View cover card"
          >
            <MailOpen className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Cover Card</span>
          </button>
        </div>
      </header>

      {/* MAIN INVITATION CONTENT */}
      <main className="relative z-10 max-w-3xl mx-auto">
        {/* 2. HERO: TOP CANOPY + CENTERED GANESH + TYPOGRAPHY + LUXURIOUS FRAMED PHOTO */}
        <HeroSection wedding={wedding} />

        {/* 3. LIVE ACCURATE COUNTDOWN */}
        <CountdownSection
          targetDateISO={wedding.targetDateTimeISO}
          isActive={isInvitationOpen}
        />

        {/* 4. THE FAMILIES */}
        <FamilySection wedding={wedding} />

        {/* 5. WEDDING DETAILS */}
        <WeddingDetailsSection wedding={wedding} />

        {/* 6. VENUE / DIRECTIONS */}
        <VenueSection wedding={wedding} />

        {/* 7. SAVE THE DATE (ONE GOOGLE CALENDAR BUTTON) */}
        <SaveTheDateSection wedding={wedding} />

        {/* 8. ELEGANT CLOSING */}
        <FinalSection wedding={wedding} />
      </main>

      {/* FLOATING MUSIC CONTROLLER (Activated once invitation is opened) */}
      {isInvitationOpen && <MusicPlayer wedding={wedding} />}
    </div>
  );
}
