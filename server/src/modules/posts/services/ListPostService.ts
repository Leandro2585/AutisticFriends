import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { injectable, inject } from 'tsyringe';
import Post from '../infra/typeorm/entities/Post';
import IPostsRepository from '../repositories/IPostsRepository';

@injectable()
class ListPostService {
    constructor(
        @inject('PostsRepository')
        private postsRepository: IPostsRepository,

        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) { }
    public async execute() {
        const posts = await this.postsRepository.findAll();

        return posts;
    }
}

export default ListPostService;
