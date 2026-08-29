import React from 'react';
import { Kuthuvilakku, TempleCrown, GoldCorner, KolamDivider } from './Ornaments';

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
        <div className="w-full max-w-2xl bg-gradient-to-b from-[#FAF6F0] to-[#F5ECE0] rounded-2xl p-6 sm:p-10 border border-[#C5A059]/50 shadow-md">
          <p className="font-cinzel text-xs tracking-[0.28em] uppercase text-[#8C6623] font-semibold mb-1">
            With Solicitations Of
          </p>
          <h3 className="font-cinzel-dec font-bold text-xl sm:text-2xl text-[#4A0E17] tracking-wider mb-6">
            The Bride's Parents
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 my-2">
            
            {/* Mother */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#FFF2CC] to-[#8C6623] shadow-md mb-3">
                <img
                  src="/images/bride-mother.jpg"
                  alt="Smt. S. GAYATHRI"
                  className="w-full h-full object-cover object-top rounded-full border-2 border-[#FAF6F0]"
                  loading="lazy"
                />
              </div>
              <h4 className="font-cinzel font-bold text-sm sm:text-base text-[#4A0E17] tracking-wide">
                Smt. S. GAYATHRI
              </h4>
              <span className="font-cormorant italic text-xs sm:text-sm text-[#8C6623]">
                Mother of the Bride
              </span>
            </div>

            {/* Sacred Lamp Separator */}
            <div className="hidden sm:block">
              <Kuthuvilakku height={75} />
            </div>

            {/* Father */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#FFF2CC] to-[#8C6623] shadow-md mb-3">
                <img
                  src="/images/bride-father.jpg"
                  alt="Sri KASULA G. SATHISH BABU"
                  className="w-full h-full object-cover object-top rounded-full border-2 border-[#FAF6F0]"
                  loading="lazy"
                />
              </div>
              <h4 className="font-cinzel font-bold text-sm sm:text-base text-[#4A0E17] tracking-wide">
                Sri KASULA G. SATHISH BABU
              </h4>
              <span className="font-cormorant italic text-xs sm:text-sm text-[#8C6623]">
                Father of the Bride
              </span>
            </div>

          </div>

          {/* Medical Firm Details */}
          <div className="mt-6 pt-4 border-t border-[#C5A059]/30">
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
