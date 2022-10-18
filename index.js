import express from 'express'; // эксперсс для сервера

import mongoose from 'mongoose';

import { loginValidation, registerValidation, carCreateValidation} from './validations.js';

import { UserController, CarController, PaymentController} from './controllers/index.js';

import { checkAuth, handleValidationErrors} from './utils/index.js';

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.qc2d0jn.mongodb.net/autorepair?retryWrites=true&w=majority')
    .then(() => console.log('Db start'))
    .catch((err) => console.log('Db error ', err));

const app = express();
const PORT = 3000;


app.use(express.json()); // позволит читать json для запросов


app.get('/api', (req, res) => {
    res.json({
        message: "Hello from backend express.js"
    });
});



// мы делаем валидацию данных, если есть ошибки есть выводим их, если ошибок нет то выполняем логин/регу
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);


// CRUD FOR CAR SCHEMA:
// для всех(можно и без авторизации)
app.get('/cars', CarController.getAll);
app.get('/cars/:id', CarController.getOne);
// защищенные роуты для авторизованных юзеров(checkAuth) => проверка на корректные данные(carCreateValidation) =>
// если есть ошибки выводим(handleValidationErrors) => если нет ошибок выполняем CRUD
app.post('/cars', checkAuth, carCreateValidation, handleValidationErrors, CarController.create);
app.delete('/cars/:id', checkAuth, CarController.remove);
app.patch('/cars/:id', checkAuth, carCreateValidation, handleValidationErrors, CarController.update);


// CRUD FOR OWNER SCHEMA:
app.get('/users', UserController.getAll);
app.get('/users/:id', UserController.getOne);
app.post('/users', checkAuth, registerValidation, handleValidationErrors, UserController.create);
app.delete('/users/:id', checkAuth, UserController.remove);
app.patch('/users/:id', checkAuth, registerValidation, handleValidationErrors, UserController.update);


app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    
    console.log(`Server start on PORT ${PORT}`);
});