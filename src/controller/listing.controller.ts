import { Listing } from "src/model/listing";
import {
  addListing,
  getListings,
  deletelisting,
} from "../repository/listing.repository";
import { addListingSchema } from "./validators/listing.validator";
import { CustomHTTPError } from "../shared/http-error";

export class ListingController {
  async getAll(): Promise<Listing[]> {
    const result = await getListings();
    return result;
  }

  async add(listing: Omit<Listing, "id">): Promise<void> {
    const validationResult = addListingSchema.safeParse(listing);

    if (!validationResult.success) {
      throw new CustomHTTPError(validationResult.error.issues[0].message, 400);
    }

    const result = await addListing(listing);
    return result;
  }

  async delete(id: string): Promise<void> {
    const result = await deletelisting(id);
    return result;
  }
}
