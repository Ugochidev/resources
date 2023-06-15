import IPostDTO from "../../postResources/dtos/IPostDTO";
import UserRepository from "../../users/models/repositories/UserRepository";
import AppError from "../../../shared/utils/AppError";
import PostRepository from "../models/repositories/PostRepository";

class PostService {
  private userRepository: UserRepository;
  private postRepository: PostRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.postRepository = new PostRepository();

  }
  async execute({
    _id,
    user_id,
    title,
    body,
    attachment,
  }: IPostDTO): Promise<object> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found, please register", 404);
    }

    const titleExist = await this.postRepository.findByTitle(title);

     if (titleExist) {
       throw new AppError("Title found, please rename", 400);
     }
    return {};
  }
}

export default PostService;