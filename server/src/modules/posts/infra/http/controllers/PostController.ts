import { Request, Response } from 'express';

class PostController {
    public async create(request: Request, response: Response): Promise<Response> {
        const aviao = await 2 + 6;
        return response.json({ message: 'ok' })
    }
}

export default PostController;