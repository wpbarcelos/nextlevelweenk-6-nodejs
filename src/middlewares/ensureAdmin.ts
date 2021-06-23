import { Request, Response, NextFunction } from 'express'

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const admin = false;

    if (admin) {
        return next();
    }

    throw new Error('Unauthorized');
}