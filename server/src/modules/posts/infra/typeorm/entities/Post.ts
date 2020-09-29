import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('posts')
class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    likes: number;

    @Column()
    user_post: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_task' })
    user: User;
}