import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        const galleryDir = path.join(process.cwd(), "public", "gallery");
        const files = fs.readdirSync(galleryDir);

        const photos = files
            .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
            .map(file => ({
                public_id: file.replace(/\.[^/.]+$/, ""),
                secure_url: `/gallery/${file}`,
                width: 800,
                height: 600,
                folder: "gallery",
            }));

        return NextResponse.json({ photos });
    } catch (err) {
        console.error("Error reading gallery folder", err);
        return NextResponse.json(
            { error: "Failed to load photos" },
            { status: 500 },
        );
    }
}
