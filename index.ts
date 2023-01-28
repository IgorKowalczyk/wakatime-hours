import express from "express";
import morgan from "morgan";
import "dotenv/config";
import rateLimit from "express-rate-limit";
import fetch from "node-fetch";
import compression from "compression";
import { makeBadge } from "badge-maker";
import { Logger } from "./utils/logger.js";
import type { Options } from "express-rate-limit";
import type { Format } from "badge-maker";
import type { Request, Response, NextFunction } from "express";

const app = express() as express.Application;
const port: number = parseInt(process.env.PORT || "3000");
if (!process.env.WAKATIME_API_KEY) throw new Error("WAKATIME_API_KEY is not defined in .env file.");
const token = Buffer.from(process.env.WAKATIME_API_KEY).toString("base64");
if (process.env.NODE_ENV !== "production") app.use(morgan(Logger("event", ":method :url :status :res[content-length] - :response-time ms")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static("public"));
app.use(
 rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
   status: 429,
   message: "Too many requests, please try again later!",
  },
 } as Options)
);

app.disable("x-powered-by");

app.use((_: Request, res: Response, next: NextFunction) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 res.setHeader("X-Content-Type-Options", "nosniff");
 res.setHeader("Content-Security-Policy", "default-src 'self'");
 res.setHeader("Strict-Transport-Security", "max-age=3600; includeSubDomains");
 res.setHeader("X-Frame-Options", "SAMEORIGIN");
 res.setHeader("X-XSS-Protection", "1; mode=block");
 next();
});

app.get("/api/badge/", async (req: Request, res: Response) => {
 const { label, labelColor, color, style } = req.query as {
  label?: string;
  labelColor?: string;
  color?: string;
  style?: string;
 };
 res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
 res.setHeader("Content-Type", "image/svg+xml");
 res.setHeader("Vary", "Accept-Encoding");

 await fetch(`https://wakatime.com/api/v1/users/current/all_time_since_today`, {
  method: "GET",
  headers: {
   Authorization: `Basic ${token}`,
  },
 })
  .then((res) => res.json())
  .then((data: any) => {
   if (data.data) {
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(
     makeBadge({
      label: label || "Wakatime",
      message: data.data.text || "Getting data...",
      color: color || "blue",
      labelColor: labelColor || "grey",
      style: style || "flat",
     } as Format)
    );
   }
  })
  .catch(() => {
   res.status(500).send(
    makeBadge({
     label: "Wakatime",
     message: "Internal server error!",
     color: "red",
     labelColor: "grey",
     style: "flat",
    } as Format)
   );
  });
});

app.get("*", (_: Request, res: Response) => {
 res.status(404).json({
  status: 404,
  message: "Page not found!",
 });
});

app.listen(port, (): void => {
 console.log(Logger("ready", "Server is running on port: " + port));
});

process.on("unhandledRejection", () => {
 return;
});
process.on("uncaughtException", () => {
 return;
});
process.on("uncaughtExceptionMonitor", () => {
 return;
});
process.on("multipleResolves", () => {
 return;
});
