import express from "express";
import morgan from "morgan";
import cors from "cors";
import xss from "xss-clean";
import helmet from "helmet";
import * as dotenv from "dotenv";
dotenv.config();
// ADD A COMMENT

import solarRouter from "./routes/solarRoutes.js";
import clientRequestRouter from "./routes/requestRoutes.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "img-src": ["'self'", "https: data:"],
        "script-src": [
          "'self'",
          "https://maps.googleapis.com",
          "https://maps.gstatic.com",
        ],
        "default-src": [
          "'self'",
          "https://maps.googleapis.com",
          "https://maps.gstatic.com",
        ],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(xss());
app.use(cors());

app.use(morgan("dev"));
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.use("/api/v1", solarRouter);
app.use("/api/v1", clientRequestRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
