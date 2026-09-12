import React from 'react';

/**
 * Sacred Om (ॐ) in graceful royal gold calligraphy
 */
export const SacredOm: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-label="Sacred Om Symbol"
  >
    <path
      d="M32 25C26 25 20 29 20 37C20 45 28 50 36 50C25 50 17 56 17 66C17 76 27 82 40 82C53 82 62 73 62 62C62 54 57 48 48 45C58 43 65 37 65 29C65 20 54 14 43 14C36 14 30 17 26 21"
      stroke="#D4AF37"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48 45C55 52 64 57 78 57C85 57 91 54 91 46C91 38 82 35 73 35"
      stroke="#D4AF37"
      strokeWidth="3.6"
      strokeLinecap="round"
    />
    <path
      d="M60 20C70 14 84 14 92 20"
      stroke="#D4AF37"
      strokeWidth="3.6"
      strokeLinecap="round"
    />
    <circle cx="76" cy="11" r="4" fill="#DC2626" stroke="#D4AF37" strokeWidth="1" />
  </svg>
);

/**
 * AUTHENTIC TRADITIONAL INDIAN LORD GANESHA MURTI / IDOL
 *
 * Designed strictly as an authentic traditional Indian wedding invitation Ganesh murti:
 * - Seated cross-legged in Sukhasana / Padmasana upon an ornate double-blooming Pink & Gold Lotus Throne
 * - Full traditional elephant head, gentle trunk holding golden modak / laddoo
 * - Ornate tiered golden Mukut crown with jewels, pearls, and a kalash finial
 * - Radiant Prabhavali (golden aureole halo with sunburst rays and filigree scrollwork)
 * - Four divine arms:
 *   - Upper right: holding golden Ankusha (elephant goad)
 *   - Upper left: holding golden Pasha / Lotus
 *   - Lower right: raised in Abhaya Mudra (blessing of fearlessness) with auspicious vermilion mark
 *   - Lower left: holding a golden bowl of sweet modaks towards which his trunk curves
 * - Yellow/saffron Pitambar silk dhoti with red and gold borders, pearl necklaces, Janeu sacred thread
 * - Flanked by blooming pink lotuses with leaves
 */
export const TraditionalGaneshMurti: React.FC<{
  className?: string;
  size?: number;
  showMantra?: boolean;
}> = ({ className = '', size = 130, showMantra = true }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Sacred Golden Prabhavali Halo & Auspicious Sanctum Frame */}
      <div
        className="relative flex items-center justify-center rounded-full p-2 transition-transform hover:scale-105 duration-300"
        style={{
          width: size,
          height: size,
          background: 'radial-gradient(circle, #FEF08A 0%, #F59E0B 45%, #D97706 75%, #92400E 100%)',
          boxShadow: '0 0 25px rgba(245, 158, 11, 0.45), 0 6px 16px rgba(120, 53, 15, 0.35)',
        }}
      >
        {/* Outer Radiant Sunburst Dotted Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FEF08A]/80 animate-[spin_60s_linear_infinite]" />

        {/* Ornate Gold Filigree Inner Rim */}
        <div className="absolute inset-1 rounded-full border border-amber-900/40 pointer-events-none" />

        {/* Authentic Traditional Indian Ganpati Murti Seated on Lotus */}
        <img
          src="/images/traditional-ganesh-lotus.png"
          alt="Lord Ganesha - Pratham Pujya Vignaharta"
          className="w-full h-full object-cover rounded-full shadow-inner z-10"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.endsWith('traditional-ganesh-murti.png')) {
              target.src = '/images/traditional-ganesh-murti.png';
            }
          }}
        />
      </div>

      {/* Auspicious Shlokas beneath Ganesh */}
      {showMantra && (
        <div className="flex flex-col items-center mt-2.5 text-center">
          <span className="font-serif text-base sm:text-lg tracking-[0.2em] text-[#991B1B] font-bold drop-shadow-sm">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="text-[11px] sm:text-xs font-title text-[#85601E] tracking-[0.16em] uppercase font-semibold mt-0.5">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
          </span>
        </div>
      )}
    </div>
  );
};

export const CenteredGaneshIdol = TraditionalGaneshMurti;
export const GaneshIdol = TraditionalGaneshMurti;

/**
 * AUTHENTIC RAJASTHANI CEREMONIAL CAMEL (WITH SADDLE & CHHATRI UMBRELLA)
 * Inspired directly by the right panel of the uploaded reference card.
 */
export const RoyalRajasthaniCamel: React.FC<{
  className?: string;
  size?: number;
  flip?: boolean;
}> = ({ className = '', size = 80, flip = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${flip ? 'scale-x-[-1]' : ''} inline-block select-none drop-shadow-sm ${className}`}
      aria-label="Decorated Rajasthani Camel"
    >
      <defs>
        <linearGradient id="camelBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="60%" stopColor="#CA8A04" />
          <stop offset="100%" stopColor="#A16207" />
        </linearGradient>
        <linearGradient id="saddleTurquoise" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* 1. FESTIVE ROYAL CHHATRI (UMBRELLA ON CAMEL HUMP) */}
      <g id="camel-chhatri">
        {/* Umbrella Pole */}
        <line x1="50" y1="46" x2="50" y2="18" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" />
        {/* Golden Finial atop Umbrella */}
        <circle cx="50" cy="16" r="2.5" fill="#F59E0B" stroke="#D4AF37" strokeWidth="0.8" />
        <circle cx="50" cy="16" r="1.1" fill="#DC2626" />
        {/* Umbrella Dome (Scalloped Rani Pink & Gold brocade) */}
        <path
          d="M32 28 C32 20 40 18 50 18 C60 18 68 20 68 28 C62 30 56 28 50 30 C44 28 38 30 32 28 Z"
          fill="#BE185D"
          stroke="#D4AF37"
          strokeWidth="1.4"
        />
        {/* Gold Ribs on Umbrella */}
        <path d="M42 20 Q44 24 40 29" stroke="#FEF08A" strokeWidth="1" />
        <path d="M58 20 Q56 24 60 29" stroke="#FEF08A" strokeWidth="1" />
        {/* Dangling Brass Bells from Umbrella rim */}
        <circle cx="34" cy="32" r="1.4" fill="#F59E0B" />
        <circle cx="42" cy="33" r="1.4" fill="#F59E0B" />
        <circle cx="50" cy="33" r="1.5" fill="#DC2626" />
        <circle cx="58" cy="33" r="1.4" fill="#F59E0B" />
        <circle cx="66" cy="32" r="1.4" fill="#F59E0B" />
      </g>

      {/* 2. CAMEL BODY & LEGS */}
      {/* Camel Hump */}
      <ellipse cx="50" cy="50" rx="14" ry="11" fill="url(#camelBody)" stroke="#78350F" strokeWidth="1.2" />

      {/* Camel Torso */}
      <path
        d="M32 58 C30 52 40 48 54 48 C68 48 76 54 74 64 C72 72 58 74 44 74 C34 74 32 66 32 58 Z"
        fill="url(#camelBody)"
        stroke="#78350F"
        strokeWidth="1.4"
      />

      {/* Long Curved Elegant Neck */}
      <path
        d="M68 62 C74 56 78 44 76 32 C75 26 71 22 74 18 C76 15 82 17 84 21 C86 26 82 34 80 44 C78 54 74 64 68 62 Z"
        fill="url(#camelBody)"
        stroke="#78350F"
        strokeWidth="1.4"
      />

      {/* Camel Head & Muzzle */}
      <ellipse cx="80" cy="18" rx="6" ry="4.5" fill="url(#camelBody)" stroke="#78350F" strokeWidth="1.2" />
      {/* Eye with Eyelash */}
      <circle cx="79" cy="16.5" r="1.3" fill="#1F1A18" />
      <line x1="77.5" y1="15" x2="80.5" y2="15" stroke="#78350F" strokeWidth="0.8" />
      {/* Ear */}
      <path d="M75 14 C73 11 74 9 76 11 Z" fill="url(#camelBody)" stroke="#78350F" strokeWidth="0.8" />
      {/* Bridle Halter (Red & Gold) */}
      <path d="M75 17 Q80 19 85 18" stroke="#DC2626" strokeWidth="1.2" />
      <circle cx="80" cy="18" r="1" fill="#FEF08A" />

      {/* Decorative Beaded Neck Garland (Ghungroo) */}
      <path d="M72 38 Q78 40 80 36" stroke="#BE185D" strokeWidth="2" />
      <circle cx="76" cy="40" r="1.6" fill="#F59E0B" stroke="#78350F" strokeWidth="0.5" />
      <circle cx="73" cy="48" r="1.5" fill="#047857" />
      <circle cx="75" cy="52" r="1.5" fill="#DC2626" />

      {/* 3. DECORATED SADDLE BLANKET (KATHI / JHOOL) */}
      <g id="camel-saddle">
        {/* Turquoise & Emerald Base Cloth */}
        <path
          d="M40 48 H60 L62 66 C62 68 40 68 38 66 Z"
          fill="url(#saddleTurquoise)"
          stroke="#D4AF37"
          strokeWidth="1.4"
        />
        {/* Inner Vermilion Diamond Center */}
        <polygon points="50,52 56,58 50,64 44,58" fill="#DC2626" stroke="#FEF08A" strokeWidth="0.8" />
        <circle cx="50" cy="58" r="1.6" fill="#FEF08A" />
        {/* Saddle Tassels */}
        <circle cx="42" cy="68" r="1.4" fill="#EA580C" />
        <circle cx="50" cy="69" r="1.6" fill="#D4AF37" />
        <circle cx="58" cy="68" r="1.4" fill="#EA580C" />
      </g>

      {/* 4. LEGS & TAIL */}
      {/* Front Legs */}
      <path d="M64 68 L66 84 L64 94 H68 L70 84 L70 66" stroke="#78350F" strokeWidth="1.2" fill="url(#camelBody)" />
      <path d="M60 70 L61 82 L59 93 H63 L65 82 L66 68" stroke="#78350F" strokeWidth="1.2" fill="url(#camelBody)" />
      {/* Back Legs */}
      <path d="M36 68 L32 82 L34 94 H38 L36 82 L42 68" stroke="#78350F" strokeWidth="1.2" fill="url(#camelBody)" />
      <path d="M42 70 L39 82 L40 93 H44 L44 82 L46 70" stroke="#78350F" strokeWidth="1.2" fill="url(#camelBody)" />
      {/* Hooves */}
      <rect x="64" y="93" width="4" height="2.5" rx="1" fill="#451A03" />
      <rect x="59" y="92" width="4" height="2.5" rx="1" fill="#451A03" />
      <rect x="34" y="93" width="4" height="2.5" rx="1" fill="#451A03" />
      <rect x="40" y="92" width="4" height="2.5" rx="1" fill="#451A03" />
      {/* Tail with Pom-pom */}
      <path d="M32 60 Q26 68 28 76" stroke="#78350F" strokeWidth="1.6" fill="none" />
      <circle cx="28" cy="76" r="2" fill="#DC2626" />
    </svg>
  );
};

/**
 * MAGNIFICENT ROYAL PEACOCK (MOR)
 * Rich Royal Blue & Turquoise body, Emerald & Gold plumage with eye feathers.
 */
export const RoyalPeacock: React.FC<{
  className?: string;
  size?: number;
  flip?: boolean;
}> = ({ className = '', size = 68, flip = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${flip ? 'scale-x-[-1]' : ''} inline-block select-none drop-shadow-sm ${className}`}
      aria-label="Royal Peacock (Mor)"
    >
      <defs>
        <linearGradient id="peacockRoyalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="40%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <linearGradient id="peacockPlumage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="45%" stopColor="#047857" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
      </defs>

      {/* Sweeping Peacock Feather Train / Plumes */}
      <g id="peacock-train">
        <path
          d="M40 70 C24 82 12 76 6 62 C2 52 8 40 18 36 C32 30 46 36 54 48"
          stroke="url(#peacockPlumage)"
          strokeWidth="3.2"
          fill="#047857"
          fillOpacity="0.25"
        />

        {/* Feather 1 */}
        <circle cx="14" cy="54" r="6.5" fill="#0284C7" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="14" cy="54" r="4.2" fill="#BE185D" />
        <circle cx="14" cy="54" r="2" fill="#FEF08A" />

        {/* Feather 2 */}
        <circle cx="24" cy="42" r="6.5" fill="#0284C7" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="24" cy="42" r="4.2" fill="#BE185D" />
        <circle cx="24" cy="42" r="2" fill="#FEF08A" />

        {/* Feather 3 */}
        <circle cx="20" cy="68" r="6" fill="#0284C7" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="20" cy="68" r="3.8" fill="#BE185D" />
        <circle cx="20" cy="68" r="1.8" fill="#FEF08A" />

        {/* Feather 4 */}
        <circle cx="34" cy="56" r="6.5" fill="#0284C7" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="34" cy="56" r="4.2" fill="#BE185D" />
        <circle cx="34" cy="56" r="2" fill="#FEF08A" />
      </g>

      {/* Peacock Body, Chest & S-curve Neck */}
      <path
        d="M52 48 C52 48 42 58 45 72 C48 84 62 88 72 82 C80 77 82 66 78 56 C74 52 66 50 62 46"
        fill="url(#peacockRoyalBlue)"
        stroke="#D4AF37"
        strokeWidth="1.6"
      />

      {/* S-curve Neck & Head looking over shoulder */}
      <path
        d="M62 48 C60 38 65 30 72 22 C76 18 82 18 84 22 C86 27 82 34 78 42"
        stroke="url(#peacockRoyalBlue)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Head */}
      <circle cx="83" cy="21" r="5" fill="#0284C7" stroke="#D4AF37" strokeWidth="1.2" />
      <circle cx="85" cy="20.5" r="1.5" fill="#1F1A18" />
      {/* White eye accent */}
      <path d="M82 19 Q85 18 87 20" stroke="#FFFDF9" strokeWidth="0.8" />
      {/* Gold Beak */}
      <path d="M88 20 L94 22 L88 24 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="0.6" />

      {/* Crown Crest (Kalgi / 3 Royal Feather Plumes) */}
      <line x1="82" y1="16" x2="76" y2="8" stroke="#D4AF37" strokeWidth="1.4" />
      <circle cx="76" cy="8" r="2" fill="#BE185D" stroke="#D4AF37" strokeWidth="0.8" />

      <line x1="83" y1="16" x2="83" y2="6" stroke="#D4AF37" strokeWidth="1.4" />
      <circle cx="83" cy="6" r="2.2" fill="#047857" stroke="#D4AF37" strokeWidth="0.8" />

      <line x1="84" y1="16" x2="90" y2="8" stroke="#D4AF37" strokeWidth="1.4" />
      <circle cx="90" cy="8" r="2" fill="#BE185D" stroke="#D4AF37" strokeWidth="0.8" />

      {/* Gold Necklace with ruby gemstone */}
      <path d="M72 32 Q77 36 80 32" stroke="#D4AF37" strokeWidth="1.6" />
      <circle cx="76" cy="35" r="1.5" fill="#DC2626" />
    </svg>
  );
};

/**
 * AUSPICIOUS ROYAL PROCESSION ELEPHANT (AIRAVATA / GAJA)
 * With raised trunk in Hastimangala greeting, ceremonial crimson jhool blanket, and gold tusks.
 */
export const RegalElephant: React.FC<{ className?: string; size?: number; flip?: boolean }> = ({
  className = '',
  size = 64,
  flip = false,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${flip ? 'scale-x-[-1]' : ''} inline-block select-none drop-shadow-sm ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="elephantJhool" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="60%" stopColor="#991B1B" />
        <stop offset="100%" stopColor="#7F1D1D" />
      </linearGradient>
    </defs>

    {/* Elephant Body */}
    <path
      d="M20 60 V44 C20 30 30 24 44 24 C58 24 68 32 68 44 V60"
      stroke="#78350F"
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="#292524"
    />

    {/* Legs with Ankle Bells */}
    <rect x="22" y="54" width="8" height="15" rx="3" fill="#292524" stroke="#78350F" strokeWidth="1.6" />
    <rect x="34" y="54" width="8" height="15" rx="3" fill="#292524" stroke="#78350F" strokeWidth="1.6" />
    <rect x="48" y="54" width="8" height="15" rx="3" fill="#292524" stroke="#78350F" strokeWidth="1.6" />
    <rect x="58" y="54" width="8" height="15" rx="3" fill="#292524" stroke="#78350F" strokeWidth="1.6" />

    {/* Auspicious Raised Trunk holding a Pink Lotus */}
    <path
      d="M68 42 C74 42 80 36 80 26 C80 20 74 18 70 21 C68 23 68 27 72 27"
      stroke="#78350F"
      strokeWidth="3.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Pink Lotus held by Trunk */}
    <circle cx="70" cy="18" r="2.5" fill="#DB2777" stroke="#FEF08A" strokeWidth="0.8" />

    {/* Gold Tusk */}
    <path d="M66 46 L76 49 L66 52 Z" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="1.2" />

    {/* Eye with golden decorative surround */}
    <circle cx="62" cy="34" r="1.8" fill="#1F1A18" />
    <circle cx="62" cy="34" r="3" stroke="#D4AF37" strokeWidth="0.8" fill="none" />

    {/* Ceremonial Saddle Blanket (Jhool) */}
    <path
      d="M30 32 H52 V54 C52 56 30 56 30 54 Z"
      fill="url(#elephantJhool)"
      stroke="#D4AF37"
      strokeWidth="1.8"
    />
    {/* Jhool Gold Border & Jewels */}
    <rect x="33" y="35" width="16" height="15" stroke="#FEF08A" strokeWidth="1" fill="none" />
    <circle cx="41" cy="42" r="2.8" fill="#F59E0B" stroke="#D4AF37" strokeWidth="0.8" />
    <circle cx="41" cy="42" r="1.2" fill="#047857" />
    {/* Tassels */}
    <circle cx="34" cy="54" r="1.4" fill="#FEF08A" />
    <circle cx="41" cy="54" r="1.4" fill="#FEF08A" />
    <circle cx="48" cy="54" r="1.4" fill="#FEF08A" />

    {/* Royal Forehead Plate (Nettipattam) in Gold */}
    <path d="M60 27 Q64 30 68 27" stroke="#D4AF37" strokeWidth="2.4" />
    <circle cx="64" cy="30" r="1.5" fill="#DC2626" />
  </svg>
);

/**
 * AUTHENTIC RAJASTHANI DESERT PALACE & CAMEL CARAVAN SILHOUETTE
 * Inspired directly by the bottom section of the middle card of the reference invitation.
 */
export const RajasthaniPalaceDesertLandscape: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="desertSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="duneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>

        {/* Sky glow */}
        <rect x="0" y="0" width="800" height="120" fill="url(#desertSky)" />

        {/* Distant Fort / Palace Skyline Silhouette */}
        <g id="palace-skyline" fill="#B45309" opacity="0.85">
          {/* Main Palace Domes & Chhatris */}
          {/* Left Palace Block */}
          <rect x="80" y="55" width="90" height="40" />
          <path d="M85 55 C85 45 95 38 100 38 C105 38 115 45 115 55 Z" />
          <circle cx="100" cy="36" r="2" />
          <path d="M135 55 C135 48 142 42 147 42 C152 42 159 48 159 55 Z" />
          <circle cx="147" cy="40" r="1.5" />

          {/* Central Grand Fort & Chhatri Pavilions */}
          <rect x="320" y="48" width="160" height="50" />
          {/* Central Dome */}
          <path d="M380 48 C380 32 395 24 400 24 C405 24 420 32 420 48 Z" />
          <circle cx="400" cy="22" r="2.5" />
          <line x1="400" y1="20" x2="400" y2="16" stroke="#B45309" strokeWidth="1.5" />

          {/* Flanking Chhatri domes */}
          <path d="M340 48 C340 38 350 32 355 32 C360 32 370 38 370 48 Z" />
          <circle cx="355" cy="30" r="1.8" />
          <path d="M430 48 C430 38 440 32 445 32 C450 32 460 38 460 48 Z" />
          <circle cx="445" cy="30" r="1.8" />

          {/* Right Palace Block */}
          <rect x="620" y="58" width="80" height="40" />
          <path d="M640 58 C640 48 650 42 655 42 C660 42 670 48 670 58 Z" />
          <circle cx="655" cy="40" r="1.8" />

          {/* Palm Trees */}
          <path d="M210 90 Q215 65 220 50" stroke="#78350F" strokeWidth="2" />
          <circle cx="220" cy="48" r="8" fill="#047857" opacity="0.8" />
          <path d="M570 90 Q565 65 560 52" stroke="#78350F" strokeWidth="2" />
          <circle cx="560" cy="50" r="7" fill="#047857" opacity="0.8" />
        </g>

        {/* Rolling Sand Dunes */}
        <path
          d="M0 80 Q200 65 400 85 Q600 100 800 78 L800 120 L0 120 Z"
          fill="url(#duneGrad)"
          opacity="0.9"
        />

        {/* Camel Caravan walking across dunes */}
        <g id="camel-caravan" transform="translate(180, 48) scale(0.42)" fill="#451A03">
          {/* Camel 1 (Leader) */}
          <g transform="translate(0, 0)">
            <ellipse cx="50" cy="50" rx="14" ry="11" />
            <path d="M32 58 C30 52 40 48 54 48 C68 48 76 54 74 64 C72 72 58 74 44 74 C34 74 32 66 32 58 Z" />
            <path d="M68 62 C74 56 78 44 76 32 C75 26 71 22 74 18 C76 15 82 17 84 21 C86 26 82 34 80 44 C78 54 74 64 68 62 Z" />
            <ellipse cx="80" cy="18" rx="6" ry="4.5" />
            <line x1="50" y1="46" x2="50" y2="24" stroke="#451A03" strokeWidth="3" />
            <path d="M36 28 C36 22 42 20 50 20 C58 20 64 22 64 28 Z" fill="#991B1B" />
            <line x1="64" y1="68" x2="68" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="60" y1="70" x2="60" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="36" y1="68" x2="34" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="42" y1="70" x2="42" y2="92" stroke="#451A03" strokeWidth="3" />
          </g>

          {/* Camel 2 */}
          <g transform="translate(110, 8)">
            <ellipse cx="50" cy="50" rx="14" ry="11" />
            <path d="M32 58 C30 52 40 48 54 48 C68 48 76 54 74 64 C72 72 58 74 44 74 C34 74 32 66 32 58 Z" />
            <path d="M68 62 C74 56 78 44 76 32 C75 26 71 22 74 18 C76 15 82 17 84 21 C86 26 82 34 80 44 C78 54 74 64 68 62 Z" />
            <ellipse cx="80" cy="18" rx="6" ry="4.5" />
            <line x1="50" y1="46" x2="50" y2="24" stroke="#451A03" strokeWidth="3" />
            <path d="M36 28 C36 22 42 20 50 20 C58 20 64 22 64 28 Z" fill="#991B1B" />
            <line x1="64" y1="68" x2="68" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="60" y1="70" x2="60" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="36" y1="68" x2="34" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="42" y1="70" x2="42" y2="92" stroke="#451A03" strokeWidth="3" />
          </g>

          {/* Camel 3 */}
          <g transform="translate(220, 16)">
            <ellipse cx="50" cy="50" rx="14" ry="11" />
            <path d="M32 58 C30 52 40 48 54 48 C68 48 76 54 74 64 C72 72 58 74 44 74 C34 74 32 66 32 58 Z" />
            <path d="M68 62 C74 56 78 44 76 32 C75 26 71 22 74 18 C76 15 82 17 84 21 C86 26 82 34 80 44 C78 54 74 64 68 62 Z" />
            <ellipse cx="80" cy="18" rx="6" ry="4.5" />
            <line x1="50" y1="46" x2="50" y2="24" stroke="#451A03" strokeWidth="3" />
            <path d="M36 28 C36 22 42 20 50 20 C58 20 64 22 64 28 Z" fill="#991B1B" />
            <line x1="64" y1="68" x2="68" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="60" y1="70" x2="60" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="36" y1="68" x2="34" y2="92" stroke="#451A03" strokeWidth="3" />
            <line x1="42" y1="70" x2="42" y2="92" stroke="#451A03" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
};

/**
 * GRAND WEDDING MANDAP CANOPY & LUSH MARIGOLD TORAN
 * Rich silk drapes in vermilion red, rani pink, and marigold with gold gota-patti scallops,
 * double-tiered marigold pom-pom garlands, fresh mango leaves, and swaying brass temple bells.
 */
export const MandapCanopyToran: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex flex-col items-center pointer-events-none select-none relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1000 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-5xl h-auto"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <linearGradient id="scallopSilk" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7F1D1D" />
            <stop offset="35%" stopColor="#991B1B" />
            <stop offset="70%" stopColor="#BE185D" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
          <linearGradient id="gotaPattiGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <radialGradient id="marigoldDeepOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="35%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>
          <radialGradient id="marigoldVibrantYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </radialGradient>
        </defs>

        {/* 1. TOP CELEBRATION BORDER: Bandhani / Geometric folk ribbon across top */}
        <rect x="0" y="0" width="1000" height="9" fill="#7F1D1D" />
        <rect x="0" y="9" width="1000" height="3" fill="#D4AF37" />
        {Array.from({ length: 50 }).map((_, idx) => (
          <circle key={idx} cx={10 + idx * 20} cy="4.5" r="2.2" fill={idx % 2 === 0 ? "#FEF08A" : "#047857"} />
        ))}

        {/* 2. SCALLOPED ROYAL SILK BROCADE DRAPES (7 graceful scallops) */}
        <path
          d="M0 12 Q71 46 143 12 Q214 46 286 12 Q357 46 428 12 Q500 50 571 12 Q643 46 714 12 Q786 46 857 12 Q928 46 1000 12 L1000 0 L0 0 Z"
          fill="url(#scallopSilk)"
        />
        {/* Scallop Gold Gota Trim */}
        <path
          d="M0 12 Q71 46 143 12 Q214 46 286 12 Q357 46 428 12 Q500 50 571 12 Q643 46 714 12 Q786 46 857 12 Q928 46 1000 12"
          stroke="url(#gotaPattiGold)"
          strokeWidth="3.6"
        />
        <path
          d="M0 15 Q71 49 143 15 Q214 49 286 15 Q357 49 428 15 Q500 53 571 15 Q643 49 714 15 Q786 49 857 15 Q928 49 1000 15"
          stroke="#78350F"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />

        {/* 3. DENSE MARIGOLD GARLAND STRINGS (Tier 2 and Tier 3) */}
        <path
          d="M0 26 Q71 62 143 26 Q214 62 286 26 Q357 62 428 26 Q500 68 571 26 Q643 62 714 26 Q786 62 857 26 Q928 62 1000 26"
          stroke="#D4AF37"
          strokeWidth="1.8"
          strokeDasharray="2 3"
        />

        {/* Continuous Marigold Pom-poms along drape curve */}
        {Array.from({ length: 42 }).map((_, i) => {
          const x = 12 + i * 23.5;
          const curveY = 18 + 18 * Math.sin(((x % 143) / 143) * Math.PI);
          return (
            <g key={i}>
              <circle cx={x} cy={curveY} r="5" fill={i % 2 === 0 ? "url(#marigoldDeepOrange)" : "url(#marigoldVibrantYellow)"} />
              <circle cx={x} cy={curveY} r="1.5" fill="#DC2626" />
            </g>
          );
        })}

        {/* 4. HANGING ORNAMENTS AT SCALLOP INTERSECTIONS (Mango Leaves + Marigolds + Swaying Brass Bells) */}
        {[71, 143, 214, 286, 357, 428, 500, 571, 643, 714, 786, 857, 928].map((x, index) => {
          const isMajorNode = index % 2 === 0 || index === 6;
          return (
            <g
              key={x}
              transform={`translate(${x}, 0)`}
              className={isMajorNode ? "animate-bell-tinkle" : "animate-bell-tinkle-delayed"}
            >
              {/* Hanging string */}
              <line x1="0" y1="26" x2="0" y2="50" stroke="#991B1B" strokeWidth="1.8" />

              {/* Mango Leaf (Aam Patta) */}
              <path
                d="M0 26 Q-10 44 -3 60 Q0 68 0 70 Q0 68 3 60 Q10 44 0 26 Z"
                fill="#047857"
                stroke="#064E3B"
                strokeWidth="1"
              />
              <line x1="0" y1="28" x2="0" y2="64" stroke="#D4AF37" strokeWidth="0.8" opacity="0.85" />

              {/* Top Marigold Bloom */}
              <circle cx="0" cy="32" r="9" fill="url(#marigoldDeepOrange)" />
              <circle cx="0" cy="32" r="5.5" fill="url(#marigoldVibrantYellow)" />
              <circle cx="0" cy="32" r="2.2" fill="#DC2626" />

              {/* Major node second bloom */}
              {isMajorNode && (
                <>
                  <line x1="0" y1="40" x2="0" y2="58" stroke="#D4AF37" strokeWidth="1.4" />
                  <circle cx="0" cy="52" r="8" fill="url(#marigoldVibrantYellow)" />
                  <circle cx="0" cy="52" r="5" fill="url(#marigoldDeepOrange)" />
                  <circle cx="0" cy="52" r="2" fill="#DC2626" />
                </>
              )}

              {/* Hanging Brass Temple Bell with clapper */}
              <line x1="0" y1={isMajorNode ? 60 : 42} x2="0" y2={isMajorNode ? 80 : 64} stroke="#DC2626" strokeWidth="1.6" />
              <g transform={`translate(0, ${isMajorNode ? 80 : 64})`}>
                <circle cx="0" cy="0" r="2.4" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
                <path
                  d="M-6 3 C-6 0 6 0 6 3 L7 11 C7 13 9 14 9 15 H-9 C-9 14 -7 13 -7 11 Z"
                  fill="#D4AF37"
                  stroke="#78350F"
                  strokeWidth="1"
                />
                <ellipse cx="0" cy="15" rx="9" ry="2.2" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
                <line x1="0" y1="15" x2="0" y2="21" stroke="#991B1B" strokeWidth="1.4" />
                <circle cx="0" cy="22" r="2.4" fill="#D4AF37" stroke="#78350F" strokeWidth="0.8" />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export const ToranGarland = MandapCanopyToran;

/**
 * AUTHENTIC GUJARATI & RAJASTHANI MULTICOLOR FOLK BORDER RIBBON
 * Features repeating geometric lozenges, bandhani dots, vermilion red, marigold orange,
 * rani pink, emerald green, peacock teal, and royal gold.
 */
export const MulticolorFolkBorder: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none my-2.5 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-5"
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" width="600" height="20" fill="#7F1D1D" />
        <line x1="0" y1="2" x2="600" y2="2" stroke="#D4AF37" strokeWidth="2" />
        <line x1="0" y1="18" x2="600" y2="18" stroke="#D4AF37" strokeWidth="2" />

        {/* Repeating Gujarati Folk Diamonds & Mirror Work dots */}
        {Array.from({ length: 30 }).map((_, i) => {
          const cx = 10 + i * 20;
          const colors = ['#DC2626', '#EA580C', '#BE185D', '#047857', '#0284C7', '#F59E0B'];
          const color = colors[i % colors.length];
          return (
            <g key={i}>
              <polygon
                points={`${cx},3 ${cx + 8},10 ${cx},17 ${cx - 8},10`}
                fill={color}
                stroke="#D4AF37"
                strokeWidth="1"
              />
              <circle cx={cx} cy="10" r="2.2" fill="#FEF08A" />
              <circle cx={cx} cy="10" r="1" fill="#DC2626" />
              <circle cx={cx + 10} cy="10" r="1.4" fill="#D4AF37" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/**
 * TRADITIONAL GUJARATI/RAJASTHANI ORNAMENTAL SECTION DIVIDER
 */
export const GujaratiOrnamentalDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-2 sm:gap-4 my-6 ${className}`} aria-hidden="true">
    {/* Left flourish */}
    <div className="flex items-center gap-1.5">
      <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#B45309]" />
      <span className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37] bg-[#EA580C]" />
    </div>

    {/* Center grouping: Kalash/Lotus with flanking gems */}
    <div className="flex items-center gap-2 text-[#D4AF37]">
      <div className="w-2 h-2 rounded-full bg-[#047857]" title="Peacock emerald" />
      <div className="w-2.5 h-2.5 rotate-45 bg-[#DC2626]" title="Kumkum vermilion" />

      {/* Central blooming lotus bud */}
      <svg width="34" height="26" viewBox="0 0 28 22" fill="none" className="text-[#D4AF37]">
        <path
          d="M14 2 C14 2 9 8 9 14 C9 18 11 20 14 20 C17 20 19 18 19 14 C19 8 14 2 14 2 Z"
          fill="#BE185D"
          stroke="#D4AF37"
          strokeWidth="1.6"
        />
        <path
          d="M14 8 C10 8 5 12 5 16 C5 19 8 20 11 20"
          stroke="#D4AF37"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M14 8 C18 8 23 12 23 16 C23 19 20 20 17 20"
          stroke="#D4AF37"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="2.6" fill="#F59E0B" />
        <circle cx="14" cy="14" r="1.2" fill="#DC2626" />
      </svg>

      <div className="w-2.5 h-2.5 rotate-45 bg-[#DC2626]" title="Kumkum vermilion" />
      <div className="w-2 h-2 rounded-full bg-[#047857]" title="Peacock emerald" />
    </div>

    {/* Right flourish */}
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37] bg-[#EA580C]" />
      <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#B45309]" />
    </div>
  </div>
);

export const OrnamentalDivider = GujaratiOrnamentalDivider;

/**
 * TRADITIONAL RAJASTHANI JHAROKHA ARCH HEADER
 */
export const JharokhaArchHeader: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 300 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full max-w-sm mx-auto select-none ${className}`}
    aria-hidden="true"
  >
    {/* Outer Cusped Arch */}
    <path
      d="M10 65 C10 34 35 16 65 16 C85 16 95 26 110 26 C125 26 135 6 150 6 C165 6 175 26 190 26 C205 26 215 16 235 16 C265 16 290 34 290 65"
      stroke="#D4AF37"
      strokeWidth="3.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Inner Cusped Arch */}
    <path
      d="M16 65 C16 38 40 22 68 22 C86 22 96 30 110 30 C124 30 134 12 150 12 C166 12 176 30 190 30 C204 30 214 22 232 22 C260 22 284 38 284 65"
      stroke="#991B1B"
      strokeWidth="1.6"
      fill="none"
    />
    {/* Central Royal Kalash Finial */}
    <circle cx="150" cy="5" r="4.2" fill="#F59E0B" stroke="#D4AF37" strokeWidth="1.2" />
    <circle cx="150" cy="5" r="1.8" fill="#DC2626" />
    {/* Side finials */}
    <circle cx="65" cy="14" r="2.8" fill="#047857" stroke="#D4AF37" strokeWidth="0.8" />
    <circle cx="235" cy="14" r="2.8" fill="#047857" stroke="#D4AF37" strokeWidth="0.8" />
  </svg>
);

/**
 * TRADITIONAL BRASS DIYA LAMP (WITH WARM FLICKERING FLAME)
 */
export const DiyaLamp: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none ${className}`}
    aria-hidden="true"
  >
    {/* Golden Auspicious Flame */}
    <path
      d="M18 2 C18 2 12 8 12 14 C12 18 15 21 18 21 C21 21 24 18 24 14 C24 8 18 2 18 2 Z"
      fill="#EA580C"
      stroke="#D4AF37"
      strokeWidth="1"
    />
    <ellipse cx="18" cy="14" rx="3" ry="5" fill="#FEF08A" />
    <circle cx="18" cy="15" r="1.5" fill="#FFFFFF" />

    {/* Brass Diya Vessel */}
    <path
      d="M4 18 C4 26 11 29 18 29 C25 29 32 26 32 18 C28 22 23 23 18 23 C13 23 8 22 4 18 Z"
      fill="#D4AF37"
      stroke="#78350F"
      strokeWidth="1.5"
    />
    {/* Base Stand with ruby gem */}
    <path d="M12 29 H24 L26 33 H10 L12 29 Z" fill="#991B1B" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="18" cy="26" r="1.5" fill="#DC2626" />
  </svg>
);

/**
 * AUSPICIOUS SACRED KALASH (WITH COCONUT & MANGO LEAVES)
 */
export const SacredKalash: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    aria-hidden="true"
  >
    {/* Coconut */}
    <path
      d="M24 4 C19 7 18 14 24 18 C30 14 29 7 24 4 Z"
      fill="#78350F"
      stroke="#D4AF37"
      strokeWidth="1.6"
    />
    {/* Mango leaves */}
    <path d="M20 16 C12 11 9 15 9 19 C15 21 19 18 20 16 Z" stroke="#064E3B" strokeWidth="1.4" fill="#047857" />
    <path d="M28 16 C36 11 39 15 39 19 C33 21 29 18 28 16 Z" stroke="#064E3B" strokeWidth="1.4" fill="#047857" />
    
    {/* Pot (Kalash body) */}
    <path
      d="M15 21 H33 L36 26 C38 32 37 40 24 40 C11 40 10 32 12 26 L15 21 Z"
      stroke="#D4AF37"
      strokeWidth="2.2"
      fill="#FFFDF9"
    />
    {/* Auspicious Kumkum mark */}
    <circle cx="24" cy="30" r="3.5" fill="#DC2626" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="24" cy="30" r="1.6" fill="#FEF08A" />
    
    {/* Sacred Mauli red thread tied around neck */}
    <line x1="15" y1="22" x2="33" y2="22" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="25" x2="32" y2="25" stroke="#EA580C" strokeWidth="1.5" />

    {/* Base rim */}
    <path d="M18 40 H30 L29 44 H19 L18 40 Z" stroke="#D4AF37" strokeWidth="1.4" fill="#D4AF37" />
  </svg>
);

/**
 * TRADITIONAL PAISLEY (AMBI / KALKA) MOTIF
 */
export const PaisleyMotif: React.FC<{ className?: string; size?: number; flip?: boolean }> = ({
  className = '',
  size = 40,
  flip = false,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${flip ? 'scale-x-[-1]' : ''} inline-block select-none ${className}`}
    aria-hidden="true"
  >
    {/* Outer Paisley swirl */}
    <path
      d="M24 6 C33 10 40 18 40 28 C40 37 32 43 23 43 C14 43 9 37 9 28 C9 18 19 12 26 8 C29 6 31 4 30 2"
      stroke="#D4AF37"
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="#FFFDF9"
    />
    {/* Inner floral filling */}
    <path
      d="M22 15 C27 17 31 22 31 28 C31 33 27 36 23 36 C18 36 15 33 15 28 C15 22 19 18 22 15 Z"
      fill="#BE185D"
      fillOpacity="0.4"
      stroke="#DC2626"
      strokeWidth="1.4"
    />
    <circle cx="23" cy="28" r="3.2" fill="#047857" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="23" cy="21" r="1.8" fill="#F59E0B" />
  </svg>
);

/**
 * TRADITIONAL CARD CORNER FLOURISH WITH BANDHANI JEWEL-DOT ACCENT
 */
export const CardCornerFlourish: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-[-1]';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-2 left-2 sm:top-3.5 sm:left-3.5';
      case 'top-right':
        return 'top-2 right-2 sm:top-3.5 sm:right-3.5';
      case 'bottom-left':
        return 'bottom-2 left-2 sm:bottom-3.5 sm:left-3.5';
      case 'bottom-right':
        return 'bottom-2 right-2 sm:bottom-3.5 sm:right-3.5';
    }
  };

  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${getPositionClasses()} ${getTransform()} pointer-events-none text-[#D4AF37] select-none ${className}`}
      aria-hidden="true"
    >
      <path d="M2 2H28M2 2V28" stroke="currentColor" strokeWidth="2.2" />
      <path d="M6 6H20M6 6V20" stroke="currentColor" strokeWidth="1.2" opacity="0.85" />
      <circle cx="12" cy="12" r="2.8" fill="#DC2626" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="12" cy="12" r="1.2" fill="#FEF08A" />
      <circle cx="28" cy="2" r="2" fill="#047857" />
      <circle cx="2" cy="28" r="2" fill="#047857" />
    </svg>
  );
};

/**
 * ROYAL INDIAN LOTUS (KAMAL)
 */
export const RoyalLotus: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M32 8C32 8 23 22 23 38C23 46 27 51 32 51C37 51 41 46 41 38C41 22 32 8 32 8Z"
      stroke="#D4AF37"
      strokeWidth="1.8"
      fill="#BE185D"
    />
    <path
      d="M32 24C24 20 15 28 15 38C15 46 22 51 28 51"
      stroke="#D4AF37"
      strokeWidth="1.8"
      fill="#DC2626"
      strokeLinecap="round"
    />
    <path
      d="M32 24C40 20 49 28 49 38C49 46 42 51 36 51"
      stroke="#D4AF37"
      strokeWidth="1.8"
      fill="#DC2626"
      strokeLinecap="round"
    />
    <path
      d="M26 34C16 30 7 38 7 46C7 52 14 55 22 54"
      stroke="#D4AF37"
      strokeWidth="1.6"
      fill="#EA580C"
      strokeLinecap="round"
    />
    <path
      d="M38 34C48 30 57 38 57 46C57 52 50 55 42 54"
      stroke="#D4AF37"
      strokeWidth="1.6"
      fill="#EA580C"
      strokeLinecap="round"
    />
    <path d="M16 55C25 57 39 57 48 55" stroke="#047857" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="32" cy="55" r="2.6" fill="#F59E0B" />
  </svg>
);

/**
 * ORNATE INDIAN MANDALA AURA
 */
export const MandalaAura: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 360 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
    <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
    <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.8" />
    <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
    <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="1.4" opacity="0.95" />
    <circle cx="100" cy="100" r="4.5" fill="currentColor" opacity="0.95" />

    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <path
          d="M100 64 C94 50 94 40 100 28 C106 40 106 50 100 64 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <circle cx="100" cy="24" r="2.5" fill="#EA580C" opacity="0.95" />
      </g>
    ))}
  </svg>
);
