import jwt from 'jsonwebtoken'
import { secretKey } from '../config/auth';

import { Request, Response, NextFunction } from 'express'

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {


    const token = request.headers.authorization.replace('Bearer ', '');


    try {

        const verify = jwt.verify(token, secretKey)

        request.user_id = verify.sub;

        return next();

    } catch (error) {

        throw new Error('Unauthorized');
    }




}