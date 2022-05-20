const NotFoundError = require('../common/errors/not-found.error');
const UnauthorizedError = require('../common/errors/unauthorized.error');
const User = require('./entities/users.entity');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async getOneUser(id) {
        const user = await User.findById(id);

        if (!user) {
            throw new NotFoundError(`User with id = ${id} is not found!`);
        }

        return user;
    },

    async createUser(data) {
        email = data.email
        existing = await User.findOne({email});

        if(existing){
            return "User already exists"
        }
        const user = new User(data);

        const token = jwt.sign({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        // user.token = token;
        user.save()
        return token;
    },

    getAllUsers() {
        return User.find({}, { __v: false, password: false }).exec();
    },

    async removeUser(index) {
        const user = await this.getOneUser(index);

        return user.remove();
    },

    async updateUser(id, toUpdate) {
        const user = await this.getOneUser(id);
        user.set(toUpdate);
        return user.save();
    },

    async login(data) {
        email = data.email;
        password = data.password

        const message = 'Either email or password is wrong.';

        const user = await User.findOne({ email }, { __v: false }).exec();
        if (!user) {
            throw new UnauthorizedError(message);
        }

        const result = bcrypt.compareSync(password, user.password);
        if (!result) {
            throw new UnauthorizedError(message);
        }
        
        const token = jwt.sign({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        //user.token = token;

        return [token, user.role, user.firstName];
    }
}