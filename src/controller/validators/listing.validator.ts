import { z } from "zod";

const addListingSchema = z.object({
  title: z.string({ message: "title is required." }),
  price: z.number({ message: "price is required." }).nonnegative(),
  description: z.string().optional(),
});

export { addListingSchema };
