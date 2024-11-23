import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected successfully✅");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
// Export the function to be used in other files
export default dbConnection;
