import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'PageMeta' });

    return {
        title: t('adultsBjjTitle'),
        description: t('adultsBjjDescription'),
        alternates: {
            canonical: `${baseUrl}/${locale}/adults-bjj`,
        },
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function AdultsBjjPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AdultsBjjContent />
        </div>
    );
}

async function AdultsBjjContent() {
    const t = await getTranslations("AdultsBjj");

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
            <p className="text-gray-300 whitespace-pre-line">{t("description")}</p>
        </div>
    );
}
