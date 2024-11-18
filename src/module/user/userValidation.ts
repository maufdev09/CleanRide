import { z } from "zod";

// Zod schema for TUser validation
export const userValidationSchema = z.object({
body:z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"), // Customize as needed
  role: z.enum(["admin", "user"], ).default("user"),
  address: z.string().min(1, "Address is required"),
})
});

// Example TypeScript type inferred from the schema
// export type UserInput = z.infer<typeof userValidationSchema>;
