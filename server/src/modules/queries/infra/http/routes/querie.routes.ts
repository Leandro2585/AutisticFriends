import { Router } from 'express';
import QuerieController from '../controllers/QuerieController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const querieRouter = Router();
const querieController = new QuerieController();

querieRouter.use(ensureAuthenticated);
querieRouter.post('/', querieController.create);
querieRouter.get('/', querieController.index);
querieRouter.delete('/:id', querieController.delete);

export default querieRouter;
