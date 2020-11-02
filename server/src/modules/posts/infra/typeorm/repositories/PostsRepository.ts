import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import { getRepository, Repository } from 'typeorm';
import Post from '../entities/Post';

class PostsRepository implements IPostsRepository {
    private ormRepository: Repository<Post>;
    constructor() {
        this.ormRepository = getRepository(Post);
    }
    // async incrementLike(id: number): Promise<number> {
    //     const likes = await this.ormRepository.count({
    //         select: ['likes'],
    //         where: {
    //             id
    //         }
    //     })
    //     return likes;
    // }

    async create(data: ICreatePostDTO): Promise<Post> {
        const post = await this.ormRepository.create(data);
        await this.ormRepository.save(post);

        return post;
    }
    async findAll(): Promise<Post[] | undefined> {
        const posts = await this.ormRepository.find({
            relations: ['user']
        });

        return posts;
    }
    async findByUser(user_post: number): Promise<Post[] | undefined> {
        const posts = await this.ormRepository.find({
            where: {
                user_post
            }
        });
        return posts;
    }


}

export default PostsRepository;
