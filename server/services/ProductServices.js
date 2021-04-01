const database = require('../db/models')

const ProductServices = {
    async listProducts() {
        return await database.Product.findAll();
    },

    async listProductId(productId) {
        return await database.Product.findAll(
            {where: {id: productId}}
        );
    },

    async listProductName(productName) {
        return await database.Product.findAll(
            {where: {name: productName}}
        );
    },

    async createProduct(productData) {
        return await database.Product.create(productData);
    },

    async updateProduct(productId, productToUpdate) {
        return await database.Product.update(
            productToUpdate,
            {where: {id: productId}}
        );
    },

    async deleteProduct(productId) {
        return await database.Product.destroy(
            {where: {id: productId}}
        );
    },
}



module.exports = ProductServices