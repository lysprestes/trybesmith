import { Router } from 'express';
import rescue from 'express-rescue';
import userController from '../controllers/usersController';

const route: Router = Router();

route.post('/', rescue(userController.create));

export default route;