import CarModel from "../models/Car";

export const create = async (req, res) => {
    try {
        const doc = new CarModel({
            brand: req.body.brand,
            color: req.body.color,
            year: req.body.year,
            VIN: req.body.VIN,
            engineNumber: req.body.engineNumber,
            owner: req.userId,
        });


        const car = await doc.save;

        res.json(car);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать машину',
        })
    }
};

export const read = (req, res) => {
    try {
        
    } catch (err) {

    }
};

export const update = (req, res) => {
    try {
        
    } catch (err) {

    }
};

export const remove = (req, res) => {
    try {
        
    } catch (err) {

    }
};