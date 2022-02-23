import { Request, Response, NextFunction } from 'express';
import ErrorInterface from '../interfaces/errorInterface';

export default (err: ErrorInterface, req: Request, res: Response, _next: NextFunction) => {
  console.log('AQUI TA O ERRO --->', err);
  const status = err.status || 500;
  const error = err.message || 'Internal server error';
  res.status(status).json({
    error,
  });
};