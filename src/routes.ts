import { Router } from 'express'
import AuthController from './controllers/AuthController';
import ComplimentController from './controllers/ComplimentController';
import ListUserSenderComplimentsController from './controllers/ListUserSenderComplimentsController';
import ListUserReceiverComplimentsController from './controllers/ListUserReceiverComplimentsController';
import TagController from './controllers/TagController';
import UserController from './controllers/UserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

const routes = Router()

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/tags', ensureAuthenticate, ensureAdmin, TagController.store);
routes.get('/tags', TagController.index);

routes.post('/login', AuthController.store);

routes.post('/compliments', ensureAuthenticate, ComplimentController.store);

routes.get('/users/compliments/send', ensureAuthenticate, ListUserSenderComplimentsController.index);

routes.get('/users/compliments/receive', ensureAuthenticate, ListUserReceiverComplimentsController.index);

export { routes };