'use client';
import { JSX, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Link } from '@/i18n/navigation';
import { GeorgianFlag, RussianFlag, UsaFlag } from "./Flags";


type Language = {
    name: string;
    code: string;
}

// This is a constant array of languages
const LANGUAGES: Language[] = [
    { name: "English", code: "en" },
    { name: "ქართული", code: "ka" },
    { name: "Русский", code: "ru" }] as const;

const FlagMap: Record<string, JSX.Element> = {
    ka: <GeorgianFlag />,
    ru: <RussianFlag />,
    en: <UsaFlag />,
};

type MainHeaderProps = {
    locale: string;
};
const MainHeader: React.FC<MainHeaderProps> = memo((props: MainHeaderProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('MainHeader');

    const [language, setLanguage] = useState<Language>(LANGUAGES.find(lang => lang.code === props.locale) || LANGUAGES[1]);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [aboutOpen, setAboutOpen] = useState(false);



    const changeLanguage = useCallback((lang: Language) => {
        setLanguage(lang);
        setDropdownOpen(false);
        // Replace current locale with new one in path
        const segments = pathname.split('/');
        segments[1] = lang.code; // Assumes URL structure like /en/...

        const newPath = segments.join('/');
        router.push(newPath);
    }, [pathname, router]);

    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const clickedInsideMenu = menuRef.current?.contains(target);
            const clickedInsideDropdown = dropdownRef.current?.contains(target);
            const clickedInsideAbout = aboutRef.current?.contains(target);
            const clickedOnMenuButton = menuButtonRef.current?.contains(target);

            if (!clickedInsideMenu && !clickedInsideDropdown && !clickedInsideAbout && !clickedOnMenuButton) {
                setMenuOpen(false);
                setDropdownOpen(false);
                setAboutOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setDropdownOpen(false);
        setAboutOpen(false);
    }, [pathname]);


    const logoCenterimage: JSX.Element = useMemo((): JSX.Element => {
        return (<Link href="/">
            <Image src="https://res.cloudinary.com/dkv4zgqvl/image/upload/c_pad,w_60,h_60,ar_1:1/v1747134176/logo192_fjgzrl.png" alt="Logo" width={60} height={60} />
        </Link>);
    }, []);

    // Mobile menu
    const mobileMenu: JSX.Element = useMemo((): JSX.Element => {
        return (<div ref={menuRef} className="absolute top-full left-0 w-full bg-black text-white flex-col items-center space-y-4 py-4 shadow-md hidden max-[950px]:flex">
            <Link href="/" className="hover:text-gray-400">{t('home')}</Link>
            <div className="flex flex-col items-start px-4">
                <span className="hover:text-gray-400 font-semibold">{t('about')}▼</span>
                <Link href="/about/team" className="ml-4 mt-1 text-sm hover:text-gray-400">{t('team')}</Link>
                <Link href="/about/coaches" className="ml-4 mt-1 text-sm hover:text-gray-400">{t('coaches')}</Link>
                <Link href="/about/facility" className="ml-4 mt-1 text-sm hover:text-gray-400">{t('facility')}</Link>
            </div>
            <Link href="/classes" className="hover:text-gray-400">{t('classes')}</Link>
            <Link href={`/schedule`} className="hover:text-gray-400">{t('schedule')}</Link>
            <Link href="/gallery" className="hover:text-gray-400">{t('gallery')}</Link>
            <Link href="/contacts" className="hover:text-gray-400">{t('contacts')}</Link>
        </div>)
    }, [t]);

    const dropDownMenu: JSX.Element = useMemo((): JSX.Element => {
        return (
            <div ref={dropdownRef} className="flex items-center space-x-4">
                <button
                    className="flex items-center space-x-2 hover:text-gray-400"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    {FlagMap[language.code]}
                    <span>{t(`${language.code}`)}</span>
                </button>
                {dropdownOpen && <div className="absolute top-full right-0 mt-2 w-40 bg-black text-white shadow-lg rounded-md overflow-hidden">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            value={lang.code}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                            onClick={() => changeLanguage(lang)}>
                            <span className="flex gap-x-2">{FlagMap[lang.code] || ""}{lang.name}</span>
                        </button>
                    ))}
                </div>}
            </div>
        );
    }, [changeLanguage, dropdownOpen, language.code, t]);

    return (
        <header className="sticky top-0 bg-black text-white flex justify-between items-center px-6 py-4 shadow-md z-50">
            <div className="hidden max-[950px]:flex items-center">
                {logoCenterimage}
            </div>
            <nav className="max-[950px]:hidden  flex flex-1 items-center justify-center space-x-6 relative pl-33.5">
                <div className="flex space-x-6">
                    <Link href="/" className="hover:text-gray-400">{t('home')}</Link>
                    <div ref={aboutRef} className="relative">
                        <button className="hover:text-gray-400 flex items-center gap-1" onClick={() => setAboutOpen(prev => !prev)}>
                            {t('about')}
                            <FaChevronDown className={`text-xs mt-0.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {aboutOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-black text-white shadow-md rounded-md z-50">
                                <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-700">{t('team')}</Link>
                                <Link href="/about/coaches" className="block px-4 py-2 hover:bg-gray-700">{t('coaches')}</Link>
                                <Link href="/about/facility" className="block px-4 py-2 hover:bg-gray-700">{t('facility')}</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/classes" className="hover:text-gray-400">{t('classes')}</Link>
                </div>
                <div className="flex items-center">
                    {logoCenterimage}
                </div>
                <div className="flex space-x-6">
                    <Link href={`/schedule`} className="hover:text-gray-400">{t('schedule')}</Link>
                    <Link href="/gallery" className="hover:text-gray-400">{t('gallery')}</Link>
                    <Link href="/contacts" className="hover:text-gray-400">{t('contacts')}</Link>
                </div>
            </nav>
            <div className="relative flex items-center space-x-4 md:mr-10">
                {dropDownMenu}
                {/* Mobile Menu Button */}
                <button ref={menuButtonRef} title="Menu" className="hidden max-[950px]:flex text-white text-2xl p-2 border border-white rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars />
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && mobileMenu}
        </header>
    );
});

MainHeader.displayName = "MainHeader";

export default MainHeader;
