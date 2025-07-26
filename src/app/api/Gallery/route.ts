import connectDB from "@/db/connect";
import Event from "@/models/Gallery";
import { DeleteImage } from "@/utils/cloudneary/deleteImage";
import { UploadEventImage } from "@/utils/cloudneary/uploadEventImage";

type items = {
  public_url: string;
  image_url: string;
  _id: string;
};

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.formData();

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

    const newEvent = new Event({
      eventHeading: body.get("galleryHeading"),
      eventDis: body.get("dis"),
      type: body.get("eventType"),
      Images: images,
    });

    const result = await newEvent.save();

    return Response.json({
      success: true,
      msg: "Successfully Added a new Event.",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while adding Notice!!",
      error,
    });
  }
}

export async function GET() {
  try {
    await connectDB();

    const result = await Event.find({});

    return Response.json({
      success: true,
      msg: "Successfully get all the Events.",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while adding Notice!!",
      error,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const event = await Event.findByIdAndDelete(body.id);
    if (!event) {
      return Response.json({ success: false, msg: "There is no such Event!!" });
    }

    event.Images.forEach(async (items: items) => {
      await DeleteImage({ public_id: items.public_url });
    });

    return Response.json({
      success: true,
      msg: "successfully Delete a Event",
      event,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while adding Notice!!",
      error,
    });
  }
}
