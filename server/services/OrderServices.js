const database = require('../db/models');

const OrderServices = {
    async listOrders() {
        return await database.Orders.findAll({
            include: [{
              model: database.Product,
              as: 'products',
              required: false,
              attributes: ['id', 'name', 'flavor', 'complement'],
              through: {
                model: database.ProductOrder,
                as: 'orderProductsQtd',
                attributes: ['qtd'],
              }
            },
            {
                model: database.User,
                as: 'user',
                required: false,
                attributes: ['name'],
            }
            ]
          }
        );
    },

    async listOrderId(orderId) {
        return await database.Orders.findOne(
            {
                where: {id: orderId}, 
                include: [{
                    model: database.Product,
                    as: 'products',
                    required: false,
                    attributes: ['id', 'name', 'flavor', 'complement'],
                    through: {
                        model: database.ProductOrder,
                        as: 'orderProductsQtd',
                        attributes: ['qtd'],
                    }
                    },
                    {
                        model: database.User,
                        as: 'user',
                        required: false,
                        attributes: ['name'],
                    }
                ]
            }
        );
    },

    async listOrderProducts(orderId, productId) {
        return await database.ProductsOrders.findOne(
            {where: {order_id: orderId, product_id: productId}}
        );
    },

    async createOrder(orderData) {
        return await database.Orders.create(orderData);
    },

    async createOrderProducts(orderProductsData) {
        return await database.ProductsOrders.create(orderProductsData);
    },

    async updateOrder(orderId, orderToUpdate) {
        return await database.Orders.update(
            orderToUpdate,
            {where: {id: orderId}}
        )
    },

    async updateOrderProducts(productId, orderId, productsToUpdate) {
        return await database.ProductsOrders.update(
            productsToUpdate,
            {where: {order_id: orderId, product_id: productId}}
        )
    },

    async deleteOrderProducts(orderId) {
        return await database.ProductsOrders.destroy(
            {where: {order_id: orderId}}
        );
    },

    async deleteOrder(orderId) {
        return await database.Orders.destroy(
            {where: {id: orderId}}
        );
    },

}

module.exports = OrderServices