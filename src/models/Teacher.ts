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
