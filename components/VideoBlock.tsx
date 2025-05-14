import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaAngleDown } from "react-icons/fa";

const VideoBlock = () => {

    const t = useTranslations("VideoBlock");

    return (
        <section id="home" className="w-full relative flex justify-center pt-200 pb-100 bg-black text-white">
            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 pt-40">
                <Image
                    className="mx-auto mb-6 w-32 h-auto"
                    src="https://res.cloudinary.com/dkv4zgqvl/image/upload/c_pad,w_128,h_128/v1747134174/gladius_center_logo_obocvh.png"
                    width={128}
                    height={128}
                    alt="Gladius"
                    priority
                />
                <h1 className="text-4xl md:text-6xl font-bold uppercase">
                    {t("gladius")}
                </h1>
                <p className="text-xl md:text-5xl mt-4 uppercase">
                    {t("welcome")}
                </p>
                <div className="mt-10">
                    <Link href="#about" className="inline-block text-white bg-white/10 hover:bg-white hover:text-black font-semibold uppercase rounded-full px-6 py-2 transition">
                        <FaAngleDown />
                    </Link>
                </div>
            </div>
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="mt-90 pt-50 pb-30 absolute w-full h-350 inset-0  object-cover z-0"
                id="myVideo"
                data-video="0">
                <source src="/videos/video_bg_main.mp4" type="video/mp4" />
                {t("videoError")}
            </video>
        </section>

    );
}

export default VideoBlock;