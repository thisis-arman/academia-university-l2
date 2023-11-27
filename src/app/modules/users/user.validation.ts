import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string().min(1, { message: "Id is required" }),
  password: z
    .string()
    .min(4, { message: "Password is required" })
    .max(20, { message: "Password can't be more than 20" }),
  needsPasswordChange: z.boolean().default(true),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]),
  isDeleted: z.boolean().optional().default(false),
});

export default userValidationSchema;
