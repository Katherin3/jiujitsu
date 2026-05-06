import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { routing } from "@/i18n/routing";
import { PromoSections, About, VideoBlock} from "@/components";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <VideoBlock />
      <About />
      <PromoSections />
    </>
  );
}
