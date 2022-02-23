import express from 'express';
import errorController from './controllers/errorController';

import userRoute from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/users', userRoute);

app.use('/', errorController);

export default app;
