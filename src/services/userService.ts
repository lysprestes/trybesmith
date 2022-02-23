import userSchema from '../schemas/userSchema';
import userModel from '../models/userModel';
import UserInterface from '../interfaces/userInterface';
import ErrorInterface from '../interfaces/errorInterface';

const validateUser = (user: UserInterface) => {
  const { error } = userSchema.validate(user);

  if (error) {
    const err: ErrorInterface = error;
    err.status = err.message.includes('required') ? 400 : 422;
    throw err;
  }
};

const create = async (user: UserInterface) => {
  const createUser = await userModel.create(user);
  if (typeof user.level !== 'number') {
    const err: ErrorInterface = new Error('Level must be a number');
    err.status = 422;
    throw err;
  }
  return createUser;
};

export default {
  validateUser,
  create,
};
