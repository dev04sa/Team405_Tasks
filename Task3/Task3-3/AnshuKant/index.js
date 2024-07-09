import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json())
const port = process.env.PORT;

try {
  const connectionInstance = await mongoose.connect(`${process.env.DB_URI}`);
  console.log("\nMongoDB connected !!!:", connectionInstance.connection.host);
} catch (error) {
  console.log("Mongoose connection Failed :", error);
  process.exit(1);
}

//
import projectRouter from "./routes/project.route.js";

app.use("/api/v1", projectRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
