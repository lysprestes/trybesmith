import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ErrorInterface from '../interfaces/errorInterface';
import productService from '../services/productService';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    const error: ErrorInterface = new Error('Token not found'); 
    error.status = 401;
    throw error;
  }
  jwt.verify(token as string, 'process.env.JWT_SECRET');
  next();
};

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.create(req.body);
  res.status(201).json(newProduct);
};

export default { validateToken, createProduct };
