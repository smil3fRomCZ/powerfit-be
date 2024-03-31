import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import AppConfiguration from "./utilities/configuration/AppConfiguration.js";
import ErrorFormatter from "./utilities/error/ErrorFormatter.js";
import ErrorController from "./controllers/ErrorController.js";

// SETUP APP
const app = express();
const globalErrorHandler = new ErrorController();

// SETUP MIDDLEWARE
app.use(helmet());
app.use(cors());

// DEV
console.log({ ENV: AppConfiguration.NODE_ENV });
if (AppConfiguration.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// SETUP ROUTERS

// HANDLE MISSING ROUTES
app.all("*", (req, res, next) =>
  next(new ErrorFormatter(`The url: ${req.originalUrl} does not exist`, 400))
);

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler.handlerErrorMessages);

export default app;
