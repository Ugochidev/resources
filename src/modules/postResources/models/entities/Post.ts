import { Document, Schema, model } from "mongoose";
import IPost from "../../dtos/IPostDTO";

const PostSchema: Schema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default interface IPostModel extends IPost, Document {}

export const Post = model<IPostModel>("Post", PostSchema);
