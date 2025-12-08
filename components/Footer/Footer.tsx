import Image from "next/image";
import {
    FaPhoneAlt
} from "react-icons/fa";
import { SocialNetworks } from '@/components';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-8 border-t border-gray-700 max-h-[123px]">
            <div className="max-w-[1214px] mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

                {/* Logo and Address */}
                <div className="flex items-center space-x-4">
                    <Image src="https://res.cloudinary.com/dkv4zgqvl/image/upload/c_pad,w_60,h_60,ar_1:1/v1747134176/logo192_fjgzrl.png" alt="Gladius Jiu-Jitsu Logo" width={60} height={60} />
                    <address className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Gladius Fight Academy BJJ • MMA • Krav Maga Tbilisi</div>
                        <a href="https://maps.app.goo.gl/rv7UvDRUg6bKnkhd8" target="_blank" rel="noopener noreferrer">21 Pavle Aslanidi St, Tbilisi</a>
                    </address>
                </div>

                {/* Social Networks */}
                <SocialNetworks />

                {/* Button Call Now */}
                <a href="tel:+995557788881" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full  hover:bg-red-500 hover:text-white transition">
                    <span>Call Now</span>
                    <FaPhoneAlt className="text-sm" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
