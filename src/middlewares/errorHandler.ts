import { Request, Response, NextFunction } from 'express'
import { ApplicationError } from '../error/ApplicationError';

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {

    console.log(error instanceof ApplicationError);

    if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server error"
    })

}
