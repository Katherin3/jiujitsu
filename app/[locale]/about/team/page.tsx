// app/[locale]/about/team/page.tsx
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { routing } from "@/i18n/routing";
import Image from "next/image";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function OurTeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <p className="text-lg text-gray-200">
        Meet the people who keep our club running every day — administration,
        operations, front desk and support staff.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Team member 1 */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black/40">
          <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg">
            <Image
              src="/images/team/john-doe.jpg"
              alt="John Doe"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h2 className="font-semibold text-xl mb-1">John Doe</h2>
          <p className="text-sm text-gray-300">General Manager</p>
          <p className="mt-2 text-sm text-gray-400">
            Oversees all club operations and ensures the highest quality
            experience for our members.
          </p>
        </div>

        {/* Team member 2 */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black/40">
          <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg">
            <Image
              src="/images/team/jane-smith.jpg"
              alt="Jane Smith"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h2 className="font-semibold text-xl mb-1">Jane Smith</h2>
          <p className="text-sm text-gray-300">Operations Lead</p>
          <p className="mt-2 text-sm text-gray-400">
            Coordinates schedules, events and day-to-day logistics.
          </p>
        </div>

        {/* Team member 3 */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black/40">
          <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg">
            <Image
              src="/images/team/alex-brown.jpg"
              alt="Alex Brown"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h2 className="font-semibold text-xl mb-1">Alex Brown</h2>
          <p className="text-sm text-gray-300">Front Desk</p>
          <p className="mt-2 text-sm text-gray-400">
            First point of contact for our members — always ready to help.
          </p>
        </div>
      </div>
    </div>
  );
}
