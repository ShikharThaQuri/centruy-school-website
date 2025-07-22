import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema(
  {
    noticeHeading: {
      type: String,
      require: true,
    },

    noticeDis: {
      type: String,
      require: true,
    },

    pin: {
      type: Boolean,
    },

    sliceDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const Notice = mongoose.models.notice || mongoose.model("notice", NoticeSchema);

export default Notice;

export type NoticeType = {
  _id: string;
  noticeHeading: string;
  noticeDis: string;
  pin: boolean;
  sliceDate: string;
  createdAt: Date;
  updatedAt: Date;
};
