import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";

const register = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw new Error("User already exists");
  }

  payload.role = "user";

  const newUser = await User.create(payload);
  return newUser;
};

const login = async (payload: TLoginUser) => {
    const user = await User.findOne({ email: payload.email });

    if (!user) {
      throw new Error("User already exists");
    };
};

export const userServices = {
  register,
  login
};
