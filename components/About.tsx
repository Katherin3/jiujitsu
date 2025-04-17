import Image from "next/image";
import { useTranslations } from "next-intl";
import emblem1 from "@/assets/images/bjjnf.jpg";
import emblem2 from "@/assets/images/Logo_JJIF.png";
import emblem3 from "@/assets/images/logo-ibjjf-vertical-WHITE.svg";
import aboutPhoto from "@/assets/images/adults-bjj.png";

const About = () => {
  const t = useTranslations("About");

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text and Emblems */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center uppercase tracking-tight mb-6">
            {t("aboutTitle")}
          </h2>
          <p className="text-gray-300 text-center text-lg leading-relaxed mb-8">
            {t("aboutDescription")}
            
          </p>
          <div className="flex gap-6 items-center">
            <Image src={emblem1} alt="Emblem 1" className="w-40 h-auto" />
            <Image src={emblem2} alt="Emblem 2" className="w-40 h-auto" />
            <Image src={emblem3} alt="Emblem 2" className="w-40 h-auto" />
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <Image
            src={aboutPhoto}
            alt="About Us Photo"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
