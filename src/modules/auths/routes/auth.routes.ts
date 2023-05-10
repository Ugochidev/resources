import { Router } from "express";
import VerifyPhoneNumber from "../controllers/VerifyPhoneNumber.controller";
import CreateUser from "../controllers/CreateUser.controller";



import validatePhoneNumber from "../validators/phoneNumberValidator";
import verifyPhoneNumberValidator from "../validators/verifyPhoneNumberValidator";
import validateCreateUser from "../validators/userCreateValidator";


import auth from "../../../shared/middlewares/auth";


const router = Router();
const verifyPhoneNumber = new VerifyPhoneNumber();
const createUser = new CreateUser();



router.post("/phoneNumber", validatePhoneNumber, verifyPhoneNumber.sendOtp);
router.post(
  "/verifyPhoneNumber",
  verifyPhoneNumberValidator,
  verifyPhoneNumber.verifyOtp
);
router.post("/", validateCreateUser, createUser.create);


export default router;