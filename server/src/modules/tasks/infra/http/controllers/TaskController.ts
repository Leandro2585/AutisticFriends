import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import CreateTaskService from '@modules/tasks/services/CreateTaskService';
import ListTaskService from '@modules/tasks/services/ListTaskService';
class TaskController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { user_task, title, description, date } = request.body;
        const parsedDate = parseISO(date);

        const createTask = container.resolve(CreateTaskService);

        const task = await createTask.execute({
            user_task,
            title,
            description,
            date: parsedDate
        });

        return response.json(task);
    }

    public async index(request: Request, response: Response) {
        const { user_task } = request.body;
        const listTask = container.resolve(ListTaskService);
        const tasks = await listTask.execute({
            user_task
        });

        return response.json(tasks);

    }
}
export default TaskController;