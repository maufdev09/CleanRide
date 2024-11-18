 import express from  "express"; 
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidationSchema } from "./userValidation";


const router=express.Router();




router.post("/signup",validateRequest(userValidationSchema), userController.createSignup)


export const UserRoutes= router





