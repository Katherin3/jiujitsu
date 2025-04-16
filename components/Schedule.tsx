import React from 'react';
import { useTranslations } from 'next-intl';
import scheduleJson from '@/data/schedule.json';

type ScheduleCell = {
  time: string;
  title: string;
  subtitle: string;
  audience: string;
  color: string;
};

enum ClassColors {
  BJJ_ADULTS = 'bg-blue-900 text-white',
  MMA_ADULTS = 'bg-gray-700 text-white',
  MMA_KIDS = 'bg-red-400 text-white',
  BJJ_KIDS = 'bg-yellow-500 text-black',
  KRAV_ADULTS = 'bg-red-900 text-white',
  KRAV_KIDS = 'bg-green-700 text-white',
  OPEN_MAT = 'bg-purple-700 text-white'
}



const ScheduleTable: React.FC = () => {

  const t = useTranslations('Schedule');

  const days: string[] = [t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat')];

  const schedule: ScheduleCell[][] = scheduleJson.map((row) =>
    row.map((cell) => ({
      ...cell,
      color: ClassColors[cell.color as keyof typeof ClassColors] || ''
    }))
  );

  const Legend = () => {

    const items = [
      { label: `BJJ (${t('adlt')})`, color: ClassColors.BJJ_ADULTS },
      { label: `BJJ (${t('kids')})`, color: ClassColors.BJJ_KIDS },
      { label: `MMA (${t('adlt')})`, color: ClassColors.MMA_ADULTS },
      { label: `MMA (${t('kids')})`, color: ClassColors.MMA_KIDS },
      { label: `KRAV MAGA (${t('adlt')})`, color: ClassColors.KRAV_ADULTS },
      { label: `KRAV MAGA (${t('kids')})`, color: ClassColors.KRAV_KIDS },
      { label: `OPEN MAT (BJJ)`, color: ClassColors.OPEN_MAT },

    ];

    return (
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <div className={`w-4 h-4 rounded ${item.color}`} />
            <span className='text-[1.0rem]'>{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

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
      <Legend />
      <table className="w-full border border-white text-center text-sm font-sans mt-3">
        <thead>
          <tr className="bg-black text-white">
            {days.map((day) => (
              <th key={day} className="p-2 border border-white text-xs sm:text-sm font-bold tracking-wide uppercase">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className={`p-2 border border-white ${cell.color}`}                >
                  {cell.time && (
                    <div className="flex flex-col items-center justify-center text-[0.65rem] sm:text-sm font-semibold leading-tight uppercase">
                      <span className="text-[1.0rem] font-bold mb-1">{cell.time}</span>
                      <span className="text-2xl sm:text-2xl font-bold">{cell.title}</span>
                      {cell.subtitle && <span className="text-xs opacity-80">{cell.subtitle}</span>}
                      <span className="text-[1.0rem] bg-re mt-1 tracking-wide">{t.has(cell.audience) ? t(cell.audience) : ""}</span>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ScheduleTable;