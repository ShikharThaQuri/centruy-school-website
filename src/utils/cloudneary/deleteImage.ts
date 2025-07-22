import cloudinary from "./cloudinary";

export async function DeleteImage({ public_id }: { public_id: string }) {
  console.log("publid_id", public_id);

  await cloudinary.uploader.destroy(public_id);

  return true;
}
