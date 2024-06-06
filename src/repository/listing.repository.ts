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

export { getListings, addListing };
