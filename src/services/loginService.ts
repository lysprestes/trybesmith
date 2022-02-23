import loginSchema from '../schemas/loginSchema';
import userModel from '../models/userModel';
import { LoginInterface } from '../interfaces/loginInterface';
import ErrorInterface from '../interfaces/errorInterface';

const validateLogin = (login: LoginInterface) => {
  const { error } = loginSchema.validate(login);

  if (error) {
    const err: ErrorInterface = error;
    err.status = err.message.includes('required') ? 400 : 422;
    throw err;
  }
};

const login = async (loginData: LoginInterface) => {
  validateLogin(loginData);
  const createlogin = await userModel.find(loginData.username, loginData.password);
  console.log('CREATELOGIN --->', createlogin);
  if (!createlogin) {
    const err: ErrorInterface = new Error('Username or password invalid');
    err.status = 401;
    throw err;
  }
};

export default {
  login,
};
