import { inject, injectable } from 'tsyringe';
import ITasksRepository from '../repositories/ITasksRepository';
import ICreateTaskDTO from '../dtos/ICreateTaskDTO';

@injectable()
class CreateTaskService {
    constructor(
        @inject('TasksRepository')
        private tasksRepository: ITasksRepository,
    ) { }
    public async execute({ user_task, title, description, date, time }: ICreateTaskDTO) {
        const task = await this.tasksRepository.create({
            user_task,
            title,
            description,
            date,
            time
        });
        return task;
    }
}

export default CreateTaskService;
