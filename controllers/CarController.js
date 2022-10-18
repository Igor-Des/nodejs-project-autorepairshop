import { application } from "express";
import CarModel from "../models/Car.js";

export const create = async (req, res) => {
    try {

        const doc = new CarModel({
            brand: req.body.brand,
            color: req.body.color,
            year: req.body.year,
            VIN: req.body.VIN,
            engineNumber: req.body.engineNumber,
            user: req.body.userId
        });


        const car = await doc.save();

        res.json(car);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать машину',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const cars = await CarModel.find().populate('user').exec();

        res.json(cars);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить машины',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const carId = req.params.id;

        CarModel.findOne(
            {
                _id: carId,
            }, 
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось создать машину',
                    });
                }
                
                if (!doc) {
                    return res.status(404).json({
                        message: 'Машина не найдена',
                    });
                }

                res.json(doc);
            }
        );

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить машину по ID',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const carId = req.params.id;

        CarModel.findOneAndDelete(
            {
                _id: carId,
            }, 
            (err, doc) => { // после того как нашли и документ был удален или не удален, была ли ошибка: 
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось удалить машину',
                    });
                }
                
                if (!doc) { // если нет заданного ИД машины
                    return res.status(404).json({
                        message: 'Машина не найдена',
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
            message: 'Не удалось получить машину по ID',
        });
    }
};

export const update = async (req, res) => {
    try {
        const carId = req.params.id;

        await CarModel.updateOne({
            _id: carId,  
        },
        {
            brand: req.body.brand,
            color: req.body.color,
            year: req.body.year,
            VIN: req.body.VIN,
            engineNumber: req.body.engineNumber,
            user: req.userId,
        });

        res.json({
            success: true,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить данные машины!',
        });
    }
};