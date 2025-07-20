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
  },
  { timestamps: true }
);

const Notice = mongoose.models.notice || mongoose.model("notice", NoticeSchema);

export default Notice;

export type NoticeType = {
  _id: String;
  noticeHeading: String;
  noticeDis: String;
  pin: Boolean;
  createdAt: Date;
  updatedAt: Date;
};
