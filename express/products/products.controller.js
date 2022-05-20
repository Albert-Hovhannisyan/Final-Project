const express = require('express');
const asyncHandler = require('express-async-handler');

const productsService = require('./products.service');

const route = express.Router();

route.delete('/:id/', asyncHandler(async (req, res) => {
    const id = req.params['id'];
    const removedProduct = await productsService.removeProduct(id);
    res.send(removedProduct);
}))

route.post('/', asyncHandler(async (req, res) => {
    const newProduct = await productsService.createProduct(req.body);
    res.status(201).send(newProduct);
}))

route.get('/:id/', asyncHandler(async (req, res, next) => {
    const index = req.params['id'];
    const result = await productsService.getOneProduct(index);
    res.send(result);
}))

route.get('/', asyncHandler(async (req, res) => {
    const result = await productsService.getAllProducts();
    res.send(result);
}))

route.patch('/:id', asyncHandler(async (req, res) => {
    const result = await productsService.updateProduct(req.params['id'], req.body);
    res.send(result);
}))

module.exports = route;