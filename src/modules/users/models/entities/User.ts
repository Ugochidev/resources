import { Document, Schema, model } from 'mongoose';
import IUser from '../../dtos/IUserDTO';

const UserSchema: Schema = new Schema<IUser>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// // create an account for the user when the user is created
// UserSchema.pre('save', async function (next) {
//   if (!this.profile) {
//     await Wallet.create({
//       user_id: this._id,
//       account_name: this.first_name + ' ' + this.last_name,
//       account_wallet_id: this.phone_number.slice(4),
//       // create 15 or 16 digit numbers for the card numberor check if providus bank provides that.
//     });
//   }
//   next();
// });

// // delete the account when the user is deleted
// UserSchema.pre('remove', async function (next) {
//   await Wallet.findByIdAndDelete({ user_id: this._id });
//   next();
// });

// UserSchema.methods.toJSON = function () {
//   const user = this.toObject();
//   delete user.password;
//   delete user.pin;
//   delete user.__v;
//   return user;
// };

export default interface IUserModel extends IUser, Document {}

export const User = model<IUserModel>('User', UserSchema);
