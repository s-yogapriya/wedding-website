import React from 'react';
import { TempleCrown, GoldCorner, KolamDivider } from './Ornaments';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Subtle Paper Glow & Silk Sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F3] via-[#FAF6F0] to-[#F5ECE0] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(212,175,55,0.12),transparent_75%)] pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center text-center">
        
        {/* Gopuram Motif */}
        <TempleCrown width={140} className="mb-2 opacity-90" />

        {/* Eyebrow */}
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.35em] text-[#8C6623] uppercase font-semibold mb-2">
          The Auspicious Wedding Of
        </p>

        {/* Bride Name & Titles */}
        <div className="my-2 sm:my-3">
          <span className="block font-cormorant italic text-base sm:text-lg text-[#8C6623]">
            Sowbagyavathi.
          </span>
          <h1 className="font-cinzel font-bold text-2xl sm:text-4xl md:text-5xl text-[#4A0E17] tracking-tight leading-tight sm:leading-snug mt-0.5">
            Dr. K.Sb. VEDHA VARSHA
          </h1>
          <p className="font-sans-clean text-xs sm:text-sm font-semibold tracking-widest text-[#7A192B] uppercase mt-1">
            B.N.Y.S. M.B.A.,
          </p>
        </div>

        {/* "with" connector */}
        <div className="flex items-center justify-center gap-4 my-2">
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-script text-3xl sm:text-4xl text-[#B88A3B] leading-none px-2">with</span>
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* Groom Name & Titles */}
        <div className="my-2 sm:my-3">
          <span className="block font-cormorant italic text-base sm:text-lg text-[#8C6623]">
            Chiranjeevi.
          </span>
          <h2 className="font-cinzel font-bold text-2xl sm:text-4xl md:text-5xl text-[#4A0E17] tracking-tight leading-tight sm:leading-snug mt-0.5">
            Er. T.K.BALAJI
          </h2>
          <p className="font-sans-clean text-xs sm:text-sm font-semibold tracking-widest text-[#7A192B] uppercase mt-1">
            B.E.,
          </p>
          <p className="font-cormorant text-sm sm:text-base text-[#5E1120] font-medium mt-1">
            (Senior Software Developer, ZOHO,Chennai )
          </p>
        </div>

        <KolamDivider className="my-4 max-w-xs" />

        {/* Editorial Couple Photograph #1 (Outdoor couple photo) */}
        <div className="relative mt-4 mb-8 w-full max-w-sm sm:max-w-md mx-auto group">
          {/* Decorative Outer Arch Gold Frame */}
          <div className="relative p-2.5 sm:p-3.5 bg-gradient-to-b from-[#FFF2CC] via-[#C5A059] to-[#8C6623] rounded-t-[100px] rounded-b-lg shadow-[0_20px_50px_-10px_rgba(74,14,23,0.3)]">
            
            {/* Corner Filigrees on Frame Base */}
            <GoldCorner position="bl" size={32} className="absolute bottom-2 left-2 z-10" />
            <GoldCorner position="br" size={32} className="absolute bottom-2 right-2 z-10" />

            {/* Inner Picture Container with Arch Top */}
            <div className="relative overflow-hidden rounded-t-[90px] rounded-b-sm border-2 border-[#FCF9F3] bg-[#F4EDE0] aspect-[3/4]">
              <img
                src="/images/couple-hero.jpg"
                alt="Dr. K.Sb. Vedha Varsha and Er. T.K. Balaji"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Subtle Warm Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A0810]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Gold Date Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#4A0E17] text-[#FAF6F0] border border-[#C5A059] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-[#FFF2CC]">
                17 · 09 · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Scroll down gentle prompt */}
        <div className="flex flex-col items-center mt-6 text-[#8C6623] animate-bounce opacity-80">
          <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase mb-1">
            Scroll for wedding details
          </span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};
