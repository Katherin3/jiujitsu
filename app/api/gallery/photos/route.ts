export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getPhotos } from "@/lib/cloudinary";

const GALLERY_FOLDER = "PhotoGallery";

export async function GET() {
    try {
        const photos = await getPhotos(GALLERY_FOLDER);
        return NextResponse.json({ photos });
    } catch (err) {
        console.error("Error fetching photos from Cloudinary", err);
        return NextResponse.json(
            { error: "Failed to load photos" },
            { status: 500 },
        );
    }
}
