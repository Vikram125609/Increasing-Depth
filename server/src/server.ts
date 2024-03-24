import { Request, Response } from "express";

const express = require("express");
const route = require("./route");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({ origin: "https://increasing-depth.vercel.app/" }));
app.use("/api/v1", route);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;