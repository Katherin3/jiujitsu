'use client';
import { useEffect, useRef, useState } from "react";
import { FaGlobe, FaBars } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo192.png";
//import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const languages = ["English", "Georgian", "Russian"] as const;
type Language = (typeof languages)[number];

const MainHeader: React.FC = () => {
    const [language, setLanguage] = useState<Language>("Georgian");
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const router = useRouter();
    const pathname = usePathname();
    //const currentLocale = useLocale();

    //const t = useTranslations();

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        setDropdownOpen(false);
        // Replace current locale with new one in path
        const segments = pathname.split('/');
        segments[1] = lang; // Assumes URL structure like /en/...

        const newPath = segments.join('/');
        router.push(newPath);
    };

    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                (menuRef.current &&
                    !menuRef.current.contains(event.target as Node)) ||
                (dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node))
            ) {
                setMenuOpen(false);
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const image = <Image src={logo} alt="Logo" width={60} height={60} />;
    return (
        <header className="sticky top-0 bg-black text-white flex justify-between items-center px-6 py-4 shadow-md z-50">
            <div className="hidden max-[950px]:flex items-center">
                {image}
            </div>
            <nav className="max-[950px]:hidden  flex flex-1 items-center justify-center space-x-6 relative">
                <div className="flex space-x-6">
                    <a href="#home" className="hover:text-gray-400">HOME</a>
                    <a href="#about" className="hover:text-gray-400">ABOUT US</a>
                    <a href="#classes" className="hover:text-gray-400">OUR CLASSES</a>
                </div>
                <div className="flex items-center">
                    {image}
                </div>
                <div className="flex space-x-6">
                    <a href="#schedule" className="hover:text-gray-400">SCHEDULE</a>
                    <a href="#gallery" className="hover:text-gray-400">PHOTO GALLERY</a>
                    <a href="#contacts" className="hover:text-gray-400">CONTACTS</a>
                </div>
            </nav>
            <div className="relative flex items-center space-x-4 md:ml-auto">
                <div ref={dropdownRef} className="flex items-center space-x-4">
                    <button
                        className="flex items-center space-x-2 hover:text-gray-400"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <FaGlobe />
                        <span>{language}</span>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-32 bg-black text-white shadow-lg rounded-md overflow-hidden">
                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                                    onClick={() => changeLanguage(lang)}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button title="Menu" className="hidden max-[950px]:flex text-white text-2xl p-2 border border-white rounded-lg"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FaBars />
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div ref={menuRef} className="absolute top-full left-0 w-full bg-black text-white flex-col items-center space-y-4 py-4 shadow-md hidden max-[950px]:flex">
                    <a href="#home" className="hover:text-gray-400">HOME</a>
                    <a href="#about" className="hover:text-gray-400">ABOUT US</a>
                    <a href="#classes" className="hover:text-gray-400">OUR CLASSES</a>
                    <a href="#schedule" className="hover:text-gray-400">SCHEDULE</a>
                    <a href="#gallery" className="hover:text-gray-400">PHOTO GALLERY</a>
                    <a href="#contacts" className="hover:text-gray-400">CONTACTS</a>
                </div>
            )}
        </header>
    );
};

export default MainHeader;
