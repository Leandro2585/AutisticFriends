import { inject, injectable } from 'tsyringe';
import IQuerieRepository from '../repositories/IQueriesRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
    user_querie: number;
    id: number;
}

@injectable()
class CreateQuerieService {
    constructor(
        @inject('QueriesRepository')
        private querieRepository: IQuerieRepository,
    ) { }
    public async execute({ user_querie, id }: IRequest) {

        const querie = await this.querieRepository.checkQuerieIsTheUser(user_querie, id);
        if (!querie) {
            throw new AppError('This task does not belong to that user.');
        }
        await this.querieRepository.delete(querie.id);
        return true;
    }
}

export default CreateQuerieService;
