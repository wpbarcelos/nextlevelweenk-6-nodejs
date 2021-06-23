import { Router } from 'express'
import TagController from './controllers/TagController';
import UserController from './controllers/UserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const routes = Router()

routes.post('/users', UserController.store);

routes.post('/tags', ensureAdmin, TagController.store);

export { routes };