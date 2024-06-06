import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { CustomHTTPError } from "./shared/http-error";
import { ListingController } from "./controller/listing.controller";
import { Listing } from "./model/listing";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get(
  "/listings",
  async (
    req: Request,
    res: Response<Listing[] | string>,
    next: NextFunction
  ) => {
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

app.post(
  "/listings",
  async (req: Request, res: Response<void | string>, next: NextFunction) => {
    try {
      const listing = req.body;
      const controller = new ListingController();
      await controller.add(listing);
      res.status(204).send();
    } catch (error) {
      if (error instanceof CustomHTTPError) {
        res.status(error.statusCode).send(error.message);
      } else {
        next(error);
      }
    }
  }
);

app.delete(
  "/listings/:id",
  async (req: Request, res: Response<void | string>, next: NextFunction) => {
    try {
      const { id } = req.params;
      const controller = new ListingController();
      await controller.delete(id);
      res.status(204).send();
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
