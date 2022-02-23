import Joi from 'joi';

export default Joi.object({
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a string',
  }),
  username: Joi.string().required().messages({
    'any.required': 'Username is required',
    'string.base': 'Classe must be a string',
  }),
});
