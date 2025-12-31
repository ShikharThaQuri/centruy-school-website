import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    content: {
      type: String,
      require: true,
    },

    writterName: {
      type: String,
      require: [true, "You must provide writters Name!!"],
    },

    sliceDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.blog || mongoose.model("blog", BlogSchema);

export default Blog;

export type BlogType = {
  _id: string;
  title: string;
  content: string;
  writterName: string;
  sliceDate: string;
  createdAt: Date;
  updatedAt: Date;
};
