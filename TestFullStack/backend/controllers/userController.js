const ApiError = require('../error/ApiError')
const User = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async register(req, res, next) {
        const {first_name, last_name, email, password} = req.body;
        console.log(req.body);
        if (!email || !password) {
            return next(ApiError.badRequest('Не вказаний емейл чи пароль'))
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Користувач за цим емайлом вже зареєстрований'))
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({first_name, last_name,email, password: hashPassword});
        const token = generateJwt(user.id, user.email);
        return res.json({token})
    }
    async login(req, res,next) {
        const {first_name, last_name, email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Не вказаний емейл чи пароль'))
        }
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('Користувача не найдено'))
        }
        let comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Вказаний невірний пароль'))
        }
        const token = generateJwt(user.id, user.email, user.first_name, user.last_name, user.last_name);
        return res.json({token})
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email);
        return res.json({token})
    }

}
module.exports = new UserController();