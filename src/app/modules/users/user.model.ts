import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  needsPasswordChange: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ["admin", "student", "faculty"],
  },
  status: ["in-progress", "blocked"],
  isDeleted: { type: Boolean, default: false },
});

export const User = model<TUser>("user", userSchema);
