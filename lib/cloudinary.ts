import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type CloudinaryFolder = {
  name: string; // e.g. "bjj"
  path: string; // e.g. "gallery/bjj"
};

export type CloudinaryImage = {
  public_id: string;
  secure_url: string;
  folder: string;
  format: string;
  width: number;
  height: number;
};

// Get subfolders inside a "root" folder, e.g. "gallery"
export async function getFolders(rootFolder = "PhotoGallery"): Promise<CloudinaryFolder[]> {
  const res = await cloudinary.api.sub_folders(rootFolder);
  // res.folders: [{ name, path }, ...]
  return res.folders as CloudinaryFolder[];
}

// Get images inside a specific folder, e.g. "gallery/bjj"
export async function getPhotos(folderPath: string): Promise<CloudinaryImage[]> {
  const searchRes = await cloudinary.search
    .expression(`folder:"${folderPath}"`)
    .sort_by("public_id", "desc")
    .max_results(200)
    .execute();

  return (searchRes.resources ?? []).map((r: CloudinaryImage) => ({
    public_id: r.public_id,
    secure_url: r.secure_url,
    folder: r.folder,
    format: r.format,
    width: r.width,
    height: r.height,
  }));
}

export default cloudinary;