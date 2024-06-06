import { getListings } from "../repository/listing.repository";

export class ListingController {
  async getAll() {
    const result = await getListings();
    return result;
  }
}
