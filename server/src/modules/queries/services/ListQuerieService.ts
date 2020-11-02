import { inject, injectable } from 'tsyringe';
import QueriesRepository from '../repositories/IQueriesRepository';

@injectable()
class ListQuerieService {
    constructor(
        @inject('QueriesRepository')
        private querieRepository: QueriesRepository,
    ) { }
    public async execute(user_querie: number) {
        const queries = await this.querieRepository.findAllQueriesFromUser(user_querie);
        return queries;
    }
}

export default ListQuerieService;
