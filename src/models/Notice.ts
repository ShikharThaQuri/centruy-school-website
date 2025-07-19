import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema(
  {
    noticeHeader: {
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
