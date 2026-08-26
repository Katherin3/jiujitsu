import type { Metadata } from "next";
import { Classes } from "@/components";
import { routing } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'PageMeta' });

    return {
        title: t('classesTitle'),
        description: t('classesDescription'),
        alternates: {
            canonical: `${baseUrl}/${locale}/classes`,
        },
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function ClassesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    // Enable static rendering
    setRequestLocale(locale);
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Classes />
        </div>
    );
}
