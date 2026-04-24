// app/[locale]/about/coaches/page.tsx
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { routing } from "@/i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PageMeta' });

  return {
    title: t('coachesTitle'),
    description: t('coachesDescription'),
    alternates: {
      canonical: `${baseUrl}/${locale}/about/coaches`,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function OurCoachesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Coaches");

  const coaches = [
    {
      nameKey: "coach1Name",
      roleKey: "coach1Role",
      src: "/images/coaches/bjj-head-coach.jpg",
      altKey: "coach1Alt",
      descriptionKey: "coach1Description",
      highlights: [],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">{t("title")}</h1>
      </header>

      <section className="space-y-10">
        {coaches.map((coach) => (
          <article
            key={coach.nameKey}
            className="flex flex-col gap-6 rounded-2xl border border-gray-700 bg-black/40 p-4 md:flex-row md:p-6"
          >
            {/* Text right */}
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-semibold text-white">{t(coach.nameKey)}</h2>
                <p className="text-sm font-medium text-gray-300">
                  {t(coach.roleKey)}
                </p>
              </div>

              <p className="text-sm text-gray-200">{t(coach.descriptionKey)}</p>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-300">
                {coach.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
