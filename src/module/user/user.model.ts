import { model } from "mongoose";
import { IUser } from "./user.interface";
import { Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ['admin','user'] },
    address: { type: String, required: true },
  });
  
  export const User = model<IUser>('User', userSchema);