'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Photo = {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    folder: string;
};

export default function GalleryWithSidebar() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const currentImage = photos[activeIndex];

    // Load photos from PhotoGallery folder
    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("/api/gallery/photos");
                if (!res.ok) {
                    throw new Error("Failed to load photos");
                }
                const data = await res.json();
                const images: Photo[] = data.photos || [];
                setPhotos(images);
            } catch (err: unknown) {
                console.error(err);
                setError(err instanceof Error ? err.message : "Error loading photos");
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

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
                {/*<h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">*/}
                {/*    Photo Gallery*/}
                {/*</h1>*/}
                {/*<p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">*/}
                {/*    Explore moments from our classes, events, and more.*/}
                {/*</p>*/}
            </div>

            <div className="max-w-7xl mx-auto">
                {error && (
                    <p className="text-red-500 mb-4 text-sm text-center">
                        {error}
                    </p>
                )}

                {loading && (
                    <p className="text-gray-400 mb-4 text-sm text-center">Loading photos…</p>
                )}

                {!loading && !error && photos.length === 0 && (
                    <p className="text-gray-400 mb-4 text-sm text-center">
                        No photos yet.
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
