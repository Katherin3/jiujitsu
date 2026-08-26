import { useTranslations } from "next-intl";
import ClassItem from "./ClassItem";

const classList = [
    {
        titleKey: "bjjKids",
        descKey: "bjjKidsDesc",
        image: "/image (4).png",
        link: "/kids-program",
    },
    {
        titleKey: "bjjAdults",
        descKey: "bjjAdultsDesc",
        image: "/image (2).png",
        link: "/adults-bjj",
    },
    {
        titleKey: "bjjYangAdults",
        descKey: "bjjYangAdultsDesc",
        image: "/image (2).png",
        link: "/yang-adults-bjj",
    },
    {
        titleKey: "kravMaga",
        descKey: "kravMagaDesc",
        image: "/image (3).png",
        link: "/krav-maga",
    },
    {
        titleKey: "masterclass",
        descKey: "masterclassDesc",
        image: "/image (3).png",
        link: "/masterclass",
    },
    // {
    //     titleKey: "mmaAdults",
    //     descKey: "mmaAdultsDesc",
    //     image: "https://res.cloudinary.com/dkv4zgqvl/image/upload/c_fill,w_355,h_256/v1747139753/adults-mma-class_pwwhso.png",
    // },
    // {
    //     titleKey: "mmaKids",
    //     descKey: "mmaKidsDesc",
    //     image: "https://res.cloudinary.com/dkv4zgqvl/image/upload/c_fill,w_355,h_256/v1747139756/kids-mma-class_ot8lrc.png",
    // },
];

const Classes = () => {
    const t = useTranslations("Classes");

    return (
        <section className="bg-black py-8 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
                    {t("title")}
                </h1>
                <p className="text-gray-400 max-w-5xl mx-auto text-base sm:text-lg">
                    {t("intro")}
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {classList.map(({ titleKey, descKey, image, link }, index) => (
                    <ClassItem t={t} descKey={descKey} image={image} titleKey={titleKey} link={link} index={index} key={index} />
                ))}
            </div>

        </section>
    );
};

export default Classes;
