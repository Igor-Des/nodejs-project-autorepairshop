import MechanicModel from "../models/Mechanic.js";

export const create = async (req, res) => {
    try {
        const doc = new MechanicModel({
            fullName: req.body.fullName,
            qualification: req.body.qualification,
        });


        const mechanic = await doc.save();

        res.json(mechanic);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать механика',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const mechanics = await MechanicModel.find();

        res.json(mechanics);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить механика',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const mechanicId = req.params.id;

        MechanicModel.findOne(
            {
                _id: mechanicId,
            }, 
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось создать механика',
                    });
                }
                
                if (!doc) {
                    return res.status(404).json({
                        message: 'Механик не найден',
                    });
                }

                res.json(doc);
            }
        );

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить механика по ID',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const mechanicId = req.params.id;

        MechanicModel.findOneAndDelete(
            {
                _id: mechanicId,
            }, 
            (err, doc) => { // после того как нашли и документ был удален или не удален, была ли ошибка: 
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось удалить механика',
                    });
                }
                
                if (!doc) { // если нет заданного ИД механика
                    return res.status(404).json({
                        message: 'Механик не найден',
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
            message: 'Не удалось получить механика по ID',
        });
    }
};

export const update = async (req, res) => {
    try {
        const mechanicId = req.params.id;

        await MechanicModel.updateOne({
            _id: mechanicId,  
        },
        {            
            fullName: req.body.fullName,
            qualification: req.body.qualification,
        });

        res.json({
            success: true,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить данные механика!',
        });
    }
};