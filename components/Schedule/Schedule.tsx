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
  GRAY = 'bg-[#D9D9D9] text-black',
  NAVY = 'bg-[#09008E] text-white',
  BLUE = 'bg-[#00B0F0] text-white',
  LIGHT_BLUE = 'bg-[#9CC2E4] text-white',
  BLACK = 'bg-[#000000] text-white',
  RED = 'bg-[#FF0000] text-black',
  YELLOW = 'bg-[#FFFF00] text-black',
  GREEN = 'bg-[#2FB400] text-black',
  BRIGHT_GREEN = 'bg-[#00FF00] text-black',
  WHITE = 'bg-[#FFFFFF] text-black',
  PURPLE = 'bg-[#D414D4] text-black'
}



const ScheduleTable: React.FC = () => {

  const t = useTranslations('Schedule');

  const days: string[] = [t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat'), t('sun')];

  const schedule: ScheduleCell[][] = scheduleJson.map((row) =>
    row.map((cell) => ({
      ...cell,
      color: ClassColors[cell.color as keyof typeof ClassColors] || ''
    }))
  );

  const Legend = () => {

    const items = [
      { label: t('legend1'), color: ClassColors.GRAY },
      { label: t('legend2'), color: ClassColors.GREEN },
      { label: t('legend3'), color: ClassColors.BLUE },
      { label: t('legend4'), color: ClassColors.YELLOW },
      { label: t('legend5'), color: ClassColors.BRIGHT_GREEN },
      { label: t('legend6'), color: ClassColors.RED },
      { label: t('legend7'), color: ClassColors.NAVY },
      { label: t('legend8'), color: ClassColors.NAVY },
      { label: t('legend9'), color: ClassColors.LIGHT_BLUE },
      { label: t('legend10'), color: ClassColors.BLACK },
      { label: t('legend11'), color: ClassColors.PURPLE },
      { label: t('legend12'), color: ClassColors.WHITE },
    ];

    return (
      <div className="flex flex-wrap gap-4 text-white">
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
                      <time className="text-[1.0rem] font-bold mb-1">{cell.time}</time>
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