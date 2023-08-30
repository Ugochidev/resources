import { Post } from "../entities/Post"
import IPostModel from "../entities/Post";
import IPost from "../../dtos/IPostDTO";

class PostRepository {
  private post;
  constructor() {
    this.post = Post;
  }

  async create(data: IPost): Promise<IPostModel> {
    const post = await this.post.create(data);
    return post;
  }

  async findByTitle(title: string): Promise<IPostModel | null> {
    const post = await this.post.findOne({ title });
    return post;
  }
}

export default PostRepository;