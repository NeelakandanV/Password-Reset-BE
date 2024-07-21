// Importing neccessary components
import express from "express";
import {CreateUser, DeleteUser, DisplayUsers, ForgotPassword, LoginUser, PasswordReset, VerifyResetLink} from "../controller/userController.js"
import { Validate } from "../utils/Auth.js";

// Middleware
const router = express.Router();

// Setting routes
router.post("/",LoginUser)
router.post("/Signup",CreateUser)
router.get("/Dashboard",Validate,DisplayUsers)
router.put("/ForgotPassword",ForgotPassword)
router.get("/ResetPassword/:id/:pin/:token",VerifyResetLink)
router.put("/ResetPassword/:id/:pin/:token",PasswordReset)
router.delete("/delete/:id",DeleteUser)

export default  router;