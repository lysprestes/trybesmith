import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import loginService from '../services/loginService';
import { LoginInterface } from '../interfaces/loginInterface';

const createToken = (login: LoginInterface) => jwt.sign(
  { login },
  'process.env.JWT_SECRET' as string,
  { expiresIn: '7d' },
);

const login = async (req: Request, res: Response) => {
  await loginService.login(req.body);
  res.status(200).json({ token: createToken(req.body) });
};

export default { login };
