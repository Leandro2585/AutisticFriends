import { Router } from 'express';
import PostController from '../controllers/PostController';

const postController = new PostController();

const postRouter = Router();
postRouter.post('/', postController.create);

export default postRouter;