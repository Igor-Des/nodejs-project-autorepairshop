import mongoose from 'mongoose';

const OwnerSchema = new mongoose.Schema(
    {
    fullName: {
        type: String,
        require: true, // обязательное поле
    },
    phone: {
        type: String,
        require: true, // обязательное поле
    },
    },
    {
    timestamps: true, // автоматически при создании юзера прикручивается дата создания и обновления юзера
    }
);

export default mongoose.model('Owner', OwnerSchema);