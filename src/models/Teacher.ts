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
  _id: String;
  teacherName: String;
  teacherQuote: String;
  teacherRole: String;
  public_id: String;
  image_Url: String;
  createdAt: Date;
  updatedAt: Date;
};
