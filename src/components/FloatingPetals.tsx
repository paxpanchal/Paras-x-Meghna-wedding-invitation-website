import React, { memo } from 'react';

/**
 * Lightweight floating marigold petals and golden sparkles
 * Adds a magical, subtle festive celebration ambience without DOM bloat or performance hit.
 * Pure CSS animations, pointer-events-none so it never intercepts user clicks.
 */
export const FloatingPetals: React.FC = memo(() => {
  // 7 lightweight decorative petal particles with fixed varied timings
  const petals = [
    { id: 1, left: '6%', delay: '0s', duration: '9s', size: 14, color: '#EA580C' },
    { id: 2, left: '22%', delay: '3.5s', duration: '11s', size: 12, color: '#F59E0B' },
    { id: 3, left: '44%', delay: '1.8s', duration: '10s', size: 16, color: '#BE185D' },
    { id: 4, left: '62%', delay: '5s', duration: '12s', size: 13, color: '#EA580C' },
    { id: 5, left: '78%', delay: '2.2s', duration: '9.5s', size: 15, color: '#F59E0B' },
    { id: 6, left: '91%', delay: '4.2s', duration: '10.5s', size: 11, color: '#D4AF37' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 opacity-0"
          style={{
            left: p.left,
            animation: `gentleDrift ${p.duration} linear ${p.delay} infinite`,
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            {/* Curved organic petal shape */}
            <path
              d="M10 2 C15 5 18 10 16 15 C14 18 8 19 4 16 C1 12 3 6 10 2 Z"
              fill={p.color}
              opacity="0.85"
            />
            {/* Subtle inner highlight */}
            <circle cx="10" cy="10" r="1.5" fill="#FEF08A" opacity="0.9" />
          </svg>
        </div>
      ))}
    </div>
  );
});
