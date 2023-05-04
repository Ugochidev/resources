export default interface IOtpDTO {
  // export default interface IWalletDTO {
  user: string;
  // _id: string
  // user: string;
  // account_name?: string;
  // account_number?: string;
  // initiation_tran_ref?: string
  otp: string;
  for: string;
  data?: {
    phone_number?: string;
    phoneNumberVerified?: boolean;
    email?: string;
    emailVerified?: boolean;
  };
  createdAt?: any;
  expiresAt?: any;
  // }
}
