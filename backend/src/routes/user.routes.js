import { Router } from "express";
import passport from "passport";
import { userRegisterValidator } from "../validators/user.validator.js";
import { validate } from "../validators/validate.js";


const router = Router();

// unsecure routes
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);

export default router 