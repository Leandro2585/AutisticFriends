// import { inject, injectable } from "tsyringe";
// import IPostsRepository from "../repositories/IPostsRepository";
//
// @injectable()
// class CreateLikeService {
//     constructor(
//         @inject('PostRepository')
//         private postRepository: IPostsRepository
//     ) { }
//     public async execute(id: number): Promise<number> {
//         const likes = await this.postRepository.incrementLike(id);
//         return likes;
//     }
// }
// export default CreateLikeService;
