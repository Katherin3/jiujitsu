'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const categories = {
//     bjj: {
//         label: "BJJ",
//         images: [
//             "/gallery/bjj1.jpg",
//             "/gallery/bjj2.jpg",
//             "/gallery/bjj3.jpg",
//             "/gallery/bjj1.jpg",
//             "/gallery/bjj2.jpg",
//             "/gallery/bjj3.jpg",
//             "/gallery/bjj1.jpg",
//             "/gallery/bjj2.jpg",
//             "/gallery/bjj3.jpg",
//             "/gallery/bjj1.jpg",
//             "/gallery/bjj2.jpg",
//             "/gallery/bjj3.jpg",
//         ],
//     },
//     mma: {
//         label: "MMA",
//         images: [
//             "/gallery/mma1.jpg",
//             "/gallery/mma2.jpg",
//             "/gallery/mma1.jpg",
//             "/gallery/mma2.jpg",
//             "/gallery/mma1.jpg",
//             "/gallery/mma2.jpg",
//             "/gallery/mma1.jpg",
//             "/gallery/mma2.jpg",
//             "/gallery/mma1.jpg",
//             "/gallery/mma2.jpg",
//             "/gallery/mma1.jpg",
//             "/gallery/mma2.jpg",
//         ],
//     },
//     krav: {
//         label: "Krav Maga",
//         images: [
//             "/gallery/krav1.jpg",
//             "/gallery/krav2.jpg",
//             "/gallery/krav3.jpg",
//             "/gallery/krav4.jpg",
//             "/gallery/krav1.jpg",
//             "/gallery/krav2.jpg",
//             "/gallery/krav3.jpg",
//             "/gallery/krav4.jpg",
//             "/gallery/krav1.jpg",
//             "/gallery/krav2.jpg",
//             "/gallery/krav3.jpg",
//             "/gallery/krav4.jpg",
//             "/gallery/krav1.jpg",
//             "/gallery/krav2.jpg",
//             "/gallery/krav3.jpg",
//             "/gallery/krav4.jpg",
//         ],
//     },
// };

type Category = {
    id: string;      // e.g. "bjj"
    label: string;   // e.g. "Bjj" / "Krav Maga"
    folder: string;  // e.g. "gallery/bjj"
};

type Photo = {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    folder: string;
};

export default function GalleryWithSidebar() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loadingCategories, setLoadingCategories] = useState(false);
    const [loadingPhotos, setLoadingPhotos] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeCategory = categories.find((c) => c.id === activeCategoryId) || null;
    const currentImage = photos[activeIndex];

    //Load categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            setLoadingCategories(true);
            setError(null);
            try {
                const res = await fetch("/api/gallery/folders");
                if (!res.ok) {
                    throw new Error("Failed to load categories");
                }
                const data = await res.json();
                const folders: Category[] = data.folders || [];
                setCategories(folders);
                if (folders.length > 0) {
                    setActiveCategoryId(folders[0].id);
                }
            } catch (err: unknown) {
                console.error(err);
                setError(err instanceof Error ? err.message : "Error loading categories");
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    // Load photos whenever active category changes
    useEffect(() => {
        if (!activeCategory) return;

        const fetchPhotos = async () => {
            setLoadingPhotos(true);
            setError(null);
            try {
                const res = await fetch(
                    `/api/gallery/photos?folder=${encodeURIComponent(activeCategory.folder)}`,
                );
                if (!res.ok) {
                    throw new Error("Failed to load photos");
                }
                const data = await res.json();
                const images: Photo[] = data.photos || [];
                setPhotos(images);
                setActiveIndex(0);
            } catch (err: unknown) {
                console.error(err);
                setError(err instanceof Error ? err.message : "Error loading photos");
            } finally {
                setLoadingPhotos(false);
            }
        };

        fetchPhotos();
    }, [activeCategory, activeCategory?.folder]);

    const openImage = (index: number) => {
        setActiveIndex(index);
        setIsOpen(true);
    };

    const nextImage = () => {
        setActiveIndex((i) => (photos.length ? (i + 1) % photos.length : 0));
    };

    const prevImage = () => {
        setActiveIndex((i) =>
            photos.length ? (i - 1 + photos.length) % photos.length : 0,
        );
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
                        {loadingCategories && (
                            <span className="text-gray-400 text-sm">Loading categories…</span>
                        )}

                        {!loadingCategories && categories.length === 0 && (
                            <span className="text-gray-500 text-sm">
                                No folders found in Gallery.
                            </span>
                        )}

                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveCategoryId(cat.id)}
                                className={`text-sm sm:text-base px-4 py-2 rounded-full transition font-medium ${activeCategoryId === cat.id
                                    ? "bg-white text-black"
                                    : "text-white hover:bg-white/10 border border-white/10"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </aside>
                    {/* Gallery Grid */}
                    <div className="flex-1">
                        {error && (
                            <p className="text-red-500 mb-4 text-sm">
                                {error}
                            </p>
                        )}

                        {loadingPhotos && (
                            <p className="text-gray-400 mb-4 text-sm">Loading photos…</p>
                        )}

                        {!loadingPhotos && !error && photos.length === 0 && activeCategory && (
                            <p className="text-gray-400 mb-4 text-sm">
                                No photos yet for <strong>{activeCategory.label}</strong>.
                            </p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {photos.map((photo, index) => (
                                <button
                                    title="Open image"
                                    key={photo.public_id}
                                    type="button"
                                    onClick={() => openImage(index)}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg border border-white/10 transition-all hover:scale-[1.015] hover:shadow-2xl"
                                >
                                    <Image
                                        src={photo.secure_url}
                                        alt={photo.public_id}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isOpen && currentImage && (
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
                            src={currentImage.secure_url}
                            alt={currentImage.public_id}
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
