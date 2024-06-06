import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { CustomHTTPError } from "./shared/http-error";
import { ListingController } from "./controller/listing.controller";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get(
  "/listings",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const controller = new ListingController();
      const listings = await controller.getAll();
      res.json(listings);
    } catch (error) {
      if (error instanceof CustomHTTPError) {
        res.status(error.statusCode).send(error.message);
      } else {
        next(error);
      }
    }
  }
);

export default app;
