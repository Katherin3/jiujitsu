// app/[locale]/about/facility/page.tsx
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { routing } from "@/i18n/routing";
import Image from "next/image";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function OurFacilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl border border-gray-700">
        <Image
          src="/images/facility/hero-mats.jpg"
          alt="Training mats and facility overview"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-4 sm:p-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Our Facility
            </h1>
            <p className="text-sm sm:text-base text-gray-200 max-w-xl">
              Clean mats, comfortable changing rooms and a welcoming space
              created for focused training.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Mat Area */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black/40">
          <div className="relative w-full h-40 mb-3 overflow-hidden rounded-lg">
            <Image
              src="/images/facility/mat-area.jpg"
              alt="Mat area"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h2 className="font-semibold text-xl mb-1">Mat Area</h2>
          <p className="mt-2 text-sm text-gray-400">
            Clean, spacious mats with regular disinfection and enough room
            for both classes and sparring.
          </p>
        </div>

        {/* Changing rooms */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black/40">
          <div className="relative w-full h-40 mb-3 overflow-hidden rounded-lg">
            <Image
              src="/images/facility/changing-rooms.jpg"
              alt="Changing rooms"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h2 className="font-semibold text-xl mb-1">Changing Rooms</h2>
          <p className="mt-2 text-sm text-gray-400">
            Separate changing areas with showers and space for your gear.
          </p>
        </div>

        {/* Extras */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black/40">
          <div className="relative w-full h-40 mb-3 overflow-hidden rounded-lg">
            <Image
              src="/images/facility/reception.jpg"
              alt="Reception and lounge area"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h2 className="font-semibold text-xl mb-1">Extras</h2>
          <p className="mt-2 text-sm text-gray-400">
            Reception area, seating, and everything needed to make your time
            before and after class comfortable.
          </p>
        </div>
      </div>
    </div>
  );
}
