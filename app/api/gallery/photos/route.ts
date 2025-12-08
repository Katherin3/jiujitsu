export const dynamic = "force-static";
export const revalidate = false;


import { NextResponse } from "next/server";
import { getPhotos } from "@/lib/cloudinary";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder");

    if (!folder) {
        return NextResponse.json(
            { error: "Missing 'folder' query param" },
            { status: 400 },
        );
    }

    try {
        const photos = await getPhotos(folder);
        return NextResponse.json({ photos });
    } catch (err) {
        console.error("Error fetching photos from Cloudinary", err);
        return NextResponse.json(
            { error: "Failed to load photos" },
            { status: 500 },
        );
    }
}
