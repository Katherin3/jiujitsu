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
        <div className="flex bg-black text-white min-h-screen">
            <aside className="w-48  py-8 px-4 bg-zinc-900">
                <nav className="flex flex-col gap-4">
                    {Object.entries(categories).map(([key, { label }]) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setActiveCategory(key as keyof typeof categories)}
                            className={`text-left px-3 py-2 rounded-lg transition ${activeCategory === key
                                ? "bg-white text-black font-semibold"
                                : "hover:bg-white/10"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <button
                        title="Open image"
                        key={index}
                        type="button"
                        onClick={() => openImage(index)}
                        className="group relative overflow-hidden rounded-xl shadow-lg"
                    >
                        <Image
                            src={img}
                            alt="Gallery image"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </button>
                ))}
            </main>

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

                    <div className="max-w-4xl w-full max-h-[90vh]">
                        <Image
                            src={currentImage}
                            alt="Full view"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-md"
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
        </div>
    );
}
