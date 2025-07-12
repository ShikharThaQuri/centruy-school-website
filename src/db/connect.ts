import mongoose, { ConnectOptions } from "mongoose";

interface connectOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  useCreateIndex: boolean;
}

const options: connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "", options);
    console.log("Database connected successfully");
    mongoose.set("strictQuery", false);
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectDB;
