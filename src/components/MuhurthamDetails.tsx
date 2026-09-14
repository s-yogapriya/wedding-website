import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  CalendarPlus,
} from 'lucide-react';

import {
  Kuthuvilakku,
  TempleCrown,
  GoldCorner,
  KolamDivider,
} from './Ornaments';

export const MuhurthamDetails: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=SRI+VASAVI+MAHAL+Birds+Road+Trichy';

  // Google Calendar URL
  // 17 September 2026
  // 8:01 AM - 9:01 AM IST
  const googleCalendarUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=Wedding+of+Dr.+Vedha+Varsha+%26+Er.+T.K.+Balaji` +
    `&dates=20260917T023100Z/20260917T033100Z` +
    `&details=Auspicious+Wedding+Ceremony+of+Sowbagyavathi+Dr.+K.Sb.+Vedha+Varsha+with+Chiranjeevi+Er.+T.K.+Balaji.+Muhurtham+between+8.01+am+to+9.01+am.` +
    `&location=SRI+VASAVI+MAHAL,+Birds+Road+Trichy`;

  return (
    <section
      className="
        relative
        py-20
        px-4
        sm:px-6
        bg-[#FAF6F0]
        text-[#2A1414]
        overflow-hidden
      "
    >
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-80 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <TempleCrown
          width={130}
          className="mb-2 opacity-90"
        />

        <p
          className="
            font-cinzel
            text-xs
            sm:text-sm
            tracking-[0.3em]
            uppercase
            text-[#8C6623]
            font-semibold
            mb-1
            text-center
          "
        >
          Auspicious Muhurtham &amp; Venue
        </p>

        <h2
          className="
            font-cinzel-dec
            font-bold
            text-2xl
            sm:text-4xl
            text-[#4A0E17]
            text-center
            tracking-wide
            mb-3
          "
        >
          Celebration Day Details
        </h2>

        <KolamDivider
          className="my-3 max-w-xs"
        />

        {/* =========================
            MAIN 2 COLUMN LAYOUT
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            lg:gap-10
            items-center
            mt-6
            w-full
          "
        >

          {/* =========================
              COUPLE ARCH PHOTO
          ========================== */}

          <div className="lg:col-span-5 flex justify-center">

            <div
              className="
                relative
                w-full
                max-w-md
                p-2
                bg-gradient-to-b
                from-[#FFF2CC]
                via-[#C5A059]
                to-[#8C6623]
                rounded-t-[150px]
                rounded-b-xl
                shadow-[0_20px_45px_-10px_rgba(74,14,23,0.25)]
                group
              "
            >

              {/* Bottom Left Gold Ornament */}
              <GoldCorner
                position="bl"
                size={28}
                className="absolute bottom-2 left-2 z-10"
              />

              {/* Bottom Right Gold Ornament */}
              <GoldCorner
                position="br"
                size={28}
                className="absolute bottom-2 right-2 z-10"
              />

              {/* =========================
                  ARCH IMAGE FRAME
              ========================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-t-[140px]
                  rounded-b-lg
                  border-2
                  border-[#FCF9F3]
                  aspect-[2/3]
                  bg-[#F4EDE0]
                "
              >

                <img
                  src="/images/couple-traditional-details.jpg"
                  alt="Dr. K.Sb. Vedha Varsha and Er. T.K. Balaji in traditional wedding attire"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-[center_10%]
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  loading="lazy"
                />

                {/* Soft Bottom Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#3A0810]/20
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>

              {/* =========================
                  PHOTO CAPTION
              ========================== */}

              <div className="text-center py-2">

                <span
                  className="
                    font-cormorant
                    italic
                    text-sm
                    text-[#4A0E17]
                    font-semibold
                  "
                >
                  A Sacred Union Blessed by the Divine
                </span>

              </div>

            </div>

          </div>

          {/* =========================
              MUHURTHAM DETAILS
          ========================== */}

          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* =========================
                MAIN DETAILS CARD
            ========================== */}

            <div
              className="
                relative
                bg-[#FCF9F3]
                rounded-xl
                p-6
                sm:p-8
                border
                border-[#C5A059]/40
                shadow-[0_15px_35px_-10px_rgba(74,14,23,0.15)]
                card-noise
              "
            >

              {/* =========================
                  ENGAGEMENT
              ========================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#C5A059]/30
                  pb-4
                  mb-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      p-2.5
                      rounded-full
                      bg-[#4A0E17]
                      text-[#FAF6F0]
                      shadow-sm
                      shrink-0
                    "
                  >
                    <Clock className="w-5 h-5 text-[#FFF2CC]" />
                  </div>

                  <div>

                    <span
                      className="
                        font-cinzel
                        text-[10px]
                        tracking-[0.2em]
                        uppercase
                        text-[#8C6623]
                        font-semibold
                        block
                      "
                    >
                      Engagement
                    </span>

                    <h3
                      className="
                        font-cinzel
                        font-bold
                        text-lg
                        sm:text-xl
                        text-[#4A0E17]
                      "
                    >
                      Wednesday, 16th September 2026
                    </h3>

                    <p
                      className="
                        font-cinzel
                        font-semibold
                        text-sm
                        sm:text-base
                        text-[#5E1120]
                        mt-0.5
                      "
                    >
                      10:00 AM
                    </p>

                  </div>

                </div>

              </div>

              {/* =========================
                  RECEPTION
              ========================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#C5A059]/30
                  pb-4
                  mb-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      p-2.5
                      rounded-full
                      bg-[#4A0E17]
                      text-[#FAF6F0]
                      shadow-sm
                      shrink-0
                    "
                  >
                    <Clock className="w-5 h-5 text-[#FFF2CC]" />
                  </div>

                  <div>

                    <span
                      className="
                        font-cinzel
                        text-[10px]
                        tracking-[0.2em]
                        uppercase
                        text-[#8C6623]
                        font-semibold
                        block
                      "
                    >
                      Reception
                    </span>

                    <h3
                      className="
                        font-cinzel
                        font-bold
                        text-lg
                        sm:text-xl
                        text-[#4A0E17]
                      "
                    >
                      Wednesday, 16th September 2026
                    </h3>

                    <p
                      className="
                        font-cinzel
                        font-semibold
                        text-sm
                        sm:text-base
                        text-[#5E1120]
                        mt-0.5
                      "
                    >
                      6:00 PM
                    </p>

                  </div>

                </div>

              </div>

              {/* =========================
                  AUSPCIOUS DATE
              ========================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#C5A059]/30
                  pb-4
                  mb-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      p-2.5
                      rounded-full
                      bg-[#4A0E17]
                      text-[#FAF6F0]
                      shadow-sm
                      shrink-0
                    "
                  >
                    <Calendar className="w-5 h-5 text-[#FFF2CC]" />
                  </div>

                  <div>

                    <span
                      className="
                        font-cinzel
                        text-[10px]
                        tracking-[0.2em]
                        uppercase
                        text-[#8C6623]
                        font-semibold
                        block
                      "
                    >
                      Auspicious Date
                    </span>

                    <h3
                      className="
                        font-cinzel
                        font-bold
                        text-lg
                        sm:text-xl
                        text-[#4A0E17]
                      "
                    >
                      Thursday, 17th September 2026
                    </h3>

                  </div>

                </div>

              </div>

              {/* =========================
                  MUHURTHAM TIMING
              ========================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#C5A059]/30
                  pb-4
                  mb-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      p-2.5
                      rounded-full
                      bg-[#4A0E17]
                      text-[#FAF6F0]
                      shadow-sm
                      shrink-0
                    "
                  >
                    <Clock className="w-5 h-5 text-[#FFF2CC]" />
                  </div>

                  <div>

                    <span
                      className="
                        font-cinzel
                        text-[10px]
                        tracking-[0.2em]
                        uppercase
                        text-[#8C6623]
                        font-semibold
                        block
                      "
                    >
                      Muhurtham Timing
                    </span>

                    <h3
                      className="
                        font-cinzel
                        font-bold
                        text-lg
                        sm:text-xl
                        text-[#4A0E17]
                      "
                    >
                      Between 8.01 AM to 9.01 AM
                    </h3>

                  </div>

                </div>

              </div>

              {/* =========================
                  WEDDING VENUE
              ========================== */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  mb-6
                "
              >

                <div
                  className="
                    p-2.5
                    rounded-full
                    bg-[#4A0E17]
                    text-[#FAF6F0]
                    shadow-sm
                    mt-1
                    shrink-0
                  "
                >
                  <MapPin className="w-5 h-5 text-[#FFF2CC]" />
                </div>

                <div>

                  <span
                    className="
                      font-cinzel
                      text-[10px]
                      tracking-[0.2em]
                      uppercase
                      text-[#8C6623]
                      font-semibold
                      block
                    "
                  >
                    Wedding Venue
                  </span>

                  <h3
                    className="
                      font-cinzel
                      font-bold
                      text-lg
                      sm:text-xl
                      text-[#4A0E17]
                    "
                  >
                    SRI VASAVI MAHAL
                  </h3>

                  <p
                    className="
                      font-sans-clean
                      text-sm
                      sm:text-base
                      text-[#5E1120]
                      font-medium
                      mt-0.5
                    "
                  >
                    Birds Road Trichy.
                  </p>

                </div>

              </div>

              {/* =========================
                  ACTION BUTTONS
              ========================== */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-stretch
                  sm:items-center
                  gap-3
                  pt-2
                "
              >

                {/* View Location */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-md
                    bg-[#4A0E17]
                    hover:bg-[#5E1120]
                    text-[#FFF2CC]
                    border
                    border-[#C5A059]
                    shadow-md
                    transition-all
                    duration-300
                    font-cinzel
                    text-xs
                    tracking-[0.16em]
                    uppercase
                    font-semibold
                    active:scale-98
                  "
                >
                  <Navigation className="w-4 h-4" />
                  View Location
                </a>

                {/* Add To Calendar */}
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-md
                    bg-[#FAF6F0]
                    hover:bg-[#F5ECE0]
                    text-[#4A0E17]
                    border
                    border-[#C5A059]/70
                    shadow-sm
                    transition-all
                    duration-300
                    font-cinzel
                    text-xs
                    tracking-[0.16em]
                    uppercase
                    font-semibold
                    active:scale-98
                  "
                >
                  <CalendarPlus className="w-4 h-4 text-[#8C6623]" />
                  Add To Calendar
                </a>

              </div>

            </div>

            {/* =========================
                BLESSING NOTE
            ========================== */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4
                text-center
                px-4
              "
            >

              <div className="hidden sm:block shrink-0">
                <Kuthuvilakku height={60} />
              </div>

              <p
                className="
                  font-cormorant
                  italic
                  text-sm
                  sm:text-base
                  text-[#8C6623]
                "
              >
                Your presence and divine blessings are cordially solicited
                on this joyous occasion.
              </p>

              <div className="hidden sm:block shrink-0">
                <Kuthuvilakku height={60} />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};