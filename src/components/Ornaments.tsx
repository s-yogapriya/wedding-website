import React from 'react';

// Traditional South Indian Kuthuvilakku (Brass Oil Lamp) with glowing animated flame
export const Kuthuvilakku: React.FC<{ className?: string; height?: number }> = ({ className = '', height = 120 }) => {
  const width = Math.round(height * 0.35);
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`} style={{ width, height }}>
      <svg
        viewBox="0 0 100 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="60%" stopColor="#B88A3B" />
            <stop offset="85%" stopColor="#8C6623" />
            <stop offset="100%" stopColor="#553A0F" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="25%" stopColor="#F97316" />
            <stop offset="65%" stopColor="#FBBF24" />
            <stop offset="90%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow halo */}
        <circle cx="50" cy="28" r="24" fill="url(#flameGlow)" className="animate-slow-pulse" />

        {/* Flickering Flame */}
        <g className="animate-flame" style={{ transformOrigin: '50px 38px' }}>
          <path
            d="M50 8 C47 18 42 26 42 34 C42 40 46 44 50 44 C54 44 58 40 58 34 C58 26 53 18 50 8 Z"
            fill="url(#flameGrad)"
          />
          <path
            d="M50 16 C48.5 22 45 28 45 33 C45 37 47.5 40 50 40 C52.5 40 55 37 55 33 C55 28 51.5 22 50 16 Z"
            fill="#FFFBEB"
            opacity="0.85"
          />
        </g>

        {/* Top Finial / Annam Bird / Kalasam Peak */}
        <path d="M50 44 L48 50 L52 50 Z" fill="url(#brassGrad)" />
        <ellipse cx="50" cy="52" rx="4" ry="3" fill="url(#brassGrad)" />

        {/* Top Lamp Bowl (Thali / Oil reservoir) */}
        <path
          d="M26 58 C26 56 34 54 50 54 C66 54 74 56 74 58 C74 65 65 72 50 72 C35 72 26 65 26 58 Z"
          fill="url(#brassGrad)"
          stroke="#8C6623"
          strokeWidth="1.5"
        />
        {/* Wicks spouts */}
        <circle cx="28" cy="57" r="2.5" fill="#8C6623" />
        <circle cx="72" cy="57" r="2.5" fill="#8C6623" />
        <circle cx="50" cy="60" r="2" fill="#8C6623" />

        {/* Ornamental Ring below bowl */}
        <ellipse cx="50" cy="74" rx="12" ry="4" fill="url(#brassGrad)" />
        <ellipse cx="50" cy="79" rx="8" ry="3" fill="url(#brassGrad)" />

        {/* Central Slender Pillar with Ornamental Nodes */}
        <path d="M46 80 L46 110 L44 115 L44 140 L46 145 L46 195 L44 200 L44 220 L56 220 L56 200 L54 145 L56 140 L56 115 L54 110 L54 80 Z" fill="url(#brassGrad)" />
        
        {/* Node 1 */}
        <ellipse cx="50" cy="112" rx="14" ry="5" fill="url(#brassGrad)" stroke="#8C6623" strokeWidth="0.8" />
        {/* Node 2 (Middle major ring) */}
        <ellipse cx="50" cy="142" rx="18" ry="6" fill="url(#brassGrad)" stroke="#8C6623" strokeWidth="0.8" />
        {/* Node 3 */}
        <ellipse cx="50" cy="198" rx="16" ry="5" fill="url(#brassGrad)" stroke="#8C6623" strokeWidth="0.8" />

        {/* Lower Base Tiers */}
        <path d="M36 220 L64 220 L68 235 L32 235 Z" fill="url(#brassGrad)" />
        <ellipse cx="50" cy="235" rx="22" ry="6" fill="url(#brassGrad)" stroke="#8C6623" strokeWidth="1" />

        {/* Grand Stepped Circular Pedestal */}
        <path d="M24 238 L76 238 L84 260 L16 260 Z" fill="url(#brassGrad)" stroke="#8C6623" strokeWidth="1.2" />
        <ellipse cx="50" cy="260" rx="38" ry="8" fill="url(#brassGrad)" stroke="#553A0F" strokeWidth="1.5" />
        
        {/* Base Rim details */}
        <path d="M12 260 L88 260 L85 272 L15 272 Z" fill="url(#brassGrad)" />
        <ellipse cx="50" cy="272" rx="42" ry="6" fill="#8C6623" />
      </svg>
    </div>
  );
};

// Temple Gopuram Kalasam Crown Motif
export const TempleCrown: React.FC<{ className?: string; width?: number }> = ({ className = '', width = 160 }) => {
  return (
    <div className={`inline-flex justify-center items-center select-none ${className}`} style={{ width }}>
      <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="goldGopuram" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B88A3B" />
            <stop offset="100%" stopColor="#8C6623" />
          </linearGradient>
        </defs>

        {/* Center Main Kalasam */}
        <path d="M100 4 L97 14 L103 14 Z" fill="url(#goldGopuram)" />
        <ellipse cx="100" cy="18" rx="6" ry="4" fill="url(#goldGopuram)" />
        <path d="M93 22 C93 18 107 18 107 22 C107 28 93 28 93 22 Z" fill="url(#goldGopuram)" />
        <ellipse cx="100" cy="26" rx="9" ry="5" fill="url(#goldGopuram)" />
        <path d="M89 31 C89 26 111 26 111 31 L115 42 L85 42 Z" fill="url(#goldGopuram)" />

        {/* Left Kalasam */}
        <path d="M75 14 L73 20 L77 20 Z" fill="url(#goldGopuram)" />
        <ellipse cx="75" cy="24" rx="4" ry="3" fill="url(#goldGopuram)" />
        <ellipse cx="75" cy="30" rx="6" ry="4" fill="url(#goldGopuram)" />
        <path d="M68 34 L82 34 L85 44 L65 44 Z" fill="url(#goldGopuram)" />

        {/* Right Kalasam */}
        <path d="M125 14 L123 20 L127 20 Z" fill="url(#goldGopuram)" />
        <ellipse cx="125" cy="24" rx="4" ry="3" fill="url(#goldGopuram)" />
        <ellipse cx="125" cy="30" rx="6" ry="4" fill="url(#goldGopuram)" />
        <path d="M118 34 L132 34 L135 44 L115 44 Z" fill="url(#goldGopuram)" />

        {/* Temple Arch / Thoranam Base */}
        <path
          d="M20 54 C50 42 80 44 100 44 C120 44 150 42 180 54 C165 52 140 50 100 50 C60 50 35 52 20 54 Z"
          fill="url(#goldGopuram)"
        />
        
        {/* Hanging Jasmine / Bell Drops */}
        <circle cx="50" cy="62" r="3" fill="url(#goldGopuram)" />
        <path d="M50 54 L50 60" stroke="#B88A3B" strokeWidth="1.5" />
        
        <circle cx="75" cy="66" r="3.5" fill="url(#goldGopuram)" />
        <path d="M75 52 L75 63" stroke="#B88A3B" strokeWidth="1.5" />

        <circle cx="100" cy="68" r="4.5" fill="url(#goldGopuram)" />
        <path d="M100 50 L100 64" stroke="#B88A3B" strokeWidth="2" />

        <circle cx="125" cy="66" r="3.5" fill="url(#goldGopuram)" />
        <path d="M125 52 L125 63" stroke="#B88A3B" strokeWidth="1.5" />

        <circle cx="150" cy="62" r="3" fill="url(#goldGopuram)" />
        <path d="M150 54 L150 60" stroke="#B88A3B" strokeWidth="1.5" />

        {/* Intricate Filigree flourish */}
        <path
          d="M30 48 Q10 45 6 35 Q12 30 24 38 Q36 32 48 45"
          stroke="url(#goldGopuram)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M170 48 Q190 45 194 35 Q188 30 176 38 Q164 32 152 45"
          stroke="url(#goldGopuram)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

// Royal Filigree Corner Bracket
export const GoldCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; size?: number; className?: string }> = ({
  position,
  size = 50,
  className = '',
}) => {
  let rotation = 'rotate-0';
  if (position === 'tr') rotation = 'rotate-90';
  if (position === 'br') rotation = 'rotate-180';
  if (position === 'bl') rotation = '-rotate-90';

  return (
    <div className={`pointer-events-none select-none ${rotation} ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B88A3B" />
            <stop offset="100%" stopColor="#8C6623" />
          </linearGradient>
        </defs>
        {/* Main Corner Outer Border Lines */}
        <path d="M4 80 L4 4 L80 4" stroke="url(#cornerGold)" strokeWidth="2.5" />
        <path d="M12 80 L12 12 L80 12" stroke="url(#cornerGold)" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Corner Heart/Paisley Scroll */}
        <path
          d="M6 6 Q24 8 28 28 Q8 24 6 6 Z"
          fill="url(#cornerGold)"
          opacity="0.8"
        />
        <path
          d="M28 28 Q44 32 50 14 Q32 18 28 28 Z"
          fill="url(#cornerGold)"
          opacity="0.6"
        />
        <path
          d="M28 28 Q32 44 14 50 Q18 32 28 28 Z"
          fill="url(#cornerGold)"
          opacity="0.6"
        />
        
        {/* Inner Diamond Jewel */}
        <rect x="22" y="22" width="12" height="12" transform="rotate(45 28 28)" fill="url(#cornerGold)" />
        <circle cx="28" cy="28" r="2.5" fill="#4A0E17" />
      </svg>
    </div>
  );
};

// Auspicious Kolam / Rangoli Floral Mandala Divider
export const KolamDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 select-none my-6 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#C5A059] to-[#8C6623]" />
      
      <svg viewBox="0 0 100 40" className="w-16 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kolamGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8C6623" />
          </linearGradient>
        </defs>
        {/* Center Lotus / Flower */}
        <circle cx="50" cy="20" r="5" fill="url(#kolamGold)" />
        <circle cx="50" cy="20" r="2" fill="#4A0E17" />
        
        {/* Petals */}
        <path d="M50 10 C46 14 46 16 50 16 C54 16 54 14 50 10 Z" fill="url(#kolamGold)" />
        <path d="M50 30 C46 26 46 24 50 24 C54 24 54 26 50 30 Z" fill="url(#kolamGold)" />
        <path d="M40 20 C44 16 46 16 46 20 C46 24 44 24 40 20 Z" fill="url(#kolamGold)" />
        <path d="M60 20 C56 16 54 16 54 20 C54 24 56 24 60 20 Z" fill="url(#kolamGold)" />

        {/* Side Mango Paisleys */}
        <path d="M34 20 Q24 10 16 20 Q24 28 34 20 Z" fill="url(#kolamGold)" opacity="0.8" />
        <circle cx="22" cy="20" r="2" fill="#FAF6F0" />
        <path d="M66 20 Q76 10 84 20 Q76 28 66 20 Z" fill="url(#kolamGold)" opacity="0.8" />
        <circle cx="78" cy="20" r="2" fill="#FAF6F0" />

        {/* Delicate side dots */}
        <circle cx="6" cy="20" r="2" fill="url(#kolamGold)" />
        <circle cx="94" cy="20" r="2" fill="url(#kolamGold)" />
      </svg>

      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#C5A059] to-[#8C6623]" />
    </div>
  );
};

// Jasmine Floral Garland (Malli Poo Maalai) Garland Header
export const JasmineGarland: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex justify-center select-none py-1 ${className}`}>
      <svg viewBox="0 0 600 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl h-auto">
        <defs>
          <radialGradient id="malliPetal" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#E2D4B7" />
          </radialGradient>
          <radialGradient id="marigoldRed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="80%" stopColor="#991B1B" />
            <stop offset="100%" stopColor="#450A0A" />
          </radialGradient>
          <radialGradient id="marigoldGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </radialGradient>
        </defs>

        {/* Auspicious Green Mango string */}
        <path d="M0 8 Q150 28 300 12 Q450 28 600 8" stroke="#166534" strokeWidth="2.5" fill="none" opacity="0.6" />

        {/* Array of repeated Jasmine cluster balls and Rose/Marigold nodes */}
        {[30, 75, 120, 165, 210, 255, 300, 345, 390, 435, 480, 525, 570].map((cx, i) => {
          const cy = 8 + Math.sin((cx / 600) * Math.PI * 2) * 10 + 6;
          const isHighlight = i % 3 === 0;
          const isCenter = i === 6;

          return (
            <g key={i}>
              {/* Jasmine cluster */}
              <circle cx={cx - 5} cy={cy} r="4.5" fill="url(#malliPetal)" />
              <circle cx={cx + 5} cy={cy} r="4.5" fill="url(#malliPetal)" />
              <circle cx={cx} cy={cy - 4} r="4.5" fill="url(#malliPetal)" />
              <circle cx={cx} cy={cy + 4} r="4.5" fill="url(#malliPetal)" />
              
              {/* Highlight flower (Red Rose / Gold Marigold) */}
              {isHighlight && (
                <circle cx={cx} cy={cy} r={isCenter ? 6.5 : 5} fill={i % 2 === 0 ? "url(#marigoldRed)" : "url(#marigoldGold)"} />
              )}
              {!isHighlight && (
                <circle cx={cx} cy={cy} r="3.5" fill="#FEF3C7" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
