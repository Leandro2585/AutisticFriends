import { container } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import TasksRepository from '@modules/tasks/infra/typeorm/repositories/TasksRepository';
import IQueriesRepository from '@modules/queries/repositories/IQueriesRepository';
import QueriesRepository from '@modules/queries/infra/typeorm/repositories/QueriesRepository';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import PostsRepository from '@modules/posts/infra/typeorm/repositories/PostsRepository';
import '@modules/users/providers';
import './providers';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<ITasksRepository>(
    'TasksRepository',
    TasksRepository,
);

container.registerSingleton<IQueriesRepository>(
    'QueriesRepository',
    QueriesRepository,
);

container.registerSingleton<IPostsRepository>(
    'PostsRepository',
    PostsRepository
);
