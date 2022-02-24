import { Router } from 'express';
import rescue from 'express-rescue';
import productController from '../controllers/productController';

const route: Router = Router();

route.post('/', rescue(productController.validateToken), rescue(productController.createProduct));

route.get('/', rescue(productController.validateToken), rescue(productController.getAllProducts));

export default route;
