import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true, // обязательное поле
        },
        email: {
            type: String,
            require: true, // обязательное поле
            unique: true, // уникальное поле(не может повторяться с другими юзерами БД)
        },
        passwordHash: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true, // автоматически при создании юзера прикручивается дата создания и обновления юзера
    }
);

export default mongoose.model('User', UserSchema);