import connectDB from "@/db/connect";
import Event from "@/models/Gallery";
import { DeleteImage } from "@/utils/cloudneary/deleteImage";
import { UploadEventImage } from "@/utils/cloudneary/uploadEventImage";

type items = {
  public_url: string;
  image_url: string;
  _id: string;
};

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const result = await Event.findById(slug);
    if (!result) {
      return Response.json({ success: false, msg: "There is no such Event!!" });
    }

    return Response.json({
      success: true,
      msg: "Successfully get single Event.",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while Getting Notice!!",
      error,
    });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;
    const body = await req.formData();

    const event = await Event.findById(slug);
    if (!event) {
      return Response.json({ success: false, msg: "There is no such Event!!" });
    }

    event?.Images.forEach(async (items: items) => {
      await DeleteImage({ public_id: items.public_url });
    });

    const files = body.getAll("images");
    const images = [];

    for (const file of files) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const imageData = await UploadEventImage(buffer);

        if (!imageData) {
          return Response.json({
            success: false,
            msg: "Image Upload Failed!1",
          });
        }

        images.push({
          image_url: imageData.secure_url,
          public_url: imageData.public_id,
        });
      } else {
        return Response.json({
          success: false,
          msg: "Invalid file type received.",
        });
      }
    }

    const result = await Event.findByIdAndUpdate(
      { _id: slug },
      {
        eventHeading: body.get("galleryHeading"),
        eventDis: body.get("dis"),
        type: body.get("eventType"),
        Images: images,
      },
      { new: true }
    );

    return Response.json({
      success: true,
      msg: "Successfully updated the Event",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while Deleting Notice!!",
      error,
    });
  }
}
