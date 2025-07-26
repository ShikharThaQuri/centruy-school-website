import cloudinary from "./cloudinary";

export async function DeleteImage({ public_id }: { public_id: string }) {
  await cloudinary.uploader.destroy(public_id);

  return true;
}
