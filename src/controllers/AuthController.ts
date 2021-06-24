import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

export class AuthController {

    async store(request: Request, response: Response) {
        const { email, password } = request.body

        const authService = new AuthenticateUserService();
        const token = await authService.execute({ email, password })

        return response.json({ token })
    }
}

export default new AuthController();