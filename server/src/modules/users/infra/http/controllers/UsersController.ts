import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';

class UsersController {
    public async create(request: Request, response: Response) {
        const { name, email, bio, password } = request.body;
        const createUser = container.resolve(CreateUserService);
        const user = await createUser.execute({
            name,
            email,
            bio,
            password
        });
        delete user.password;
        return response.json(user);
    }
}
export default UsersController;