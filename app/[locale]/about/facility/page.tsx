// app/[locale]/about/facility/page.tsx
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { routing } from "@/i18n/routing";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PageMeta' });

  return {
    title: t('facilityTitle'),
    description: t('facilityDescription'),
    alternates: {
      canonical: `${baseUrl}/${locale}/about/facility`,
    },
  };
}

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
  const t = useTranslations('Facility');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-[1000px] overflow-hidden rounded-2xl border border-gray-700">
          <Image src="https://res.cloudinary.com/dkd3pytpy/image/upload/5_mnedq3" width={1899} height={1792} alt="IBJJF"  />
      </div>

      {/* Title and text */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-300">
          {t('title')}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 whitespace-pre-line">
          {t('subtitle')}
        </p>
      </div>

      {/* Small images row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-700">
          <Image
            src="https://res.cloudinary.com/dkd3pytpy/image/upload/1jpg_vrtaip"
            alt={t('matAreaTitle')}
            fill
            sizes="(max-width: 768px) 33vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-700">
          <Image
            src="https://res.cloudinary.com/dkd3pytpy/image/upload/3_iqmfbj"
            alt={t('changingRoomsTitle')}
            fill
            sizes="(max-width: 768px) 33vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-700">
          <Image
            src="https://res.cloudinary.com/dkd3pytpy/image/upload/7_iovujj"
            alt={t('extrasTitle')}
            fill
            sizes="(max-width: 768px) 33vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
