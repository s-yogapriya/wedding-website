import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { TempleCrown, GoldCorner, KolamDivider, JasmineGarland } from './Ornaments';
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
      className={`fixed inset-0 z-40 flex items-center justify-center p-2 sm:p-6 transition-all duration-1000 bg-[#28050B] overflow-y-auto ${
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
        className={`relative w-full max-w-2xl bg-[#FCF9F3] text-[#2A1414] rounded-sm p-3 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(197,160,89,0.5)] transition-all duration-700 card-noise paper-texture border-[3px] sm:border-[6px] border-[#FCF9F3] ring-1 ring-[#C5A059]/60 my-auto ${
          isOpening ? 'scale-95 opacity-40 blur-[1px]' : 'scale-100 opacity-100'
        }`}
      >
        {/* Ornate Gold Border Outline */}
        <div className="absolute inset-1.5 sm:inset-3 border border-[#C5A059]/40 pointer-events-none" />
        <div className="absolute inset-2 sm:inset-4 border border-[#8C6623]/25 pointer-events-none" />

        {/* 4 Corner Ornaments */}
        <GoldCorner position="tl" size={38} className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 max-w-[20px] max-h-[20px] sm:max-w-none sm:max-h-none" />
        <GoldCorner position="tr" size={38} className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 max-w-[20px] max-h-[20px] sm:max-w-none sm:max-h-none" />
        <GoldCorner position="bl" size={38} className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3 max-w-[20px] max-h-[20px] sm:max-w-none sm:max-h-none" />
        <GoldCorner position="br" size={38} className="absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 max-w-[20px] max-h-[20px] sm:max-w-none sm:max-h-none" />

        {/* Jasmine Flower Garland across top */}
        <JasmineGarland className="opacity-90 -mt-1.5 mb-0.5 sm:-mt-2 sm:mb-2 max-h-3 sm:max-h-none" />

        {/* Auspicious Tamil Invocation & Temple Gopuram */}
        <div className="flex flex-col items-center text-center">
          <p className="font-cinzel text-[9px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8C6623] font-semibold mb-0.5 sm:mb-1">
            || ஸ்ரீ விநாயகர் துணை ||
          </p>
          <TempleCrown width={130} className="my-0.5 sm:my-1 opacity-95 max-w-[70px] sm:max-w-[130px]" />

          <h2 className="font-cinzel-dec font-bold text-xs sm:text-2xl tracking-[0.14em] sm:tracking-[0.2em] text-[#4A0E17] mt-0.5 mb-1 sm:mt-1 sm:mb-3 uppercase">
            THE AUSPICIOUS CELEBRATION OF
          </h2>
        </div>

        {/* Parents Section with Authentic Studio Portraits on Left & Right */}
        <div className="relative my-1 sm:my-6 px-1 sm:px-4">
 
          {/* Parents Section - Single Landscape Family Portrait */}
          <div className="relative my-0 sm:my-0 px-0 sm:px-0">
            <div className="flex flex-col items-center text-center">
              
              {/* Landscape Family Photo */}
              <div className="relative w-full max-w-[175px] sm:max-w-[500px] overflow-hidden rounded-lg sm:rounded-xl border border-[#C5A059] sm:border-2 bg-[#F4EDE0] shadow-sm sm:shadow-md">
                <img
                  src="/images/totalfamily.jpg.jpeg"
                  alt="Family Portrait"
                  className="w-full h-auto object-contain block transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Parents Names - 3 centered lines on mobile, single line on desktop */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2.5 mt-1 sm:mt-3 px-1 sm:px-2 text-center">
                <span className="font-cinzel font-bold text-[11px] sm:text-base md:text-lg text-[#4A0E17] tracking-wide leading-tight">
                  Smt. S. GAYATHRI
                </span>
                <span className="font-script text-sm sm:text-lg md:text-xl text-[#B88A3B] leading-none px-1">
                  &amp;
                </span>
                <span className="font-cinzel font-bold text-[11px] sm:text-base md:text-lg text-[#4A0E17] tracking-wide leading-tight">
                  Sri KASULA G. SATHISH BABU
                </span>
              </div>

            </div>
          </div>
          {/* Parents Medical Establishment */}
          <p className="text-center font-cormorant italic text-[11px] sm:text-base text-[#8C6623] font-medium mt-0.5 sm:mt-3">
            (Sri Venkateswara Siddha Medical, Trichy)
          </p>
        </div>

        {/* Invitation Text Body */}
        <div className="text-center my-1 sm:my-5 px-1 sm:px-2">
          <p className="font-cormorant text-xs sm:text-lg text-[#3A0810] leading-snug sm:leading-relaxed italic max-w-md mx-auto">
            Cordially invite you with family and friends to share the joy of our beloved Daughter's wedding
          </p>
        </div>

        <KolamDivider className="w-full max-w-[180px] sm:max-w-xs mx-auto my-1.5 sm:my-3 opacity-70" />

        {/* Bride & Groom Highlights on Card */}
        <div className="text-center space-y-1 sm:space-y-2.5 px-1 sm:px-2">
          {/* Bride Name & Degrees */}
          <div>
            <span className="block font-cormorant italic text-[11px] sm:text-sm text-[#8C6623]">
              Sowbagyavathi.
            </span>
            <h1 className="font-cinzel font-bold text-sm sm:text-2xl text-[#4A0E17] tracking-wide leading-tight">
              Dr. K.Sb. VEDHA VARSHA
            </h1>
            <p className="font-sans-clean text-[9.5px] sm:text-xs font-semibold tracking-wider text-[#7A192B] uppercase mt-0.5">
              B.N.Y.S. M.B.A.,
            </p>
          </div>

          {/* With separator */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 my-0.5 sm:my-1">
            <span className="h-[1px] w-6 sm:w-10 bg-[#C5A059]/50" />
            <span className="font-script text-lg sm:text-3xl text-[#B88A3B] leading-none px-1">with</span>
            <span className="h-[1px] w-6 sm:w-10 bg-[#C5A059]/50" />
          </div>

          {/* Groom Name & Qualifications */}
          <div>
            <span className="block font-cormorant italic text-[11px] sm:text-sm text-[#8C6623]">
              Chiranjeevi.
            </span>
            <h2 className="font-cinzel font-bold text-sm sm:text-2xl text-[#4A0E17] tracking-wide leading-tight">
              Er. T.K.BALAJI
            </h2>
            <p className="font-sans-clean text-[9.5px] sm:text-xs font-semibold tracking-wider text-[#7A192B] uppercase mt-0.5">
              B.E.,
            </p>
            <p className="font-cormorant text-[10.5px] sm:text-sm text-[#5E1120] font-medium mt-0.5 sm:mt-1">
              (Senior Software Developer, ZOHO,Chennai )
            </p>
          </div>
        </div>

        {/* Bottom "OPEN INVITATION" Royal Wax Seal Button */}
        <div className="flex flex-col items-center justify-center mt-2 sm:mt-8 pt-1 sm:pt-2">
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative flex flex-col items-center justify-center p-1 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Open Wedding Invitation"
          >
            {/* Pulsing Aura */}
            <div className="absolute inset-0 rounded-full bg-[#C5A059]/30 animate-ping opacity-60 pointer-events-none" />

            {/* Embossed Royal Wax Seal Circle */}
            <div className="relative w-[76px] h-[76px] sm:w-24 sm:h-24 rounded-full wax-seal-btn flex flex-col items-center justify-center text-center p-1 sm:p-2 border-2 border-[#FAF6F0]/40 shadow-xl">
              <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#FFF2CC] mb-0.5 animate-spin duration-3000" />
              <span className="font-cinzel font-bold text-[8px] sm:text-[11px] text-[#FFF8E7] tracking-[0.06em] sm:tracking-[0.16em] uppercase leading-[1.15] sm:leading-tight drop-shadow-md">
                OPEN<br />INVITATION
              </span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFF2CC] mt-0.5 animate-bounce" />
            </div>

            {/* Subtitle instruction */}
            <span className="font-cinzel text-[8.5px] sm:text-[10.5px] tracking-[0.18em] sm:tracking-[0.24em] uppercase text-[#8C6623] mt-1 sm:mt-2.5 font-semibold group-hover:text-[#4A0E17] transition-colors">
              Tap to enter celebration
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
