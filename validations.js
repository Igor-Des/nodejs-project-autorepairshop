import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Неверный формат почты.(true: text@text.text)').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('fullName', 'Укажите имя').isLength({min: 3}),
    body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(), // если все же придет инфа об аватарке, он проверит её на ссылку
];

export const loginValidation = [
    body('email', 'Неверный формат почты.(true: text@text.text)').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
];

export const carValidation = [
    body('brand', 'Укажите Brand автомобиля').isString(),
    body('color', 'Укажите Color автомобиля').isString(),
    body('year', 'Укажите year автомобиля').isString(),
    body('VIN', 'Укажите VIN автомобиля').isLength({ min: 5 }).isString(),
    body('engineNumber', 'Укажите engineNumber автомобиля').isLength({ min: 5 }).isString(),
];