import cloudinary from "./cloudinary";

export const deleteImage = async ({ public_id }: { public_id: string }) => {
  await cloudinary.uploader.destroy(public_id);
};
