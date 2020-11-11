import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('queries')
class Querie {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('date')
    date: Date;

    @Column('time')
    time: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;
    
    @Column()
    user_querie: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_querie' })
    user: User;
}

export default Querie;
