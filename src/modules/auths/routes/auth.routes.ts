import { Router } from "express";
import VerifyPhoneNumber from "../controllers/VerifyPhoneNumber.controller";



import validatePhoneNumber from "../validators/phoneNumberValidator";
import verifyPhoneNumberValidator from "../validators/verifyPhoneNumberValidator";


import auth from "../../../shared/middlewares/auth";


const router = Router();
const verifyPhoneNumber = new VerifyPhoneNumber();



router.post("/phoneNumber", validatePhoneNumber, verifyPhoneNumber.sendOtp);
router.post(
  "/verifyPhoneNumber",
  verifyPhoneNumberValidator,
  verifyPhoneNumber.verifyOtp
);


export default router;