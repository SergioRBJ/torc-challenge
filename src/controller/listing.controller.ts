import { Listing } from "src/model/listing";
import {
  addListing,
  getListings,
  deletelisting,
} from "../repository/listing.repository";

export class ListingController {
  async getAll(): Promise<Listing[]> {
    const result = await getListings();
    return result;
  }

  async add(listing: Omit<Listing, "id">): Promise<void> {
    const result = await addListing(listing);
    return result;
  }

  async delete(id: string): Promise<void> {
    const result = await deletelisting(id);
    return result;
  }
}
