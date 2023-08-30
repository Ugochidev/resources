import IPostDTO from "../../postResources/dtos/IPostDTO";
import UserRepository from "../../users/models/repositories/UserRepository";
import AppError from "../../../shared/utils/AppError";
import PostRepository from "../models/repositories/PostRepository";
import UploadService from "../../../shared/services/Cloudinary";

class PostService {
  private userRepository: UserRepository;
  private postRepository: PostRepository;
  private uploadService: UploadService;

  constructor() {
    this.userRepository = new UserRepository();
    this.postRepository = new PostRepository();
    this.uploadService = new UploadService();
  }
  async execute({
    _id,
    user_id,
    title,
    body,
    attachments,
  }: IPostDTO): Promise<object> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found, please register", 404);
    }

    const titleExist = await this.postRepository.findByTitle(title);

    if (titleExist) {
      throw new AppError("Title found, please rename", 400);
    }

    let newUrl = "";

    for (const attachment of attachments) {
      const { path } = attachment;
      try {
        const newPath = await this.uploadService.cloudinaryUploadMethod(path);
        newUrl = newPath.res;
      } catch (error: any) {
        throw new AppError("error occur while uploading doc...");
      }
    }
    return {};
  }
}

export default PostService;
