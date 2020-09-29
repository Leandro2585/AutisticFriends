import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    user_task: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('date')
    date: Date;
}

export default Task;