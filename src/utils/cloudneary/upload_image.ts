import cloudinary from "./cloudinary";

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

export const UploadImage = async (buffer: Buffer) => {
  return await new Promise<CloudinaryUploadResult>((resolve, reject) => {
    const UploadStream = cloudinary.uploader.upload_stream(
      { folder: "Teachers" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as CloudinaryUploadResult);
        }
      }
    );

    UploadStream.end(buffer);
  });
};
