import VideoBlock from "@/components/VideoBlock";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <VideoBlock />
    </div>
  );
}
