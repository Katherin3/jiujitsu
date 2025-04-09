import videoSrc from "@/assets/video/video_bg_main.mp4";
import logoCenter from '@/assets/images/gladius_center_logo.png';
import Link from "next/link";
import Image from "next/image";

const VideoBlock = () => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center py-24 bg-black text-white"
            data-calc-target="#js-header"
        >
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                id="myVideo"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-4">
                <div className="bg-black bg-opacity-60 p-10 rounded-md">
                    <Image className="mb-6 mx-auto w-20 h-auto" src={logoCenter} alt="Gladius" />
                    <h2 className="font-bold text-3xl md:text-5xl uppercase">Welcome to GLADIUS</h2>
                    <p className="text-xl mt-2">JAPANESE AND BRAZILIAN JIU-JITSU</p>

                    <div className="absolute bottom-8 left-0 right-0">
                        <Link
                            href="/#"
                            data-target="#about"
                            className="inline-block text-white bg-white/10 hover:bg-white hover:text-black font-semibold uppercase rounded-full px-6 py-2 transition"
                        >
                            <i className="fa fa-angle-down" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default VideoBlock;