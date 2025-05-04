import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./config/config.env" });

const app = express();

const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:5173"];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();
export default app;
