import { useTranslations } from "next-intl";
import { Link } from '@/i18n/navigation';
import { JSX } from "react";
import { FaCalendarAlt, FaClipboardList, FaHandshake, FaTrophy, FaArrowRight } from "react-icons/fa";

type PromoBlock = {
    icon: JSX.Element;
    promoTitle: string;
    promoDesc: string;
    promoButton?: { title: string, link: string };
}

const PromoBlocks: PromoBlock[] = [
    {
        icon: <FaHandshake className="text-red-500" size={40} />,
        promoTitle: 'promoTitleFree',
        promoDesc: 'promoDescFree',
        promoButton: { title: 'promoButton', link: '/contacts' }
    },
    {
        icon: <FaClipboardList className="text-red-500" size={40} />,
        promoTitle: 'promoTitleIndividual',
        promoDesc: 'promoDescIndividual'
    },
    {
        icon: <FaCalendarAlt className="text-red-500" size={40} />,
        promoTitle: 'promoTitleSchedule',
        promoDesc: 'promoDescSchedule',
        promoButton: { title: 'promoButtonSchedule', link: '/schedule' }
    },
    {
        icon: <FaTrophy className="text-red-500" size={40} />,
        promoTitle: 'promoTitleMasterClasses',
        promoDesc: 'promoDescMasterClasses'
    }
];


const PromoSections = () => {

    //const t = useTranslations('MainSections');
    const t = useTranslations("PromoSections");
    return (
        <section className="bg-black py-8 px-4 min-h-sceen mb-">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {PromoBlocks.map(({ promoTitle, promoDesc, icon, promoButton }, index) => (
                    <div key={index} className="group relative flex flex-col justify-between h-full bg-gradient-to-br from-zinc-900 to-zinc-800  rounded-2xl overflow-visible shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.015] hover:shadow-2xl"
                    >
                        {/* Иконка поверх рамки */}
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 p-3 rounded-full border-2 border-white/20">
                            {/* <div className="bg-zinc-800 p-3 rounded-full border-2 border-white/20"> */}
                            {icon}
                            {/* </div> */}
                        </div>

                        {/* Основной контент: с отступом сверху, чтобы не налезало на иконку */}
                        <div className="mt-10 p-5 sm:p-6 flex-grow">
                            <h2 className="text-white uppercase text-lg sm:text-xl font-semibold tracking-wide mb-2">
                                {t(promoTitle)}
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {t(promoDesc)}
                            </p>
                        </div>

                        {/* Блок с кнопкой всегда прижат к низу */}
                        <div className="p-5 sm:p-6">
                            {promoButton ?
                                <Link href={promoButton.link} className="inline-flex items-center gap-2 bg-white text-black font-semibold  px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition"                                >
                                    <span>{t(promoButton.title)}</span>
                                    <FaArrowRight className="text-sm" />
                                </Link> : ""}
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}

export default PromoSections;