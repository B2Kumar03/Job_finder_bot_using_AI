import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";

dotenv.config();

dbConnection().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((error) => console.log("Error connecting to database", error));