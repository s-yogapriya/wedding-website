import React, { useState, useEffect } from 'react';
import { KolamDivider } from './Ornaments';

export const CountdownSection: React.FC = () => {
  // Wedding Date: Thursday, 17th September 2026, 8:01 AM IST
  const targetDate = new Date('2026-09-17T08:01:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-[#3A0810] text-[#FAF6F0] overflow-hidden">
      {/* Subtle traditional damask / kolam background watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

      {/* Decorative Gold Border Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60" />

      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Section Heading */}
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E5C378] font-semibold mb-1">
          Save The Auspicious Date
        </p>
        <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl text-[#FFF2CC] tracking-wider mb-2">
          Counting Down To Forever
        </h2>
        <p className="font-cormorant italic text-base sm:text-lg text-[#E8DDCB] max-w-md">
          Thursday, 17th September 2026
        </p>

        <KolamDivider className="my-6 max-w-xs opacity-70" />

        {/* Countdown Grid with Luxury Gold Medallions */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-6 w-full max-w-xl my-4">
          
          {/* Days */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-lg bg-[#4A0E17]/80 border border-[#C5A059]/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <span className="font-cinzel font-bold text-2xl sm:text-4xl md:text-5xl text-[#FFF2CC] tracking-tight tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#C5A059] mt-1 sm:mt-2 font-medium">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-lg bg-[#4A0E17]/80 border border-[#C5A059]/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <span className="font-cinzel font-bold text-2xl sm:text-4xl md:text-5xl text-[#FFF2CC] tracking-tight tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#C5A059] mt-1 sm:mt-2 font-medium">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-lg bg-[#4A0E17]/80 border border-[#C5A059]/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <span className="font-cinzel font-bold text-2xl sm:text-4xl md:text-5xl text-[#FFF2CC] tracking-tight tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#C5A059] mt-1 sm:mt-2 font-medium">
              Minutes
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-lg bg-[#4A0E17]/80 border border-[#C5A059]/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <span className="font-cinzel font-bold text-2xl sm:text-4xl md:text-5xl text-[#E5C378] tracking-tight tabular-nums animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#C5A059] mt-1 sm:mt-2 font-medium">
              Seconds
            </span>
          </div>

        </div>

        {/* Auspicious Muhurtham Note */}
        <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.22em] text-[#C5A059] uppercase mt-6 font-semibold">
          Muhurtham: 8.01 AM – 9.01 AM · Trichy
        </p>
      </div>
    </section>
  );
};
