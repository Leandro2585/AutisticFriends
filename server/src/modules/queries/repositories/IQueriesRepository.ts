import Querie from '../infra/typeorm/entities/Querie';
import ICreateQuerieDTO from '../dtos/ICreateQuerieDTO';

export default interface IQueriesRepository {
    findById(id: number): Promise<Querie | undefined>;
    findAllQueriesFromUser(id: number): Promise<Querie[] | undefined>;
    checkQuerieIsTheUser(user_task: number, id: number): Promise<Querie | undefined>;
    create(data: ICreateQuerieDTO): Promise<Querie | undefined>;
    delete(id: number): Promise<void>;
}
