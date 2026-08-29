import React from 'react';
import { TempleCrown, GoldCorner, KolamDivider } from './Ornaments';

export const InvitationBlessings: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#FCF9F3] text-[#2A1414] overflow-hidden">
      {/* Background Decorative Flourish */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Section 6: Editorial Invitation Message */}
        <TempleCrown width={120} className="mb-2 opacity-90" />
        
        <div className="relative my-6 px-6 sm:px-12 py-8 bg-[#FAF6F0] rounded-xl border border-[#C5A059]/40 shadow-sm max-w-3xl card-noise">
          <GoldCorner position="tl" size={28} className="absolute top-2 left-2" />
          <GoldCorner position="tr" size={28} className="absolute top-2 right-2" />
          <GoldCorner position="bl" size={28} className="absolute bottom-2 left-2" />
          <GoldCorner position="br" size={28} className="absolute bottom-2 right-2" />

          {/* Quotation flourish */}
          <span className="font-cormorant italic text-5xl text-[#C5A059] leading-none select-none block -mb-4">
            “
          </span>

          <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#4A0E17] leading-relaxed font-normal italic px-2 sm:px-6">
            Join us with your Heartfelt wishes as our Daughter step into the beautiful journey of marriage,
          </p>

          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto my-4 opacity-60" />

          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#8C6623] leading-relaxed font-medium italic px-2 sm:px-6">
            Your Love And blessings will light their path as they begin this new journey.
          </p>

          <span className="font-cormorant italic text-5xl text-[#C5A059] leading-none select-none block -mt-2">
            ”
          </span>
        </div>

        <KolamDivider className="my-8 max-w-xs" />

        {/* Section 7: Family / Blessings Section */}
        <div className="w-full max-w-2xl bg-gradient-to-b from-[#FAF6F0] to-[#F5ECE0] rounded-2xl p-5 sm:p-8 border border-[#C5A059]/50 shadow-md">
          <p className="font-cinzel text-xs tracking-[0.28em] uppercase text-[#8C6623] font-semibold mb-1">
            With Solicitations Of
          </p>
          <h3 className="font-cinzel-dec font-bold text-xl sm:text-2xl text-[#4A0E17] tracking-wider mb-2 sm:mb-3">
            The Bride's Parents
          </h3>

          <div className="flex flex-col items-center text-center mt-2 sm:mt-3 w-full">
            {/* Photo Frame */}
            <div className="relative w-full max-w-[430px] sm:max-w-[460px]">
              <div className="overflow-hidden rounded-xl border-2 border-[#C5A059] bg-[#F4EDE0] shadow-md">
                <img
                  src="/images/brideparents.jpeg"
                  alt="Bride's Parents"
                  className="block w-full h-auto object-contain scale-[1.1]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Names */}
            <div className="mt-2 px-2">
              <p className="font-cinzel font-bold text-xs sm:text-sm md:text-base text-[#4A0E17] tracking-wide leading-tight">
                SMT. S. GAYATHRI
                <span className="mx-2 sm:mx-3">&</span>
                SRI KASULA G. SATHISH BABU
              </p>
            </div>
          </div>

          {/* Medical Firm Details */}
          <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-[#C5A059]/30">
            <p className="font-cinzel font-semibold text-xs sm:text-sm text-[#4A0E17] tracking-wider">
              (Sri Venkateswara Siddha Medical, Trichy)
            </p>
            <p className="font-cormorant italic text-xs sm:text-sm text-[#8C6623] mt-1">
              Warmly inviting you with family and friends to grace the occasion with your blessings.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
