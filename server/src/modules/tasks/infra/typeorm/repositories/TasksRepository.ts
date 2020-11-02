import ICreateTaskDTO from '@modules/tasks/dtos/ICreateTaskDTO';
import ITaskRepository from '@modules/tasks/repositories/ITasksRepository';
import { getRepository, Repository } from 'typeorm';
import Task from '../entities/Task';

class TaskRepository implements ITaskRepository {
    private ormRepository: Repository<Task>;

    constructor() {
        this.ormRepository = getRepository(Task);
    }
    async checkTaskIsTheUser(user_task: number, id: number): Promise<Task | undefined> {
        const task = await this.ormRepository.findOne({
            where: {
                user_task,
                id
            }
        });
        return task;
    }

    async findAllTasksFromUser(id: number): Promise<Task[] | undefined> {
        const tasks = await this.ormRepository.find({
            where: { user_task: id }
        });

        return tasks;
    }
    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);
        return;
    }
    async findById(id: number): Promise<Task | undefined> {
        const task = await this.ormRepository.findOne(id);
        return task;
    }
    async create({ user_task, title, description, date }: ICreateTaskDTO): Promise<Task | undefined> {
        const task = this.ormRepository.create({
            user_task,
            title,
            description,
            date,
            time
        });
        await this.ormRepository.save(task);
        return task;
    }

}

export default TaskRepository;
