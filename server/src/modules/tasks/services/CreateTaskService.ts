import { inject, injectable } from "tsyringe";
import ITaskRepository from "../repositories/ITasksRepository";
import ICreateTaskDTO from "../dtos/ICreateTaskDTO";
import CreateUserService from "@modules/users/services/CreateUserService";

@injectable()
class CreateTaskService {
    constructor(
        @inject('TaskRepository')
        private taskRepository: ITaskRepository,
    ) { }
    public async execute({ user_task, title, description, date }: ICreateTaskDTO) {
        const task = await this.taskRepository.create({
            user_task,
            title,
            description,
            date
        });
        return task;
    }
}

export default CreateTaskService;