import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateQuerieService from '@modules/queries/services/CreateQuerieService';
import ListQuerieService from '@modules/queries/services/ListQuerieService';
import DeleteQuerieService from '@modules/queries/services/DeleteQuerieService';

class QuerieController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { 
            user_querie, 
            title, 
            description, 
            date, 
            time,
            latitude,
            longitude
        } = request.body;
        const parsedDate = parseISO(date);

        const createQuerie = container.resolve(CreateQuerieService);

        const querie = await createQuerie.execute({
            user_querie,
            title,
            description,
            date: parsedDate,
            time,
            latitude,
            longitude
        });

        return response.json(querie);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const { user_querie } = request.headers;
        const listQuerie = container.resolve(ListQuerieService);
        const queries = await listQuerie.execute(user_querie);

        return response.json(queries);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const { user_querie } = request.headers;
        const { id } = request.params;
        const deleteQuerie = container.resolve(DeleteQuerieService);
        await deleteQuerie.execute({ user_querie, id });

        return response.json({ message: 'Querie successfully deleted' });
    }
}
export default QuerieController;
