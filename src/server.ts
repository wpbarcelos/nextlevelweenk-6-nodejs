import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'

import { routes } from './routes'
import './database'
import { ApplicationError } from './error/ApplicationError';


const app = express();

app.use(express.json())
app.use(routes)


app.use((error: any, req: Request, res: Response, next: NextFunction) => {

    console.log(error instanceof ApplicationError);

    if (error instanceof ApplicationError) {
        return res.status(400).json({ error: error.message })
    }

    if (error) {
        return res.status(400).json({ error: error.message })
    }
})


app.listen(3333, () => console.log("Server is running"));
