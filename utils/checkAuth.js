import jwt from 'jsonwebtoken';

export default (req, res, next) => {

    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, 'secret123');

            req.userId = decoded._id;

            next(); // для перехода в app.get('/auth/me) => req, res
        } catch (err) {
            return res.status(403).json({
                message: 'Нет доступа!',
            })  
        }
    } else {
        return res.status(403).json({
            message: `Нет доступа!! + ${token}`,
        })
    }

    // next(); // для перехода в app.get('/auth/me) => req, res
}