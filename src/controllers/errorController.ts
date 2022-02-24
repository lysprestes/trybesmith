import { Request, Response, NextFunction } from 'express';
import ErrorInterface from '../interfaces/errorInterface';

export default (err: ErrorInterface, req: Request, res: Response, _next: NextFunction) => {
  console.log('AQUI TA O ERRO --->', err.message);
  const error = err;
  let status = error.status || 500;
  let message = error.message || 'Internal server error';
  if (message.includes('jwt')) {
    status = 401;
    message = 'Invalid token';
    console.log(error);
  }
  res.status(status).json({
    error: message,
  });
};