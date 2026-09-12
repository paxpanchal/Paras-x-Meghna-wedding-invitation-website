import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { weddingAudio } from '../utils/audio';
import { WeddingInfo } from '../types';

interface MusicPlayerProps {
  wedding: WeddingInfo;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = memo(({ wedding }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(() => weddingAudio.getIsPlaying());
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<number | null>(null);

  // Ref to hold and guarantee reference stability to the singleton Audio instance across re-renders
  const audioInstanceRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Acquire and anchor the singleton Audio instance in the component ref
    audioInstanceRef.current = weddingAudio.getOrCreateAudio(wedding.music.audioSrc);

    // Subscribe to playback changes with safe unsubscribe on cleanup
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });

    return () => {
      unsubscribe();
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, [wedding.music.audioSrc]);

  const handleToggle = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    await weddingAudio.toggle(wedding.music.audioSrc);

    // Provide subtle feedback toast
    setShowToast(true);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => setShowToast(false), 2400);
  }, [wedding.music.audioSrc]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 pointer-events-auto">
      {/* Subtle feedback toast */}
      {showToast && (
        <div className="bg-[#1F1A18]/90 text-[#FDFBF7] text-[11px] px-3 py-1.5 rounded-full shadow-lg backdrop-blur-xs font-sans tracking-wide transition-all select-none">
          {isPlaying ? 'Music playing ♫' : 'Music paused 🔇'}
        </div>
      )}

      {/* Floating Music Control Button */}
      <button
        id="toggle-music-btn"
        type="button"
        onClick={handleToggle}
        className={`group relative flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 shadow-md cursor-pointer select-none ${
          isPlaying
            ? 'bg-[#C5A059] border-[#D4AF37] text-white shadow-[#C5A059]/35 ring-4 ring-[#C5A059]/20 hover:scale-105'
            : 'bg-[#FDFBF7] border-[#C5A059]/50 text-[#85601E] hover:border-[#C5A059] hover:bg-[#FAF0DC] hover:scale-105'
        }`}
        aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
        title={isPlaying ? 'Music playing (tap to pause)' : 'Music paused (tap to play)'}
      >
        {isPlaying ? (
          <span className="text-base font-serif font-bold text-white tracking-tighter leading-none animate-pulse">
            ♫
          </span>
        ) : (
          <span className="text-sm font-sans leading-none text-[#85601E]">
            🔇
          </span>
        )}
      </button>
    </div>
  );
});
