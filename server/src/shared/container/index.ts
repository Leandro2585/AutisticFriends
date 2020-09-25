import { container } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ITaskRepository from '@modules/tasks/repositories/ITasksRepository';
import TaskRepository from '@modules/tasks/infra/typeorm/repositories/TaskRepository';
import '@modules/users/providers';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<ITaskRepository>(
    'TaskRepository',
    TaskRepository,
);