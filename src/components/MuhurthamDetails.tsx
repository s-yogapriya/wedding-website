import React from 'react';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus } from 'lucide-react';
import { Kuthuvilakku, TempleCrown, GoldCorner, KolamDivider } from './Ornaments';

export const MuhurthamDetails: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=SRI+VASAVI+MAHAL+Birds+Road+Trichy';
  
  // Google Calendar URL generator for 17 Sept 2026 8:01 AM to 9:01 AM IST
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Dr.+Vedha+Varsha+%26+Er.+T.K.+Balaji&dates=20260917T023100Z/20260917T033100Z&details=Auspicious+Wedding+Ceremony+of+Sowbagyavathi+Dr.+K.Sb.+Vedha+Varsha+with+Chiranjeevi+Er.+T.K.+Balaji.+Muhurtham+between+8.01+am+to+9.01+am.&location=SRI+VASAVI+MAHAL,+Birds+Road+Trichy`;

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#FAF6F0] text-[#2A1414] overflow-hidden">
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-80 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <TempleCrown width={130} className="mb-2 opacity-90" />
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8C6623] font-semibold mb-1">
          Auspicious Muhurtham &amp; Venue
        </p>
        <h2 className="font-cinzel-dec font-bold text-2xl sm:text-4xl text-[#4A0E17] text-center tracking-wide mb-3">
          Wedding Day Details
        </h2>
        <KolamDivider className="my-3 max-w-xs" />

        {/* 2-Column Grid: Traditional Couple Photo on one side, Muhurtham Card on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6 w-full">
          
          {/* Couple Photo #2: Traditional Wedding Couple Photograph */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm p-3 bg-gradient-to-b from-[#FFF2CC] via-[#C5A059] to-[#8C6623] rounded-t-[140px] rounded-b-xl shadow-[0_20px_45px_-10px_rgba(74,14,23,0.25)] group">
              <GoldCorner position="bl" size={28} className="absolute bottom-2 left-2 z-10" />
              <GoldCorner position="br" size={28} className="absolute bottom-2 right-2 z-10" />

              <div className="relative overflow-hidden rounded-t-[130px] rounded-b-lg border-2 border-[#FCF9F3] aspect-[3/4] bg-[#F4EDE0]">
                <img
                  src="/images/couple-traditional-details.jpg"
                  alt="Dr. K.Sb. Vedha Varsha and Er. T.K. Balaji in traditional wedding attire"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A0810]/35 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative caption banner */}
              <div className="text-center py-2">
                <span className="font-cormorant italic text-sm text-[#4A0E17] font-semibold">
                  A Sacred Union Blessed by the Divine
                </span>
              </div>
            </div>
          </div>

          {/* Details Card (Muhurtham & Venue) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Details Box */}
            <div className="relative bg-[#FCF9F3] rounded-xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-[0_15px_35px_-10px_rgba(74,14,23,0.15)] card-noise">
              
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-[#4A0E17] text-[#FAF6F0] shadow-sm">
                    <Calendar className="w-5 h-5 text-[#FFF2CC]" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#8C6623] font-semibold block">
                      Auspicious Date
                    </span>
                    <h3 className="font-cinzel font-bold text-lg sm:text-xl text-[#4A0E17]">
                      Thursday, 17th September 2026
                    </h3>
                  </div>
                </div>
              </div>

              {/* Timing Box */}
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-[#4A0E17] text-[#FAF6F0] shadow-sm">
                    <Clock className="w-5 h-5 text-[#FFF2CC]" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#8C6623] font-semibold block">
                      Muhurtham Timing
                    </span>
                    <h3 className="font-cinzel font-bold text-lg sm:text-xl text-[#4A0E17]">
                      between 8.01 am to 9.01 am
                    </h3>
                  </div>
                </div>
              </div>

              {/* Venue Box */}
              <div className="flex items-start gap-3 mb-6">
                <div className="p-2.5 rounded-full bg-[#4A0E17] text-[#FAF6F0] shadow-sm mt-1">
                  <MapPin className="w-5 h-5 text-[#FFF2CC]" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#8C6623] font-semibold block">
                    Wedding Venue
                  </span>
                  <h3 className="font-cinzel font-bold text-lg sm:text-xl text-[#4A0E17]">
                    SRI VASAVI MAHAL
                  </h3>
                  <p className="font-sans-clean text-sm sm:text-base text-[#5E1120] font-medium mt-0.5">
                    Birds Road Trichy.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {/* View Location Button (Google Maps) */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4A0E17] hover:bg-[#5E1120] text-[#FFF2CC] border border-[#C5A059] shadow-md transition-all duration-300 font-cinzel text-xs tracking-[0.16em] uppercase font-semibold active:scale-98"
                >
                  <Navigation className="w-4 h-4" />
                  View Location
                </a>

                {/* Add to Calendar Button */}
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#FAF6F0] hover:bg-[#F5ECE0] text-[#4A0E17] border border-[#C5A059]/70 shadow-sm transition-all duration-300 font-cinzel text-xs tracking-[0.16em] uppercase font-semibold active:scale-98"
                >
                  <CalendarPlus className="w-4 h-4 text-[#8C6623]" />
                  Add To Calendar
                </a>
              </div>

            </div>

            {/* Traditional Blessing Note */}
            <div className="flex items-center justify-center gap-4 text-center px-4">
              <div className="hidden sm:block">
                <Kuthuvilakku height={60} />
              </div>
              <p className="font-cormorant italic text-sm sm:text-base text-[#8C6623]">
                Your presence and divine blessings are cordially solicited on this joyous occasion.
              </p>
              <div className="hidden sm:block">
                <Kuthuvilakku height={60} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
