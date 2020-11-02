import { Request, Response } from 'express';
import CreatePostService from '@modules/posts/services/CreatePostService';
import ListPostService from '@modules/posts/services/ListPostService';
import { container } from 'tsyringe';

class PostController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {

        const {
            description,
            likes,
            user_post
        } = request.body;

        const createPost = container.resolve(CreatePostService);

        const post = await createPost.execute({
            description,
            image: request.file.filename,
            likes,
            user_post
        });

        return response.status(201).json(post);

    }
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {

        const listPost = container.resolve(ListPostService);

        const posts = await listPost.execute();

        return response.status(200).json({ posts });
    }
}

export default PostController;