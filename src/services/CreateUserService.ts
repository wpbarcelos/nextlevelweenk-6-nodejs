import { getCustomRepository } from "typeorm";
import bcriptjs from 'bcryptjs'
import { ApplicationError } from "../error/ApplicationError";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}


export class CreateUserService {

    async execute({ name, email, password, admin }: IUserRequest) {

        if (!email) {
            throw new ApplicationError("Email is required")
        }

        if (!password) {
            throw new ApplicationError("Password is required")
        }
        if (!name) {
            throw new ApplicationError("Name is required")
        }

        const userRepo = getCustomRepository(UserRepository)

        const userAlreadyExists = await userRepo.findOne({ email })

        if (userAlreadyExists) {
            throw new ApplicationError("User already exists")
        }

        const passwordHash = await bcriptjs.hash(password, 8);

        const user = userRepo.create({ name, email, admin, password: passwordHash })

        await userRepo.save(user);

        return user;

    }
}