import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ScheduleTable: React.FC = () => {

  const t = useTranslations('Schedule');

  return (
    <section className="bg-black py-8 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
          {t("title")}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          {t("intro")}
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <Image src="/schedule/1.jpg" width={1600} height={1200} alt={t("title")} className="w-full h-auto rounded" />
        <Image src="/schedule/2.jpg" width={1600} height={1200} alt={t("title")} className="w-full h-auto rounded" />
        <Image src="/schedule/3.jpg" width={1600} height={1200} alt={t("title")} className="w-full h-auto rounded" />
      </div>
    </section>
  );
};

export default ScheduleTable;
