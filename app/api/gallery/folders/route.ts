export const dynamic = "force-static";
export const revalidate = false;

import { getFolders } from "@/lib/cloudinary";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const rawFolders = await getFolders("PhotoGallery");

    // Convert "gallery/bjj" → { id: "bjj", label: "Bjj", folder: "gallery/bjj" }
    const folders = rawFolders.map((f) => {
      const segments = f.path.split("/");
      const key = segments[segments.length - 1]; // "bjj"

      const label = key
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()); // "Bjj", "Krav Maga", etc.

      return {
        id: key,
        label,
        folder: f.path,
      };
    });

    return NextResponse.json({ folders });
  } catch (err) {
    console.error("Error fetching folders from Cloudinary", err);
    return NextResponse.json(
      { error: "Failed to load folders" },
      { status: 500 },
    );
  }
}
