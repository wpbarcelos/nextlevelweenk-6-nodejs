import { Router } from 'express'
import AuthController from './controllers/AuthController';
import ComplimentController from './controllers/ComplimentController';
import TagController from './controllers/TagController';
import UserController from './controllers/UserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const routes = Router()

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/tags', ensureAdmin, TagController.store);
routes.get('/tags', TagController.index);

routes.post('/login', AuthController.store);

routes.post('/compliments', ComplimentController.store);

export { routes };