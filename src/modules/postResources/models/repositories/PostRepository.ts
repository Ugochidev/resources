import { Post } from "../entities/Post"
import IPostModel from "../entities/Post";
import IPost from "../../dtos/IPostDTO";

class PostRepository {
  private post;
  constructor() {
    this.post = Post;
  }

  async findByTitle(title: string): Promise<IPostModel | null> {
    const post = await this.post.findOne({ title });
    return post;
  }
}

export default PostRepository;