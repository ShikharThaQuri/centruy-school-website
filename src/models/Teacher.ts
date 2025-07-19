import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {
    teacherName: { type: String, require: true },
    teacherQuote: { type: String },
    teacherRole: { type: String, require: true },
    teacherImage: { type: String },
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
  teacherImage: String;
  createdAt: Date;
  updatedAt: Date;
};
