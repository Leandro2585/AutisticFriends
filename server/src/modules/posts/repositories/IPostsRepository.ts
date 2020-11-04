import ICreatePostDTO from '../dtos/ICreatePostDTO';
import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
    create(data: ICreatePostDTO): Promise<Post>;
    findAll(): Promise<Post[] | undefined>;
    findByUser(user_post: number): Promise<Post[] | undefined>;
}
