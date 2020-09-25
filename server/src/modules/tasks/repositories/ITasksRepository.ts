import Task from '../infra/typeorm/entities/Task';
import ICreateTaskDTO from '../dtos/ICreateTaskDTO';

export default interface ITaskRepository {
    findById(id: number): Promise<Task | undefined>;
    create(data: ICreateTaskDTO): Promise<Task | undefined>;
    delete(id: number): Promise<void>;
}