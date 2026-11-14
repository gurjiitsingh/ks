"use client";

import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ContactInfo({ outlet, schedule }: any) {
  if (!outlet) return null;

  return (
    <section className="relative overflow-hidden bg-[#fffaf3] text-neutral-950 py-16 md:py-24 px-6">
      
      {/* Soft red ambient glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">

          <span className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Contact &amp; Visit
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Come &amp; Enjoy
            <span className="text-red-600"> The Flavour</span>
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-neutral-500 leading-relaxed">
            Find us, get in touch and check our opening hours.
            We look forward to welcoming you.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

          {/* Address */}
          <div className="group bg-white border border-neutral-200 rounded-[2rem] p-7 md:p-8 text-center shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300">

            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
              <FaMapMarkedAlt className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="uppercase text-xs tracking-widest font-black mb-4 text-neutral-950">
              Address
            </h3>

            <div className="space-y-1 text-sm text-neutral-600 leading-relaxed">
              <p className="font-bold text-neutral-950">
                {outlet.outletName}
              </p>

              <p>{outlet.addressLine1}</p>

              {outlet.addressLine2 && (
                <p>{outlet.addressLine2}</p>
              )}

              <p>{outlet.city}</p>
            </div>

          </div>

          {/* Phone */}
          <div className="group bg-white border border-neutral-200 rounded-[2rem] p-7 md:p-8 text-center shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300">

            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
              <FaPhoneAlt className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="uppercase text-xs tracking-widest font-black mb-4 text-neutral-950">
              Phone
            </h3>

            <div className="space-y-2 text-sm">
              <p className="text-neutral-600">
                {outlet.phone || "-"}
              </p>

              <p className="text-neutral-600">
                {outlet.phone2 || ""}
              </p>
            </div>

          </div>

          {/* E-Mail */}
          <div className="group bg-white border border-neutral-200 rounded-[2rem] p-7 md:p-8 text-center shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300">

            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
              <FaEnvelope className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="uppercase text-xs tracking-widest font-black mb-4 text-neutral-950">
              E-Mail
            </h3>

            {outlet.email ? (
              <a
                href={`mailto:${outlet.email}`}
                className="text-sm text-neutral-600 hover:text-red-600 hover:underline break-all transition-colors"
              >
                {outlet.email}
              </a>
            ) : (
              <p className="text-sm text-neutral-600">-</p>
            )}

          </div>

          {/* Timing */}
          <div className="group bg-red-600 text-white rounded-[2rem] p-7 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">

            {/* Subtle red highlight */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">

              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/15 flex items-center justify-center">
                <FaCalendarAlt className="w-6 h-6 text-white" />
              </div>

              <h3 className="uppercase text-xs tracking-widest font-black mb-4 text-white">
                Timing
              </h3>

              <div className="text-sm space-y-1.5 text-red-50">
                {schedule?.map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
} 