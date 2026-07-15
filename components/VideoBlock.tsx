'use client';
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaAngleDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useState, useRef } from "react";

const VideoBlock = () => {
    const t = useTranslations("VideoBlock");
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <section id="home" className="w-full h-[calc(100vh-92px)] relative flex justify-center items-center bg-black text-white overflow-hidden">
            {/* Video Background - covers full section */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source
                    src="https://res.cloudinary.com/dkd3pytpy/video/upload/lv_0_20260506143517_po6ptv.mp4"
                    type="video/mp4"
                />
            </video>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10 z-[5]"></div>
            {/* Mute/Unmute button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
            </button>
            {/* Overlay Content - centered */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
                <Image
                    className="mx-auto mb-6 w-32 h-auto"
                    src="https://res.cloudinary.com/dkd3pytpy/image/upload/c_pad,w_128,h_128/gladius_center_logo_obocvh_hqudeu?v=2"
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
        </section>

    );
}

export default VideoBlock;