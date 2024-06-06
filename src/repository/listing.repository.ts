import { Listing } from "../model/listing";

const listings: Listing[] = [];

const getListings = (): Promise<Listing[]> => {
  return new Promise((resolve, reject) => {
    return resolve(listings);
  });
};

export { getListings };
