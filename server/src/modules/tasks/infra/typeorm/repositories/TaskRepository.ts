import ICreateTaskDTO from '@modules/tasks/dtos/ICreateTaskDTO';
import ITaskRepository from '@modules/tasks/repositories/ITasksRepository';
import { getRepository, Repository } from 'typeorm';
import Task from '../entities/Task';

class TaskRepository implements ITaskRepository {
    private ormRepository: Repository<Task>;

    constructor() {
        this.ormRepository = getRepository(Task);
    }
    async findById(id: number): Promise<Task | undefined> {
        const task = await this.ormRepository.findOne(id);
        return task;
    }
    async create(data: ICreateTaskDTO): Promise<Task | undefined> {
        const task = this.ormRepository.create(data);
        await this.ormRepository.save(task);
        return task;
    }
    async delete(id: number): Promise<void> {
        // const task = await this.ormRepository.delete().;
    }
}

export default TaskRepository;