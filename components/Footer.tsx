'use client';
import Image from "next/image";
import logo from "@/assets/images/logo192.png"; // замени на актуальный путь
import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaWhatsapp,
    FaEnvelope,
    FaPhoneAlt
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-8 border-t border-gray-700">
            <div className="max-w-[1214px] mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

                {/* Logo and Address */}
                <div className="flex items-center space-x-4">
                    <Image src={logo} alt="Gladius Jiu-Jitsu" width={60} height={60} />
                    <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Gladius Fight Academy BJJ • MMA • Krav Maga Tbilisi</div>
                        <div>21 Pavle Aslanidi St, Tbilisi</div>
                    </div>
                </div>

                {/* Social Networks */}
                <div className="flex space-x-4 text-xl text-gray-300">
                    <a href="https://www.facebook.com/GladiusFightAcademy" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/gladius.fight.academy/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaInstagram /></a>
                    <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaTelegramPlane /></a>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaWhatsapp /></a>
                    <a href="mailto:example@mail.com" className="hover:text-red-500"><FaEnvelope /></a>
                </div>

                {/* Button Call Now */}
                <a href="tel:+995599000000" className="bg-red-400 hover:bg-red-500 hover:text-white text-black font-semibold px-4 py-2 rounded shadow flex items-center space-x-2">
                    <span>Call Now</span>
                    <FaPhoneAlt className="text-sm" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
