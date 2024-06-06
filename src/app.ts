import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { CustomHTTPError } from "./shared/http-error";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Ok");
  } catch (error) {
    if (error instanceof CustomHTTPError) {
      res.status(error.statusCode).send(error.message);
    } else {
      next(error);
    }
  }
});

export default app;
