import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { secretKey } from '../config/auth';

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {


    const authToken = request.headers.authorization;


    if (!authToken) {
        return response.status(401).end();
    }

    const [_, token] = authToken.split(' ');

    try {

        const verify = jwt.verify(token, secretKey) as IPayload

        request.user_id = verify.sub;

        return next();

    } catch (error) {

        return response.status(401).end();
    }




}