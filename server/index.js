import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import "dotenv/config";

import router from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 9999;

app.use(cors());
app.use(helmet());
app.use(express.json());

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("db connected");
});

app.get("/", (req, res) => {
  try {
    res.send("Hello World!");
  } catch (err) {
    console.log(err);
  }
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
