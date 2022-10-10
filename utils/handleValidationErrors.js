import { validationResult } from 'express-validator';

// функция промежуточной обработки валидации данных 
// next - следущая функция промежуточной обработки
export default (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    next();
}