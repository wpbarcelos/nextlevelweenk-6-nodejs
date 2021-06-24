import { getCustomRepository } from "typeorm"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserRepository } from "../repositories/UserRepository"
import { secretKey } from "../config/auth"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {

        if (!email) {
            throw new Error('Email is required')
        }
        if (!password) {
            throw new Error('Password is required')
        }

        const usersRepository = getCustomRepository(UserRepository);
        const user = await usersRepository.findOne({
            email
        })

        if (!user) {
            throw new Error('Email/password incorrect');
        }

        const confirmedPassword = bcryptjs.compare(password, user.password);

        if (!confirmedPassword) {
            throw new Error('Email/password incorrect');
        }


        const token = jwt.sign({ email: user.email }, secretKey, {
            expiresIn: '1d',
            subject: user.id

        })

        return token;

    }
}