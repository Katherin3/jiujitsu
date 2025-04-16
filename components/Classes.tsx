import Image from "next/image";
import bjjKidsImage from "@/assets/images/kids-bjj.png";
import bjjAdultsImage from "@/assets/images/adults-bjj.png";
import kravMagaImage from "@/assets/images/kravmaga.png";
import { useTranslations } from "next-intl";

const classList = [
    {
        titleKey: "bjjKids",
        descKey: "bjjKidsDesc",
        image: bjjKidsImage,
    },
    {
        titleKey: "bjjAdults",
        descKey: "bjjAdultsDesc",
        image: bjjAdultsImage,
    },
    {
        titleKey: "kravAdults",
        descKey: "kravAdultsDesc",
        image: kravMagaImage,
    },
    {
        titleKey: "kravKids",
        descKey: "kravKidsDesc",
        image: bjjKidsImage,
    },
    {
        titleKey: "mmaAdults",
        descKey: "mmaAdultsDesc",
        image: bjjKidsImage,
    },
    {
        titleKey: "mmaKids",
        descKey: "mmaKidsDesc",
        image: bjjKidsImage,
    },
];

const Classes = () => {
    const t = useTranslations("Classes");

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

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {classList.map(({ titleKey, descKey, image }, index) => (
                    <div
                        key={index}
                        className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl"
                    >
                        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                            <Image
                                src={image}
                                alt={t(titleKey)}
                                fill
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                            {/* Затемнение снизу */}
                            <div className="absolute bottom-0 left-0 right-0 h-35 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 z-20 px-4  h-20 flex justify-end">
                                <h2 className="text-white uppercase text-lg sm:text-xl font-semibold tracking-wide w-full text-center">
                                    {t(titleKey)}
                                </h2>
                            </div>
                        </div>

                        <div className="p-5 sm:p-6">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {t(descKey)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Classes;
