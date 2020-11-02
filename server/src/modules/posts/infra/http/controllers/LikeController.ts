// import { Request, Response } from 'express';
// import CreateLikeService from '@modules/posts/services/CreateLikeService';
// import { container } from 'tsyringe';
//
// class PostController {
//     public async create(
//         request: Request,
//         response: Response
//     ): Promise<Response> {
//
//         const id = request.params.id;
//         const createLike = container.resolve(CreateLikeService);
//         const like = await createLike.execute(id);
//         return response.status(201).json(like);
//
//     }
// }
//
// export default PostController;
