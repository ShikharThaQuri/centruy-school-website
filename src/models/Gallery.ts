import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    eventHeading: {
      type: String,
      require: true,
    },

    eventDis: {
      type: String,
      require: true,
    },

    type: {
      type: String,
      require: true,
    },

    Images: [
      {
        public_url: { type: String, require: true },
        image_url: { type: String, require: true },
      },
    ],
  },
  { timestamps: true }
);

const Event = mongoose.models.event || mongoose.model("event", GallerySchema);

export default Event;

export type eventType = {
  _id: string;
  eventHeading: string;
  eventDis: string;
  type: string;
  Images: [
    {
      public_url: string;
      image_url: string;
      _id: string;
    }
  ];
};
