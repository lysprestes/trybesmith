import express from 'express';
import errorController from './controllers/errorController';

import userRoute from './routes/userRoute';
import loginRoute from './routes/loginRoute';
import productRoute from './routes/productRoute';

const app = express();

app.use(express.json());

app.use('/users', userRoute);

app.use('/login', loginRoute);

app.use('/products', productRoute);

app.use('/', errorController);

export default app;
