import jwt from 'jsonwebtoken'; // библиотека для регистрации токена для каждого юзера - jtw.io 
import bcrypt from 'bcrypt'; // библиотека для шифрования пароля в бэке


import UserModel from '../models/User.js'

export const register = async (req, res) => {
    try {        
        const password = req.body.password; // пароль
        const salt = await bcrypt.genSalt(10); // ключ для шифрования
        const hash = await bcrypt.hash(password, salt);


        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            role: req.body.role,
            passwordHash: hash,
        });

        const user = await doc.save(); // сохраняем юзера в бд, если нет никаких ошибок и была успешно создана модель юзера

        const token = jwt.sign({ // генерируем токен
            _id: user._id,
        },
        'secret123', // ключ по которому будет шифроваться ид юзера
        {
            expiresIn: '30d', // он перестанет быть валидным через 30 дн(срок хранения токена)
        });


        const {passwordHash, ...userData} =  user._doc // для того чтобы вернуть весь документ, кроме пассвордхэш

        res.json({
            ...userData,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось зарегистрироваться',
        })
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne( { email: req.body.email });

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            });
        }
        
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash); // проверить сходится ли пароль введеный юзерром с БД

        if (!isValidPass) {
            return res.status(404).json({
                message: 'Неверный логин или пароль',
            });
        };


        const token = jwt.sign({ // генерируем токен
            _id: user._id,
        },
        'secret123', // ключ по которому будет шифроваться ид юзера
        {
            expiresIn: '30d', // он перестанет быть валидным через 30 дн(срок хранения токена)
        });

        const {passwordHash, ...userData} =  user._doc // для того чтобы вернуть весь документ, кроме пассвордхэш

        res.json({
            ...userData,
            token,
        });


    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось авторизоваться',
        })
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }


        const {passwordHash, ...userData} =  user._doc // для того чтобы вернуть весь документ, кроме пассвордхэш

        res.json({userData});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Нет доступа',
        })
    }
};

export const create = async (req, res) => {
    try {
        const password = req.body.password; // пароль
        const salt = await bcrypt.genSalt(10); // ключ для шифрования
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            role: req.body.role,
            passwordHash: hash,
        });


        const user = await doc.save();

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать user',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const users = await UserModel.find();

        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить user',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const userId = req.params.id;

        UserModel.findOne(
            {
                _id: userId,
            }, 
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось find user',
                    });
                }
                
                if (!doc) {
                    return res.status(404).json({
                        message: 'User не найден',
                    });
                }

                res.json(doc);
            }
        );

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить user по ID',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const userId = req.params.id;

        UserModel.findOneAndDelete(
            {
                _id: userId,
            }, 
            (err, doc) => { // после того как нашли и документ был удален или не удален, была ли ошибка: 
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось удалить user',
                    });
                }
                
                if (!doc) { // если нет заданного ИД user
                    return res.status(404).json({
                        message: 'User не найден',
                    });
                }

                res.json({
                    success: true,
                });
            }
        );

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить user по ID',
        });
    }
};

export const update = async (req, res) => {
    try {
        const userId = req.params.id;

        const password = req.body.password; // пароль
        const salt = await bcrypt.genSalt(10); // ключ для шифрования
        const hash = await bcrypt.hash(password, salt);

        await UserModel.updateOne({
            _id: userId,  
        },
        {            
            email: req.body.email,
            fullName: req.body.fullName,
            role: req.body.role,
            passwordHash: hash,
        });

        res.json({
            success: true,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить данные user!',
        });
    }
};