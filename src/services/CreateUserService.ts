import { getCustomRepository } from "typeorm";
import { ApplicationError } from "../error/ApplicationError";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}


export class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {

        if (!email) {
            throw new ApplicationError("Email is required")
        }
        if (!name) {
            throw new ApplicationError("Name is required")
        }

        const userRepo = getCustomRepository(UserRepository)

        const userAlreadyExists = await userRepo.findOne({ email })

        if (userAlreadyExists) {
            throw new ApplicationError("User already exists")
        }

        const user = userRepo.create({ name, email, admin })

        await userRepo.save(user);

        return user;

    }
}