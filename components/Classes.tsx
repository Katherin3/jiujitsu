import Image from "next/image";
import bjjKidsImage from "@/assets/images/kids-bjj.png";
import bjjAdultsImage from "@/assets/images/adults-bjj.png"; 
import kravMagaImage from "@/assets/images/kravmaga.png";
import { useTranslations } from "next-intl";

const Classes = () => {
    const t = useTranslations("Classes");

    return (<>
        
            <section className=" px-4">
                <div className="relative max-w-[1214px] mx-auto bg-white shadow-xl rounded-t-md md:min-h-[220px]">
                    {/* Absolute positioned image */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block z-10">
                        <Image
                            src={bjjKidsImage}
                            alt="Kids Brazilian Jiu-Jitsu"
                            width={260}
                            height={180}
                            className="rounded-md shadow-md"
                            priority
                        />
                    </div>

                    {/* Text content */}
                    <div className="relative z-20 p-6 md:pl-56 text-gray-800 text-sm leading-relaxed">
                        <h2 className="uppercase text-[1.2rem] tracking-widest font-bold mb-4">
                            {t("bjjKids")}
                        </h2>
                        <p>
                            {t("bjjKidsDesc")}
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-4">
                <div className="relative max-w-[1214px] mx-auto bg-white shadow-xl  md:min-h-[220px]">
                    {/* Absolute positioned image */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block z-10">
                        <Image
                            src={bjjAdultsImage}
                            alt="Kids Brazilian Jiu-Jitsu"
                            width={260}
                            height={180}
                            className="rounded-md shadow-md"
                            priority
                        />
                    </div>

                    {/* Text content */}
                    <div className="relative z-20 p-6 md:pl-56 text-gray-800 text-sm leading-relaxed">
                        <h2 className="uppercase text-[1.2rem] tracking-widest font-bold mb-4">
                            {t("bjjAdults")}
                        </h2>
                        <p>
                            {t("bjjAdultsDesc")}
                        </p>
                    </div>
                </div>
            </section>
            <section className=" px-4">
                <div className="relative max-w-[1214px] mx-auto bg-white shadow-xl  md:min-h-[220px]">
                    {/* Absolute positioned image */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block z-10">
                        <Image
                            src={kravMagaImage}
                            alt="Kids Brazilian Jiu-Jitsu"
                            width={260}
                            height={180}
                            className="rounded-md shadow-md"
                            priority
                        />
                    </div>

                    {/* Text content */}
                    <div className="relative z-20 p-6 md:pl-56 text-gray-800 text-sm leading-relaxed">
                        <h2 className="uppercase text-[1.2rem] tracking-widest font-bold mb-4">
                            {t("kravAdults")}
                        </h2>
                        <p>
                            {t("kravAdultsDesc")}
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-4">
                <div className="relative max-w-[1214px] mx-auto bg-white shadow-xl  md:min-h-[220px]">
                    {/* Absolute positioned image */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block z-10">
                        <Image
                            src={bjjKidsImage}
                            alt="Kids Brazilian Jiu-Jitsu"
                            width={260}
                            height={180}
                            className="rounded-md shadow-md"
                            priority
                        />
                    </div>

                    {/* Text content */}
                    <div className="relative z-20 p-6 md:pl-56 text-gray-800 text-sm leading-relaxed">
                        <h2 className="uppercase text-[1.2rem] tracking-widest font-bold mb-4">
                            {t("kravKids")}
                        </h2>
                        <p>
                            {t("kravKidsDesc")}
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-4">
                <div className="relative max-w-[1214px] mx-auto bg-white shadow-xl  md:min-h-[220px]">
                    {/* Absolute positioned image */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block z-10">
                        <Image
                            src={bjjKidsImage}
                            alt="Kids Brazilian Jiu-Jitsu"
                            width={260}
                            height={180}
                            className="rounded-md shadow-md"
                            priority
                        />
                    </div>

                    {/* Text content */}
                    <div className="relative z-20 p-6 md:pl-56 text-gray-800 text-sm leading-relaxed">
                        <h2 className="uppercase text-[1.2rem] tracking-widest font-bold mb-4">
                            {t("mmaAdults")}
                        </h2>
                        <p>
                            {t("mmaAdultsDesc")}
                        </p>
                    </div>
                </div>
            </section>
            <section >
                <div className="relative max-w-[1214px] mx-auto bg-white shadow-xl rounded-b-md md:min-h-[220px]">
                    {/* Absolute positioned image */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block z-10">
                        <Image
                            src={bjjKidsImage}
                            alt="Kids Brazilian Jiu-Jitsu"
                            width={260}
                            height={180}
                            className="rounded-md shadow-md"
                            priority
                        />
                    </div>

                    {/* Text content */}
                    <div className="relative z-20 p-6 md:pl-56 text-gray-800 text-sm leading-relaxed">
                        <h2 className="uppercase text-[1.2rem] tracking-widest font-bold mb-4">
                            {t("mmaKids")}
                        </h2>
                        <p>
                            {t("mmaKidsDesc")}
                        </p>
                    </div>
                </div>
            </section>
       
    </>
    );
};

export default Classes;
