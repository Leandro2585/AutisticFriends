import { inject, injectable } from 'tsyringe';
import TasksRepository from '../repositories/ITasksRepository';

@injectable()
class ListTaskService {
    constructor(
        @inject('TasksRepository')
        private tasksRepository: TasksRepository,
    ) { }
    public async execute(user_task: number) {
        const tasks = await this.tasksRepository.findAllTasksFromUser(user_task);
        return tasks;
    }
}

export default ListTaskService;