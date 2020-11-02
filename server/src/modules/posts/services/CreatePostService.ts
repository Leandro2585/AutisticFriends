import { injectable, inject } from 'tsyringe';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import Post from '../infra/typeorm/entities/Post';
import IPostsRepository from '../repositories/IPostsRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class CreatePostService {
    constructor(
        @inject('PostsRepository')
        private postsRepository: IPostsRepository,

        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('StorageProvider')
        private storageProvider: IStorageProvider
    ) { }

    public async execute({
        description,
        image,
        likes,
        user_post
    }: ICreatePostDTO): Promise<Post> {
        const checkUserExists = await this.usersRepository.findById(user_post);
        if (!checkUserExists) {
            throw new AppError('User is not exists.');
        }

        const filename = await this.storageProvider.saveFile(image);
        const post = await this.postsRepository.create({
            description,
            image: filename,
            likes,
            user_post
        });
        return post;


    }
}

export default CreatePostService;
