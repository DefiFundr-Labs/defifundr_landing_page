import { z } from "zod";
export const waitlistSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});
