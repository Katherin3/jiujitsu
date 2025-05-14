import Image from "next/image";
import { useTranslations } from "next-intl";
//import aboutPhoto from "@/assets/images/adults-bjj.png";

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
            <Image src="https://res.cloudinary.com/dkv4zgqvl/image/upload/c_pad,w_160/v1747134061/bjjnf_dpe3ht.jpg" width={160} height={160} alt="BJJNF" className="w-40 h-auto" />
            <Image src="https://res.cloudinary.com/dkv4zgqvl/image/upload/c_pad,w_160/v1747134175/Logo_JJIF_ymlyde.png" width={160} height={160} alt="JJIF" className="w-40 h-auto" />
            <Image src="https://res.cloudinary.com/dkv4zgqvl/image/upload/v1747134173/logo-ibjjf-vertical-WHITE_uqiahl.svg" width={160} height={160} alt="IBJJF" className="w-40 h-auto" />
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <Image
            src="https://res.cloudinary.com/dkv4zgqvl/image/upload/v1747134067/adults-bjj_es8wbc.png"
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
