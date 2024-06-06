import { Listing } from "src/model/listing";
import { addListing, getListings } from "../repository/listing.repository";

export class ListingController {
  async getAll(): Promise<Listing[]> {
    const result = await getListings();
    return result;
  }

  async add(listing: Omit<Listing, "id">): Promise<void> {
    const result = await addListing(listing);
    return result;
  }
}
