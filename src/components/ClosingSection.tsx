import React from 'react';
import { TempleCrown, GoldCorner, KolamDivider, Kuthuvilakku } from './Ornaments';
import { triggerAuspiciousPetals } from './PetalShower';
import { Sparkles, Heart } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  return (
    <footer className="relative py-24 px-4 sm:px-6 bg-[#3A0810] text-[#FAF6F0] overflow-hidden">
      {/* Subtle traditional glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none" />

      {/* Decorative Gold Top Border Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Gopuram Crown */}
        <TempleCrown width={140} className="mb-4 opacity-95" />

        {/* Closing Card Container */}
        <div className="relative w-full max-w-2xl bg-[#4A0E17]/90 rounded-2xl p-6 sm:p-12 border border-[#C5A059]/50 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md">
          
          <GoldCorner position="tl" size={32} className="absolute top-3 left-3" />
          <GoldCorner position="tr" size={32} className="absolute top-3 right-3" />
          <GoldCorner position="bl" size={32} className="absolute bottom-3 left-3" />
          <GoldCorner position="br" size={32} className="absolute bottom-3 right-3" />

          {/* Couple Photo #3: Additional Traditional Couple Photograph */}
          <div className="relative w-36 h-48 sm:w-44 sm:h-56 mx-auto mb-6 p-2 rounded-t-[70px] rounded-b-md bg-gradient-to-b from-[#FFF2CC] via-[#C5A059] to-[#8C6623] shadow-lg group">
            <div className="w-full h-full overflow-hidden rounded-t-[64px] rounded-b-sm border border-[#FCF9F3] bg-[#28050B]">
              <img
                src="/images/couple-traditional-closing.jpg"
                alt="Dr. K.Sb. Vedha Varsha & Er. T.K. Balaji in traditional wedding bliss"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Couple Names in Grand Closing Typography */}
          <div className="space-y-2">
            <div>
              <span className="block font-cormorant italic text-sm text-[#E5C378]">
                Sowbagyavathi.
              </span>
              <h3 className="font-cinzel font-bold text-lg sm:text-2xl md:text-3xl text-[#FFF2CC] tracking-wide">
                Dr. K.Sb. VEDHA VARSHA
              </h3>
              <p className="font-sans-clean text-[11px] sm:text-xs font-semibold tracking-wider text-[#F6E6C2] uppercase mt-0.5">
                B.N.Y.S. M.B.A.,
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 my-1">
              <span className="h-[0.5px] w-8 bg-[#C5A059]/40" />
              <span className="font-script text-2xl sm:text-3xl text-[#E5C378] leading-none">with</span>
              <span className="h-[0.5px] w-8 bg-[#C5A059]/40" />
            </div>

            <div>
              <span className="block font-cormorant italic text-sm text-[#E5C378]">
                Chiranjeevi.
              </span>
              <h3 className="font-cinzel font-bold text-lg sm:text-2xl md:text-3xl text-[#FFF2CC] tracking-wide">
                Er. T.K.BALAJI
              </h3>
              <p className="font-sans-clean text-[11px] sm:text-xs font-semibold tracking-wider text-[#F6E6C2] uppercase mt-0.5">
                B.E.,
              </p>
            </div>
          </div>

          <KolamDivider className="my-6 max-w-xs opacity-60" />

          {/* Closing Blessing Quote */}
          <p className="font-cormorant italic text-lg sm:text-2xl text-[#FFF2CC] max-w-md mx-auto leading-relaxed font-normal">
            Your Love And blessings will light their path
          </p>

          <div className="w-12 h-[1px] bg-[#C5A059]/50 mx-auto my-4" />

          {/* Compliments */}
          <div className="mt-4">
            <p className="font-cormorant italic text-sm sm:text-base text-[#E5C378]">
              With best compliment from
            </p>
            <p className="font-cinzel font-bold text-base sm:text-lg text-[#FFF2CC] tracking-[0.16em] uppercase mt-1">
              Relatives &amp; Friends
            </p>
          </div>

          {/* Interactive "Shower Blessings" (Pushpanjali) Button */}
          <div className="mt-8 pt-4 border-t border-[#C5A059]/30 flex justify-center">
            <button
              onClick={triggerAuspiciousPetals}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#C5A059] text-[#3A0810] font-cinzel font-bold text-xs tracking-[0.18em] uppercase shadow-[0_10px_20px_-5px_rgba(229,195,120,0.4)] hover:brightness-105 active:scale-95 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-[#3A0810]" />
              Shower Blessings
              <Heart className="w-3.5 h-3.5 fill-[#3A0810] text-[#3A0810]" />
            </button>
          </div>

        </div>

        {/* Traditional Footer Mark */}
        <div className="flex items-center justify-center gap-6 mt-12 text-[#C5A059]/60">
          <Kuthuvilakku height={45} />
          <div className="text-center">
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-[#E5C378]">
              || மங்கல வாழ்த்துக்கள் ||
            </p>
            <p className="font-cormorant italic text-xs text-[#FAF6F0]/70 mt-0.5">
              Sri Vasavi Mahal · Trichy · 17.09.2026
            </p>
          </div>
          <Kuthuvilakku height={45} />
        </div>

      </div>
    </footer>
  );
};
