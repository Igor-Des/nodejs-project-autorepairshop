import mongoose from 'mongoose';

const MechanicSchema = new mongoose.Schema(
    {
    fullName: {
        type: String,
        require: true, // обязательное поле
    },
    qualification: {
        type: String,
        require: true, // обязательное поле
    },
    },
    {
    timestamps: true, // автоматически при создании юзера прикручивается дата создания и обновления юзера
    }
);

export default mongoose.model('Mechanic', MechanicSchema);