const NotFoundError = require('../common/errors/not-found.error');
const Product = require('./entities/product.entity');

module.exports = {
    async removeProduct(index) {
        const product = await this.getOneProduct(index);

        return product.remove();
    },

    createProduct(data) {
        const product = new Product(data);
        return product.save();
    },

    getAllProducts() {
        return Product.find({}, { __v: false, password: false }).exec();
    },

    async getOneProduct(id) {
        const product = await Product.findById(id);

        if (!product) {
            throw new NotFoundError(`Product with id = ${id} is not found!`);
        }

        return product;
    },

    async updateProduct(id, toUpdate) {
        const product = await this.getOneProduct(id);
        product.set(toUpdate);
        return product.save();
    },
}