import { CustomHTTPError } from "../shared/http-error";
import { Listing } from "../model/listing";
import { v4 as uuidv4 } from "uuid";

const listings: Listing[] = [];

const getListings = async (): Promise<Listing[]> => {
  return new Promise((resolve, reject) => {
    return resolve(listings);
  });
};

const addListing = async (listing: Omit<Listing, "id">): Promise<void> => {
  return new Promise((resolve, reject) => {
    const id = uuidv4();
    listings.push({ id, ...listing });
    return resolve();
  });
};

const deletelisting = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const index = listings.findIndex((e) => e.id === id);
    if (index >= 0) {
      listings.splice(index, 1);
      return resolve();
    } else {
      throw new CustomHTTPError("Listing not found.", 404);
    }
  });
};

export { getListings, addListing, deletelisting };
