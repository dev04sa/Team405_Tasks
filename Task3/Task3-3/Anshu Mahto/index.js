const express = require("express");
const User = require("./models/users");
const { connectMongo } = require("./connection");
const userRouter = require("./routes/user");
require("dotenv").config();

const app = express();
const PORT = 5000;

connectMongo("mongodb://localhost:27017/team_405_t33").then(() =>
  console.log("mongodb connected")
);

app.use(express.urlencoded({ extended: "false" }));

app.use("/users", userRouter);

app.listen(PORT, () => console.log(`server started at port : ${PORT}`));
