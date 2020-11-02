import User from '../infra/typeorm/entities/User';
import ICreateUsersDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
    findById(id: number): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    create(data: ICreateUsersDTO): Promise<User>;
}
export default IUsersRepository;
