import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userService from '../services/userService';
import UserInterface from '../interfaces/userInterface';

const createToken = (user: UserInterface) => jwt.sign(
  { user },
  'process.env.JWT_SECRET' as string,
  { expiresIn: '7d' },
);

const create = async (req: Request, res: Response) => {
  await userService.validateUser(req.body);
  await userService.create(req.body);
  res.status(201).json({ token: createToken(req.body) });
};

export default { create, createToken };
