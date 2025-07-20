import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {
    teacherName: { type: String, require: true },
    teacherQuote: { type: String },
    teacherRole: { type: String, require: true },
    public_id: { type: String },
    image_Url: { type: String },
  },
  { timestamps: true }
);

const Teacher =
  mongoose.models.teachers || mongoose.model("teachers", TeacherSchema);

export default Teacher;

export type TeacherType = {
  _id: string;
  teacherName: string;
  teacherQuote: string;
  teacherRole: string;
  public_id: string;
  image_Url: string;
  createdAt: Date;
  updatedAt: Date;
};
