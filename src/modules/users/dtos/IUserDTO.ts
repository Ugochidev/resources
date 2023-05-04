// import { AnyARecord } from "dns";

export default interface IUser {
  _id?: any;
  first_name: string;
  last_name: string;
  email?: string;
  phone_number: string;
  password: string;
  email_verified?: string;
  avatar?: string;
  _doc?: any;
}
