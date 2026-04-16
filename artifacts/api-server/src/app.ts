import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";
import { logger } from "./lib/logger";

const pino = pinoHttp as unknown as any;

const app: Express = express();

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    logger.info({
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: Date.now() - start,
    });
  });

  next();
});

app.use(cors());
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

app.use("/api", router);

export default app;
