import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Kuthuvilakku, TempleCrown, GoldCorner, KolamDivider, JasmineGarland } from './Ornaments';
import { triggerAuspiciousPetals } from './PetalShower';

interface WelcomeCardProps {
  onOpen: () => void;
  isUnlocked: boolean;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ onOpen, isUnlocked }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    triggerAuspiciousPetals();

    // Smooth luxury envelope & card opening transition
    setTimeout(() => {
      onOpen();
    }, 750);
  };

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 transition-all duration-1000 bg-[#28050B] overflow-y-auto ${
        isUnlocked ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundImage: `radial-gradient(ellipse at center, #4A0E17 0%, #30060E 60%, #1A0307 100%)`,
      }}
    >
      {/* Background silk curtain glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

      {/* Main Luxury Wedding Invitation Card Container */}
      <div
        className={`relative w-full max-w-2xl bg-[#FCF9F3] text-[#2A1414] rounded-sm p-5 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(197,160,89,0.5)] transition-all duration-700 card-noise paper-texture border-[6px] border-[#FCF9F3] ring-1 ring-[#C5A059]/60 my-auto ${
          isOpening ? 'scale-95 opacity-40 blur-[1px]' : 'scale-100 opacity-100'
        }`}
      >
        {/* Ornate Gold Border Outline */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/40 pointer-events-none" />
        <div className="absolute inset-3 sm:inset-4 border border-[#8C6623]/25 pointer-events-none" />

        {/* 4 Corner Ornaments */}
        <GoldCorner position="tl" size={38} className="absolute top-2 left-2 sm:top-3 sm:left-3" />
        <GoldCorner position="tr" size={38} className="absolute top-2 right-2 sm:top-3 sm:right-3" />
        <GoldCorner position="bl" size={38} className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3" />
        <GoldCorner position="br" size={38} className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3" />

        {/* Jasmine Flower Garland across top */}
        <JasmineGarland className="opacity-90 -mt-2 mb-2" />

        {/* Auspicious Tamil Invocation & Temple Gopuram */}
        <div className="flex flex-col items-center text-center">
          <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#8C6623] font-semibold mb-1">
            || ஸ்ரீ விநாயகர் துணை ||
          </p>
          <TempleCrown width={130} className="my-1 opacity-95" />

          <h2 className="font-cinzel-dec font-bold text-xl sm:text-2xl tracking-[0.2em] text-[#4A0E17] mt-1 mb-3 uppercase">
            Wedding Invitation
          </h2>
        </div>

        {/* Parents Section with Authentic Studio Portraits on Left & Right */}
        <div className="relative my-4 sm:my-6 px-1 sm:px-4">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Left Kuthuvilakku Lamp on Desktop */}
            <div className="hidden md:block">
              <Kuthuvilakku height={100} />
            </div>

            {/* Mother Portrait (LEFT) */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[170px] sm:max-w-[190px]">
              <div className="relative p-1 rounded-full bg-gradient-to-b from-[#FFF2CC] via-[#C5A059] to-[#8C6623] shadow-md group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#FCF9F3] bg-[#F4EDE0]">
                  <img
                    src="/images/bride-mother.jpg"
                    alt="Smt. S. GAYATHRI"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#4A0E17] text-[#FAF6F0] text-[9px] font-cinzel px-2 py-0.5 rounded-full whitespace-nowrap border border-[#C5A059]/60">
                  Mother
                </span>
              </div>
              <h3 className="font-cinzel font-bold text-xs sm:text-sm text-[#4A0E17] mt-3 tracking-wide leading-tight">
                Smt. S. GAYATHRI
              </h3>
            </div>

            {/* Center Sacred Diya Lamp on Mobile */}
            <div className="md:hidden">
              <Kuthuvilakku height={85} />
            </div>

            {/* Father Portrait (RIGHT) */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[170px] sm:max-w-[190px]">
              <div className="relative p-1 rounded-full bg-gradient-to-b from-[#FFF2CC] via-[#C5A059] to-[#8C6623] shadow-md group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#FCF9F3] bg-[#F4EDE0]">
                  <img
                    src="/images/bride-father.jpg"
                    alt="Sri KASULA G. SATHISH BABU"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#4A0E17] text-[#FAF6F0] text-[9px] font-cinzel px-2 py-0.5 rounded-full whitespace-nowrap border border-[#C5A059]/60">
                  Father
                </span>
              </div>
              <h3 className="font-cinzel font-bold text-xs sm:text-sm text-[#4A0E17] mt-3 tracking-wide leading-tight">
                Sri KASULA G. SATHISH BABU
              </h3>
            </div>

            {/* Right Kuthuvilakku Lamp on Desktop */}
            <div className="hidden md:block">
              <Kuthuvilakku height={100} />
            </div>
          </div>

          {/* Parents Medical Establishment */}
          <p className="text-center font-cormorant italic text-sm sm:text-base text-[#8C6623] font-medium mt-3">
            (Sri Venkateswara Siddha Medical, Trichy)
          </p>
        </div>

        {/* Invitation Text Body */}
        <div className="text-center my-4 sm:my-5 px-2">
          <p className="font-cormorant text-base sm:text-lg text-[#3A0810] leading-relaxed italic max-w-md mx-auto">
            Cordially invite you with family and friends to share the joy of our beloved Daughter's wedding
          </p>
        </div>

        <KolamDivider className="my-3 opacity-70" />

        {/* Bride & Groom Highlights on Card */}
        <div className="text-center space-y-2.5 px-2">
          {/* Bride Name & Degrees */}
          <div>
            <span className="block font-cormorant italic text-sm text-[#8C6623]">
              Sowbagyavathi.
            </span>
            <h1 className="font-cinzel font-bold text-lg sm:text-2xl text-[#4A0E17] tracking-wide leading-tight">
              Dr. K.Sb. VEDHA VARSHA
            </h1>
            <p className="font-sans-clean text-[11px] sm:text-xs font-semibold tracking-wider text-[#7A192B] uppercase mt-0.5">
              B.N.Y.S. M.B.A.,
            </p>
          </div>

          {/* With separator */}
          <div className="flex items-center justify-center gap-3 my-1">
            <span className="h-[1px] w-10 bg-[#C5A059]/50" />
            <span className="font-script text-2xl sm:text-3xl text-[#B88A3B] leading-none px-1">with</span>
            <span className="h-[1px] w-10 bg-[#C5A059]/50" />
          </div>

          {/* Groom Name & Qualifications */}
          <div>
            <span className="block font-cormorant italic text-sm text-[#8C6623]">
              Chiranjeevi.
            </span>
            <h2 className="font-cinzel font-bold text-lg sm:text-2xl text-[#4A0E17] tracking-wide leading-tight">
              Er. T.K.BALAJI
            </h2>
            <p className="font-sans-clean text-[11px] sm:text-xs font-semibold tracking-wider text-[#7A192B] uppercase mt-0.5">
              B.E.,
            </p>
            <p className="font-cormorant text-xs sm:text-sm text-[#5E1120] font-medium mt-1">
              (Senior Software Developer, ZOHO,Chennai )
            </p>
          </div>
        </div>

        {/* Bottom "OPEN INVITATION" Royal Wax Seal Button */}
        <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 pt-2">
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative flex flex-col items-center justify-center p-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Open Wedding Invitation"
          >
            {/* Pulsing Aura */}
            <div className="absolute inset-0 rounded-full bg-[#C5A059]/30 animate-ping opacity-60 pointer-events-none" />

            {/* Embossed Royal Wax Seal Circle */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full wax-seal-btn flex flex-col items-center justify-center text-center p-2 border-2 border-[#FAF6F0]/40 shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#FFF2CC] mb-0.5 animate-spin duration-3000" />
              <span className="font-cinzel font-bold text-[10px] sm:text-[11px] text-[#FFF8E7] tracking-[0.16em] uppercase leading-tight drop-shadow-md">
                OPEN<br />INVITATION
              </span>
              <ChevronDown className="w-4 h-4 text-[#FFF2CC] mt-0.5 animate-bounce" />
            </div>

            {/* Subtitle instruction */}
            <span className="font-cinzel text-[9.5px] sm:text-[10.5px] tracking-[0.24em] uppercase text-[#8C6623] mt-2.5 font-semibold group-hover:text-[#4A0E17] transition-colors">
              Tap to enter celebration
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
