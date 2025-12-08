import Image from "next/image";
import { memo } from "react";

interface IClassItemsProps {
    index: number;
    titleKey: string;
    descKey: string;
    image: string;
    t: (key: string) => string;
}

const ClassItem = memo((props: IClassItemsProps) => {
    const {t, index, titleKey, descKey, image } = props;
    return (
        <article
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
        </article>
    );
});

ClassItem.displayName = "ClassItem";
export default ClassItem;