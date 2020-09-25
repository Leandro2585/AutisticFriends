import { Router } from 'express';
import TaskController from '../controllers/TaskController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.use(ensureAuthenticated);
taskRouter.post('/', taskController.create);

export default taskRouter;