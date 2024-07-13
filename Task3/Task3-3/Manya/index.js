import dotenv from  "dotenv"
dotenv.config();

import express from "express";
import connectDb from "./config/connectDb.js";
import router from "./routes/route.js";
const app = express();

const DB_URL =  process.env.DB_URL;
const PORT =  process.env.PORT;

app.use(express.json());
app.use("/", router)

connectDb(DB_URL);

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})