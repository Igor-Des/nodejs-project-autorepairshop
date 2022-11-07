import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
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
            unique: true,
        },
        engineNumber: {
            type: String,
            require: true,
            unique: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId, // по Id
            ref: 'Owner', // ссылается на модель Owner
            require: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Payment', PaymentSchema);