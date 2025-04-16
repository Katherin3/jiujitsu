'use client';
import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = {
    bjj: {
        label: "BJJ",
        images: [
            "/gallery/bjj1.jpg",
            "/gallery/bjj2.jpg",
            "/gallery/bjj3.jpg",
            "/gallery/bjj1.jpg",
            "/gallery/bjj2.jpg",
            "/gallery/bjj3.jpg",
            "/gallery/bjj1.jpg",
            "/gallery/bjj2.jpg",
            "/gallery/bjj3.jpg",
            "/gallery/bjj1.jpg",
            "/gallery/bjj2.jpg",
            "/gallery/bjj3.jpg",
        ],
    },
    mma: {
        label: "MMA",
        images: [
            "/gallery/mma1.jpg",
            "/gallery/mma2.jpg",
            "/gallery/mma1.jpg",
            "/gallery/mma2.jpg",
            "/gallery/mma1.jpg",
            "/gallery/mma2.jpg",
            "/gallery/mma1.jpg",
            "/gallery/mma2.jpg",
            "/gallery/mma1.jpg",
            "/gallery/mma2.jpg",
            "/gallery/mma1.jpg",
            "/gallery/mma2.jpg",
        ],
    },
    krav: {
        label: "Krav Maga",
        images: [
            "/gallery/krav1.jpg",
            "/gallery/krav2.jpg",
            "/gallery/krav3.jpg",
            "/gallery/krav4.jpg",
            "/gallery/krav1.jpg",
            "/gallery/krav2.jpg",
            "/gallery/krav3.jpg",
            "/gallery/krav4.jpg",
            "/gallery/krav1.jpg",
            "/gallery/krav2.jpg",
            "/gallery/krav3.jpg",
            "/gallery/krav4.jpg",
            "/gallery/krav1.jpg",
            "/gallery/krav2.jpg",
            "/gallery/krav3.jpg",
            "/gallery/krav4.jpg",
        ],
    },
};

export default function GalleryWithSidebar() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("bjj");
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const images = categories[activeCategory].images;
    const currentImage = images[activeIndex];

    const openImage = (index: number) => {
        setActiveIndex(index);
        setIsOpen(true);
    };

    const nextImage = () => {
        setActiveIndex((i) => (i + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };

    return (
        <section className="bg-black py-8 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
                    Photo Gallery
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                    Explore moments from our classes, events, and more.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Sidebar */}
                    <aside className="lg:w-48 lg:min-w-[12rem] flex lg:flex-col gap-2 justify-start sticky top-32 self-start">
                        {Object.entries(categories).map(([key, { label }]) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setActiveCategory(key)}
                                className={`text-sm sm:text-base px-4 py-2 rounded-full transition font-medium ${activeCategory === key
                                    ? "bg-white text-black"
                                    : "text-white hover:bg-white/10 border border-white/10"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </aside>
                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => openImage(index)}
                                className="group relative overflow-hidden rounded-2xl shadow-lg border border-white/10 transition-all hover:scale-[1.015] hover:shadow-2xl"
                            >
                                <Image
                                    src={img}
                                    alt="Gallery preview"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
                    <button
                        type="button"
                        aria-label="Close gallery"
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-white hover:text-red-500"
                    >
                        <FaTimes size={32} />
                    </button>

                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-400"
                    >
                        <FaChevronLeft size={40} />
                    </button>

                    <div className="max-w-5xl w-full max-h-[90vh]">
                        <Image
                            src={currentImage}
                            alt="Full view"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-xl"
                        />
                    </div>

                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-400"
                    >
                        <FaChevronRight size={40} />
                    </button>
                </div>
            )}
        </section>
    );
}
