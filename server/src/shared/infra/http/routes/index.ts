import { Router } from 'express';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';
import taskRouter from '@modules/tasks/infra/http/routes/task.routes';
import querieRouter from '@modules/queries/infra/http/routes/querie.routes';
import postRouter from '@modules/posts/infra/http/routes/posts.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/session', sessionRouter);
router.use('/task', taskRouter);
router.use('/querie', querieRouter);
router.use('/post', postRouter);

export default router;
