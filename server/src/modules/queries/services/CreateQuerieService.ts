import { inject, injectable } from 'tsyringe';
import IQueriesRepository from '../repositories/IQueriesRepository';
import ICreateQuerieDTO from '../dtos/ICreateQuerieDTO';

@injectable()
class CreateQuerieService {
    constructor(
        @inject('QueriesRepository')
        private querieRepository: IQueriesRepository,
    ) { }
    public async execute({ 
        user_querie, 
        title, 
        description, 
        date, 
        time, 
        latitude,
        longitude
    }: ICreateQuerieDTO) {
        const querie = await this.querieRepository.create({
            user_querie,
            title,
            description,
            date,
            time,
            latitude,
            longitude
        });
        return querie;
    }
}

export default CreateQuerieService;
