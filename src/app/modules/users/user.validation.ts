import { z } from "zod";

const userValidationSchema = z.object({
  password: z
    .string()
    .min(4, { message: "Password is required" })
    .max(20, { message: "Password can't be more than 20" })
    .optional(),

  status: z.enum(["in-progress", "blocked"]),
  isDeleted: z.boolean().optional().default(false),
});

export default userValidationSchema;
