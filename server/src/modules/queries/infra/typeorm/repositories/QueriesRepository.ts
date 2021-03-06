import ICreateQuerieDTO from '@modules/queries/dtos/ICreateQuerieDTO';
import IQueriesRepository from '@modules/queries/repositories/IQueriesRepository';
import { getRepository, Repository } from 'typeorm';
import Querie from '../entities/Querie';

class QuerieRepository implements IQueriesRepository {
    private ormRepository: Repository<Querie>;

    constructor() {
        this.ormRepository = getRepository(Querie);
    }
    async checkQuerieIsTheUser(user_querie: number, id: number): Promise<Querie | undefined> {
        const querie = await this.ormRepository.findOne({
            where: {
                user_querie: user_querie,
                id: id
            }
        });

        return querie;
    }

    async findAllQueriesFromUser(id: number): Promise<Querie[] | undefined> {
        const querie = await this.ormRepository.find({
            where: { user_querie: id }
        });

        return querie;
    }
    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);
        return;
    }
    async findById(id: number): Promise<Querie | undefined> {
        const querie = await this.ormRepository.findOne(id);
        return querie;
    }
    async create({
        user_querie,
        title,
        description,
        date,
        time,
        latitude,
        longitude
    }: ICreateQuerieDTO): Promise<Querie | undefined> {
        const querie = this.ormRepository.create({
            user_querie,
            title,
            description,
            date,
            time,
            latitude,
            longitude
        });
        await this.ormRepository.save(querie);
        return querie;
    }

}

export default QuerieRepository;
