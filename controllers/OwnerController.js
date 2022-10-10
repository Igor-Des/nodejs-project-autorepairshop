import OwnerModel from "../models/Owner.js";

export const create = async (req, res) => {
    try {
        const doc = new OwnerModel({
            fullName: req.body.fullName,
            phone: req.body.phone,
        });


        const owner = await doc.save();

        res.json(owner);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать владельца',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const owners = await OwnerModel.find();

        res.json(owners);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить владельца',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const ownerId = req.params.id;

        OwnerModel.findOne(
            {
                _id: ownerId,
            }, 
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось создать владельца',
                    });
                }
                
                if (!doc) {
                    return res.status(404).json({
                        message: 'Владелец не найден',
                    });
                }

                res.json(doc);
            }
        );

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Не удалось получить владельца по ID',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const ownerId = req.params.id;

        OwnerModel.findOneAndDelete(
            {
                _id: ownerId,
            }, 
            (err, doc) => { // после того как нашли и документ был удален или не удален, была ли ошибка: 
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Не удалось удалить владельца',
                    });
                }
                
                if (!doc) { // если нет заданного ИД владельца
                    return res.status(404).json({
                        message: 'Владелец не найден',
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
            message: 'Не удалось получить владельца по ID',
        });
    }
};

export const update = async (req, res) => {
    try {
        const ownerId = req.params.id;

        await OwnerModel.updateOne({
            _id: ownerId,  
        },
        {            
            fullName: req.body.fullName,
            phone: req.body.phone,
        });

        res.json({
            success: true,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить данные владельца!',
        });
    }
};