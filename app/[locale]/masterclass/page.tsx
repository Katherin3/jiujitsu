import { routing } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function MasterclassPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <MasterclassContent />
        </div>
    );
}

async function MasterclassContent() {
    const t = await getTranslations("Masterclass");

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
            <p className="text-gray-300 whitespace-pre-line">{t("description")}</p>
        </div>
    );
}
