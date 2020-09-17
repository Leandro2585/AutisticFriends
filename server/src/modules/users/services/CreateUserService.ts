import IUsersRepository from '../repositories/IUsersRepository';
import { injectable, inject } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
    name: string;
    email: string;
    bio: string;
    password: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) { }

    public async execute({ name, email, bio, password }: IRequest): Promise<User> {
        const checkUserExists = await this.usersRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError('Email address already used.');
        }

        const hashedPassword = await this.hashProvider.generateHash(password);
        const user = await this.usersRepository.create({
            name,
            email,
            bio,
            password: hashedPassword
        });
        return user;
    }
}

export default CreateUserService;