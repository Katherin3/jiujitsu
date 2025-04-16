import Image from "next/image";
import { useTranslations } from "next-intl";
import bjjKidsImage from "@/assets/images/kids-bjj.png";



const MainSections = () => {

    //const t = useTranslations('MainSections');
    const t = useTranslations("Classes");
    return (
        <section className="bg-black py-20 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                        <Image
                            src={bjjKidsImage}
                            alt={t("mmaAdults")}
                            fill
                            className="object-cover w-full h-full rounded-t-2xl"
                        />
                    </div>
                    <div className="p-5 sm:p-6">
                        <h2 className="text-white uppercase text-lg sm:text-xl font-semibold tracking-wide mb-2">
                            {t("mmaAdults")}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t("mmaAdultsDesc")}
                        </p>
                    </div>
                </div>
                <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                        <Image
                            src={bjjKidsImage}
                            alt={t("mmaAdults")}
                            fill
                            className="object-cover w-full h-full rounded-t-2xl"
                        />
                    </div>
                    <div className="p-5 sm:p-6">
                        <h2 className="text-white uppercase text-lg sm:text-xl font-semibold tracking-wide mb-2">
                            {t("mmaAdults")}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t("mmaAdultsDesc")}
                        </p>
                    </div>
                </div>
                <div className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                        <Image
                            src={bjjKidsImage}
                            alt={t("mmaAdults")}
                            fill
                            className="object-cover w-full h-full rounded-t-2xl"
                        />
                    </div>
                    <div className="p-5 sm:p-6">
                        <h2 className="text-white uppercase text-lg sm:text-xl font-semibold tracking-wide mb-2">
                            {t("mmaAdults")}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t("mmaAdultsDesc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainSections;