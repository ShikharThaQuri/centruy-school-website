import connectDB from "@/db/connect";
import Event from "@/models/Gallery";
import { UploadEventImage } from "@/utils/cloudneary/uploadEventImage";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.formData();

    const files = body.getAll("images");
    let images = [];

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
