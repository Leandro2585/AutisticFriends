import { inject, injectable } from 'tsyringe';
import TaskRepository from '../repositories/ITasksRepository';

@injectable()
class ListTaskService {
    constructor(
        @inject('TaskRepository')
        private taskRepository: TaskRepository,
    ) { }
}

export default ListTaskService;