import { TUser } from "./user.interface";
import { User } from "./user.model";

const createSignupIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

export const userService = {
  createSignupIntoDB,
};
