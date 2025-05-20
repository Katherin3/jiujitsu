import { memo } from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const socialLinks = [
    { href: "https://www.facebook.com/GladiusFightAcademy", icon: FaFacebookF, title: "Facebook" },
    { href: "https://www.instagram.com/gladius.fight.academy/", icon: FaInstagram, title: "Instagram" },
    { href: "https://t.me", icon: FaTelegramPlane, title: "Telegram" },
    { href: "https://wa.me", icon: FaWhatsapp, title: "WhatsApp" },
    { href: "mailto:gladiusjiujitsu@gmail.com", icon: FaEnvelope, title: "Email" },
];

const SocialNetworks = memo(() => {
    return (<div className="flex space-x-4 text-gray-300">
        {socialLinks.map(({ href, icon: Icon, title }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="text-2xl mt-1  text-white/80 hover:text-red-500 transition-transform group-hover:scale-105" title={title}>
                <Icon />
            </a>
        ))}
    </div>)
});

SocialNetworks.displayName = "SocialNetworks";
export default SocialNetworks;