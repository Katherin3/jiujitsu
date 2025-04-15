'use client';
import { JSX, useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo192.png";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Link } from '@/i18n/navigation';

type Language = {
    name: string;
    code: string;
}

const languages: Language[] = [{ name: "English", code: "en" }, { name: "Georgian", code: "ka" }, { name: "Russian", code: "ru" }] as const;

type MainHeaderProps = {
    locale: string;
};
const MainHeader: React.FC<MainHeaderProps> = (props: MainHeaderProps) => {
    const [language, setLanguage] = useState<Language>(languages.find(lang => lang.code === props.locale) || languages[1]);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    //const currentLocale = useLocale();

    const t = useTranslations('MainHeader');

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        setDropdownOpen(false);
        // Replace current locale with new one in path
        const segments = pathname.split('/');
        segments[1] = lang.code; // Assumes URL structure like /en/...

        const newPath = segments.join('/');
        router.push(newPath);
    };

    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                (menuRef.current &&
                    !menuRef.current.contains(event.target as Node)) ||
                (dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node)) ||
                (aboutRef.current && !aboutRef.current.contains(event.target as Node))
            ) {
                setMenuOpen(false);
                setDropdownOpen(false);
                setAboutOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const image = <Link href="/"><Image src={logo} alt="Logo" width={60} height={60} /></Link>;

    const GeorgianFlag: JSX.Element = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="15">
            <rect width="60" height="30" fill="#fff" />
            <rect x="26" width="8" height="30" fill="#d40000" />
            <rect y="11" width="60" height="8" fill="#d40000" />
            <g fill="#d40000">
                <path d="M7 4 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
                <path d="M51 4 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
                <path d="M7 18 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
                <path d="M51 18 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z" />
            </g>
        </svg>
    );
    const RussianFlag: JSX.Element = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="15">
            <rect width="60" height="10" fill="#fff" />
            <rect y="10" width="60" height="10" fill="#0033a0" />
            <rect y="20" width="60" height="10" fill="#d52b1e" />
        </svg>

    );
    const UsaFlag: JSX.Element = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" width="20" height="15">
            <rect width="7410" height="3900" fill="#b22234" />
            <g fill="#fff">
                <rect width="7410" height="300" y="300" />
                <rect width="7410" height="300" y="900" />
                <rect width="7410" height="300" y="1500" />
                <rect width="7410" height="300" y="2100" />
                <rect width="7410" height="300" y="2700" />
                <rect width="7410" height="300" y="3300" />
            </g>
            <rect width="2964" height="2100" fill="#3c3b6e" />
            <g fill="#fff">
                {Array.from({ length: 9 }).map((_, row) => (
                    Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => (
                        <polygon
                            key={`${row}-${col}`}
                            points="140,0 54,218 225,84 55,84 226,218"
                            transform={`translate(${col * 494 + (row % 2 === 0 ? 0 : 247)}, ${row * 233}) scale(0.4)`}
                        />
                    ))
                ))}
            </g>
        </svg>
    );



    return (
        <header className="sticky top-0 bg-black text-white flex justify-between items-center px-6 py-4 shadow-md z-50">
            <div className="hidden max-[950px]:flex items-center">
                {image}
            </div>
            <nav className="max-[950px]:hidden  flex flex-1 items-center justify-center space-x-6 relative pl-33.5">
                <div className="flex space-x-6">
                    <Link href="/" className="hover:text-gray-400">{t('home')}</Link>
                    {/* <a href="#about" className="hover:text-gray-400">{t('about')}</a> */}
                    <div className="relative">
                        <button className="hover:text-gray-400 flex items-center gap-1" onClick={() => setAboutOpen(prev => !prev)}>
                            {t('about')}
                            <FaChevronDown className={`text-xs mt-0.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {aboutOpen && (
                            <div ref={aboutRef} className="absolute left-0 mt-2 w-48 bg-black text-white shadow-md rounded-md z-50">
                                <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-700">{t('team')}</Link>
                                <Link href="/about/coaches" className="block px-4 py-2 hover:bg-gray-700">{t('coaches')}</Link>
                                <Link href="/about/faciiity" className="block px-4 py-2 hover:bg-gray-700">{t('facility')}</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/classes" className="hover:text-gray-400">{t('classes')}</Link>
                </div>
                <div className="flex items-center">
                    {image}
                </div>
                <div className="flex space-x-6">
                    <Link href={`/schedule`} className="hover:text-gray-400">{t('schedule')}</Link>
                    <Link href="/gallery" className="hover:text-gray-400">{t('gallery')}</Link>
                    <a href="#contacts" className="hover:text-gray-400">{t('contacts')}</a>
                </div>
            </nav>
            <div className="relative flex items-center space-x-4 md:mr-10">
                <div ref={dropdownRef} className="flex items-center space-x-4">
                    <button
                        className="flex items-center space-x-2 hover:text-gray-400"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        {language.code === "ka" && GeorgianFlag}
                        {language.code === "ru" && RussianFlag}
                        {language.code === "en" && UsaFlag}
                        <span>{t(`${language.code}`)}</span>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-40 bg-black text-white shadow-lg rounded-md overflow-hidden">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    value={lang.code}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                                    onClick={() => changeLanguage(lang)}>
                                    <span className="flex gap-x-2">{lang.code === "ka" ? GeorgianFlag : lang.code === "ru" ? RussianFlag : lang.code === "en" ? UsaFlag : ""}{t(`${lang.code}`)}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button title="Menu" className="hidden max-[950px]:flex text-white text-2xl p-2 border border-white rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars />
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div ref={menuRef} className="absolute top-full left-0 w-full bg-black text-white flex-col items-center space-y-4 py-4 shadow-md hidden max-[950px]:flex">
                    <a href="#home" className="hover:text-gray-400">{t('home')}</a>
                    <div className="flex flex-col items-start px-4">
                        <span className="hover:text-gray-400 font-semibold">{t('about')}▼</span>
                        <Link href="/about/team" className="ml-4 mt-1 text-sm hover:text-gray-400">{t('team')}</Link>
                        <Link href="/about/coaches" className="ml-4 mt-1 text-sm hover:text-gray-400">{t('coaches')}</Link>
                        <Link href="/about/faciiity" className="ml-4 mt-1 text-sm hover:text-gray-400">{t('facility')}</Link>
                    </div>

                    <a href="#classes" className="hover:text-gray-400">{t('classes')}</a>
                    <a href="#schedule" className="hover:text-gray-400">{t('schedule')}</a>
                    <Link href="/gallery" className="hover:text-gray-400">{t('gallery')}</Link>
                    <a href="#contacts" className="hover:text-gray-400">{t('contacts')}</a>
                </div>
            )}
        </header>
    );
};

export default MainHeader;
