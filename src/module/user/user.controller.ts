import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

const createSignup = catchAsync(async (req, res) => {
  const result = await userService.createSignupIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "User created successfully",
    data: result,
  });
});

export const userController = {
  createSignup,
};
