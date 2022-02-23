import { Router } from 'express';
import rescue from 'express-rescue';
import loginController from '../controllers/loginController';

const route: Router = Router();

route.post('/', rescue(loginController.login));

export default route;