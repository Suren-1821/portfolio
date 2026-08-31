import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
import apiRoutes from "./routes/api.js";

const app = express();
app.use(cors());
app.use(express.json());

// simple request log
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// mount all routes to /api
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
