import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            require: true, // обязательное поле
        },
        color: {
            type: String,
            require: true, // обязательное поле
        },
        year: {
            type: String,
            require: true,
        },
        VIN: {
            type: String,
            require: true,
        },
        engineNumber: {
            type: String,
            require: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, // по Id
            ref: 'User', // ссылается на модель Owner
            require: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Car', CarSchema);