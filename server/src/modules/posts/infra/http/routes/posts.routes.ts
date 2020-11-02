import { Router } from 'express';
import PostController from '../controllers/PostController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import uplaodConfig from '@config/upload';
import multer from 'multer';

const upload = multer(uplaodConfig);

const postController = new PostController();

const postRouter = Router();
postRouter.use(ensureAuthenticated);
postRouter.post('/', upload.single('image'), postController.create);
postRouter.get('/', postController.index);

export default postRouter;