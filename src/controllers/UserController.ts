import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserService } from '../services/CreateUserService';

class UserController {
    async index(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository)

        const users = await userRepository.find({});

        return response.json(users)

    }
    async store(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({ name, password, email, admin })

        return response.json(user)
    }
}

export default new UserController;