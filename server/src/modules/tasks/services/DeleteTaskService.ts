import { inject, injectable } from 'tsyringe';
import ITaskRepository from '../repositories/ITasksRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
    user_task: number;
    id: number;
}

@injectable()
class CreateTaskService {
    constructor(
        @inject('TasksRepository')
        private tasksRepository: ITaskRepository,
    ) { }
    public async execute({ user_task, id }: IRequest) {

        const task = await this.tasksRepository.checkTaskIsTheUser(user_task, id);
        if (!task) {
            throw new AppError('This task does not belong to that user.');
        }
        await this.tasksRepository.delete(task.id);
        return true;
    }
}

export default CreateTaskService;