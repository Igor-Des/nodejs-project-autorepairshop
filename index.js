import express from 'express'; // эксперсс для сервера

import mongoose from 'mongoose';

import { loginValidation, registerValidation, carCreateValidation, mechanicCreateValidation, ownerCreateValidation} from './validations.js';

import { UserController, CarController, MechanicController, OwnerController} from './controllers/index.js';

import { checkAuth, handleValidationErrors} from './utils/index.js';

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.qc2d0jn.mongodb.net/autorepair?retryWrites=true&w=majority')
    .then(() => console.log('Db start'))
    .catch((err) => console.log('Db error ', err));

const app = express();
const PORT = 3000;


app.use(express.json()); // позволит читать json для запросов

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


// CRUD FOR MECHANIC SCHEMA:
app.get('/mechanics', MechanicController.getAll);
app.get('/mechanics/:id', MechanicController.getOne);
app.post('/mechanics', checkAuth, mechanicCreateValidation, handleValidationErrors, MechanicController.create);
app.delete('/mechanics/:id', checkAuth, MechanicController.remove);
app.patch('/mechanics/:id', checkAuth, mechanicCreateValidation, handleValidationErrors, MechanicController.update);

// CRUD FOR OWNER SCHEMA:
app.get('/owners', OwnerController.getAll);
app.get('/owners/:id', OwnerController.getOne);
app.post('/owners', checkAuth, ownerCreateValidation, handleValidationErrors, OwnerController.create);
app.delete('/owners/:id', checkAuth, OwnerController.remove);
app.patch('/owners/:id', checkAuth, ownerCreateValidation, handleValidationErrors, OwnerController.update);



app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    
    console.log(`Server start on PORT ${PORT}`);
});