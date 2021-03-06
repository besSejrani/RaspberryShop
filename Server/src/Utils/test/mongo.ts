import "dotenv/config";
import mongoose from "mongoose";

// ========================================================================================================

export const connection = async (url: string) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(error.message);
    console.log("Couldn't connect to database");
  }
};
