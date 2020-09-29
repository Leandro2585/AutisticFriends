import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';

@injectable()
class CreatePostService {
    constructor(
        @inject('PostsRepository')
        private postsRepository: IPostsRepository
    ) { }

    public async execute() {

    }
}

export default CreatePostService;
