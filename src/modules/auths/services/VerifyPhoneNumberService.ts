import UserRepository from "../../users/models/repositories/UserRepository";
import Cache from "../../../shared/services/Redis";
import IPhoneNumberDTO from "../../users/dtos/IPhoneNumberDTO";
import ITempIdDTO from "../../users/dtos/ITempIdDTO";
import IVerifyPhoneNumberDTO from "../../users/dtos/IVerifyPhoneNumberDTO";
import AppError from "../../../shared/utils/AppError";
import { generateOTP } from "../../../shared/utils";
import { v4 } from "uuid";

class VerifyPhoneNumberService {
  private userRepository: UserRepository;
  private cache: Cache;

  constructor() {
    this.userRepository = new UserRepository();
    this.cache = new Cache();
  }

  async execute({ phone_number }: IPhoneNumberDTO): Promise<{ otp: string }> {
    try {
      const userExists = await this.userRepository.findByPhoneNumber(
        phone_number
      );

      if (userExists) {
        throw new AppError("Phone Number Exists!", 401);
      }

      const otp = generateOTP();

      const payload = {
        user: phone_number,
        data: {
          phone_number,
          phoneNumberVerified: false,
        },
        otp,
      };
      const cachedData = await this.cache.get(phone_number);

      if (cachedData) {
        throw new AppError(
          "phone_number  already exist please verify your account..",
          401
        );
      }
      await this.cache.set(phone_number, payload);
      console.log(999, phone_number);

      // await this.otpRepository.create(payload);

      return { otp };
    } catch (error: any) {
      console.log(error);
      throw new AppError(error);
    }
  }

  async execute2({
    phone_number,
    otp,
  }: IVerifyPhoneNumberDTO): Promise<ITempIdDTO> {
    const cachedData = await this.cache.get(phone_number);
    console.log(675, cachedData);
    

    if (!cachedData) {
      throw new AppError("Account not found!", 404);
    }

    if (cachedData.otp !== otp || Date.now() > cachedData.expiresIn) {
      throw new AppError("OTP Invalid or expired...", 401);
    }

    cachedData.payload = {
      phone_number,
      phoneNumberVerified: true,
    };
    const tempId = v4();

    await this.cache.set(tempId, cachedData.payload);

    // await this.otpRepository.update(verificationOtpExists._id, {
    //   data: verificationOtpExists.data,
    // });

    return { tempId: tempId };
  }
}

export default VerifyPhoneNumberService;
