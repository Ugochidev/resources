import { Request, Response, NextFunction } from "express";
import PostService from "../services/PostService.services";

class PostController {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { _id, user_id, title, body, attachments } = req.body;
      const postService = new PostService()
      const createPost = await postService.execute(
 {       _id,
        user_id,
        title,
        body,
        attachments}
      );

      return res.status(201).json({
        success: true,
        message: "Post created sucessfully",
        createPost
      });
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default PostController;
