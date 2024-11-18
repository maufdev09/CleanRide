import { model } from "mongoose";
import { TUser } from "./user.interface";
import { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import config from "../../config";

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"] },
  address: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  this.password = await bcryptjs.hash(this.password, Number(config.salt_round));

  next();
});
userSchema.post("save", async function (doc, next) {
  doc.password = "";

  next();
});

export const User = model<TUser>("User", userSchema);
