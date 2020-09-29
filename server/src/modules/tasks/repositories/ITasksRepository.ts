import Task from '../infra/typeorm/entities/Task';
import ICreateTaskDTO from '../dtos/ICreateTaskDTO';

export default interface ITasksRepository {
    findById(id: number): Promise<Task | undefined>;
    findAllTasksFromUser(id: number): Promise<Task[] | undefined>;
    checkTaskIsTheUser(user_task: number, id: number): Promise<Task | undefined>;
    create(data: ICreateTaskDTO): Promise<Task | undefined>;
    delete(id: number): Promise<void>;
}