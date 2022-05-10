const express = require('express');
const asyncHandler = require('express-async-handler');

const usersService = require('./users.service');

const route = express.Router();

route.delete('/:id/', asyncHandler(async (req, res) => {
    const id = req.params['id'];
    const removedUser = await usersService.removeUser(id);
    res.send(removedUser);
}))

route.post('/register', asyncHandler(async (req, res) => {
    const newUser = await usersService.createUser(req.body);
    res.status(201).send(newUser);
}))

route.post('/login', asyncHandler(async (req, res) => {
    const User = await usersService.login(req.body);
    res.status(201).send(User);
}))

route.get('/:id/', asyncHandler(async (req, res, next) => {
    const index = req.params['id'];
    const result = await usersService.getOneUser(index);
    res.send(result);
}))

route.get('/', asyncHandler(async (req, res) => {
    const result = await usersService.getAllUsers();
    res.send(result);
}))

route.patch('/:id', asyncHandler(async (req, res) => {
    const result = await usersService.updateUser(req.params['id'], req.body);
    res.send(result);
}))

module.exports = route;