import ScheduleTable from "@/components/Schedule";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function SchedulePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ScheduleTable />
        </div>
    );
}