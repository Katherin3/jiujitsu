'use client';
import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaVideo, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {SocialNetworks} from "@/components";
//import mapImage from "@/assets/images/map.png";

const Contacts = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="bg-black py-8 px-4 text-white relative mb-16">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight mb-4">
                    Contacts
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                    Reach out or find us easily using the map and video instructions below.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
                {/* Map Image */}
                <div className="flex flex-col items-center gap-6">
                    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <a href="https://maps.app.goo.gl/rv7UvDRUg6bKnkhd8" target="_blank" title="Map" rel="noopener noreferrer">
                            <Image
                                src="https://res.cloudinary.com/dkv4zgqvl/image/upload/v1747134053/map_iv4hfi.png"
                                alt="Map location"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </a>
                    </div>
                    <button
                        onClick={() => setShowVideo(true)}
                        className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full  hover:bg-red-500 hover:text-white transition"
                    >
                        <FaVideo className="text-xl align-middle" />
                        <span className="text-base">How to get there</span>
                    </button>
                </div>


                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-start gap-4 border-t border-white/10 pt-4.5">
                        <FaMapMarkerAlt className="text-xl mt-1 text-white/80 hover:text-red-500 transition-transform group-hover:scale-105" />
                        <address>
                            <h3 className="text-xl font-semibold mb-2">Address</h3>
                            <p className="text-gray-300">21 Pavle Aslanidi St, Tbilisi, Georgia</p>
                        </address>
                    </div>

                    <div className="flex items-start gap-4 border-t border-white/10 pt-4.5">
                        <FaPhoneAlt className="text-xl mt-1 text-white/80 hover:text-red-500 transition-transform group-hover:scale-105" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Phone</h3>
                            <a href="tel:+15551234567" className="text-gray-300 hover:underline">
                                +(995) 557-78-88-81
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 border-t border-white/10 pt-4.5">
                        <FaEnvelope className="text-xl mt-1 text-white/80 hover:text-red-500 transition-transform group-hover:scale-105" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <a href="mailto:info@gladiusmartialarts.com" className="text-gray-300 hover:underline">
                                gladiusjiujitsu@gmail.com
                            </a>
                        </div>
                    </div>
                    {/* Social Networks */}
                   <SocialNetworks />
                </div>
            </div>

            {showVideo && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
                    <button
                        type="button"
                        onClick={() => setShowVideo(false)}
                        aria-label="Close video"
                        className="absolute top-6 right-6 text-white hover:text-red-500"
                    >
                        <FaTimes size={32} />
                    </button>

                    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg aspect-[560/840] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
                        <iframe
                            src="https://player.cloudinary.com/embed/?cloud_name=dkv4zgqvl&public_id=lvqiqdjdpughsh22lufp&profile=cld-default"
                            title="How to find us"
                            className="w-full h-full"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contacts;