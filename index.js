import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import { ready, event } from "./utils/logger.js";
import fetch from "node-fetch";
import compression from "compression";
import { makeBadge } from "badge-maker";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
const token = new Buffer.from(process.env.WAKATIME_API_KEY).toString("base64");
app.use(morgan(event(":method :url :status :res[content-length] - :response-time ms")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(
 rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: {
   status: 429,
   message: "Too many requests, please try again later.",
  },
 })
);
app.disable("x-powered-by");

app.use((_, res, next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get("/api/badge/", async (req, res) => {
 const { label, labelColor, color, style } = req.query;
 res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
 await fetch(`https://wakatime.com/api/v1/users/current/all_time_since_today`, {
  method: "GET",
  headers: {
   Authorization: `Basic ${token}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.data) {
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(
     makeBadge({
      label: label || "Wakatime",
      message: data.data.text || "Getting data...",
      color: color || "blue",
      labelColor: labelColor || "grey",
      style: style || "flat",
     })
    );
   }
  }).catch((err) => {
   res.status(500).send(
    makeBadge({
     label: "Wakatime",
     message: "Internal server error.",
     color: "red",
     labelColor: "grey",
     style: "flat",
    })
   );
  });
});

app.get("*", (req, res) => {
 res.status(404).json({
  status: 404,
  message: "Page not found.",
 });
});

app.use("/static", express.static("public"));

app.listen(port, () => {
 console.log(ready("Server is running on port: " + port));
});
