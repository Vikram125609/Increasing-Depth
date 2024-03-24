import { NextFunction, Request, Response } from "express";

const express = require("express");
const route = require("./route");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/hello", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    success: true,
    message: "Hello World",
  });
});

app.use("/api/v1", route);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
