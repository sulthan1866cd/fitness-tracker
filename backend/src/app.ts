import express, { Express, json } from "express";
import appV1 from "./routes/v1/appV1";
import { configDotenv } from "dotenv";
import cors from "cors";
import "reflect-metadata";
import dataSource from "./configs/db.config";
configDotenv();

const app: Express = express();
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
  })
);
app.use(json());
app.use("/api/v1", appV1);
try {
  dataSource.initialize();
} catch (error) {
  console.error("Error", error);
}
app.listen(process.env.PORT);
