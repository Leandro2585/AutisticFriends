import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import CreateTaskService from '@modules/tasks/services/CreateTaskService';
import ListTaskService from '@modules/tasks/services/ListTaskService';
import DeleteTaskService from '@modules/tasks/services/DeleteTaskService';

class TaskController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { user_task, title, description, date, time } = request.body;
        const parsedDate = parseISO(date);

        const createTask = container.resolve(CreateTaskService);

        const task = await createTask.execute({
            user_task,
            title,
            description,
            date: parsedDate,
            time
        });

        return response.json(task);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const { user_task } = request.headers;
        const listTask = container.resolve(ListTaskService);
        const tasks = await listTask.execute(user_task);

        return response.json(tasks);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const { user_task } = request.headers;
        const { id } = request.params;
        const deleteTask = container.resolve(DeleteTaskService);
        await deleteTask.execute({ user_task, id });
        return response.json({ message: 'Task successfully deleted' });
    }
}
export default TaskController;
