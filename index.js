import express from 'express'; // эксперсс для сервера

import mongoose from 'mongoose';

import { loginValidation, registerValidation, carCreateValidation} from './validations.js';

import checkAuth from './utils/checkAuth.js'

import * as UserController from './controllers/UserController.js';
import * as CarController from './controllers/CarController.js';

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.qc2d0jn.mongodb.net/autorepair?retryWrites=true&w=majority')
    .then(() => console.log('Db start'))
    .catch((err) => console.log('Db error ', err));

const app = express();
const PORT = 3000;


app.use(express.json()); // позволит читать json для запросов


app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);



// CRUD FOR CAR SCHEMA:

app.get('/cars', CarController.getAll);
app.get('/cars/:id', CarController.getOne);
app.post('/cars', checkAuth, carCreateValidation, CarController.create);
app.delete('/cars/:id', CarController.remove);
app.patch('/cars/:id', CarController.update);

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    
    console.log(`Server start on PORT ${PORT}`);
});