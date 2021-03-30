const OrderServices = require('../services/OrderServices');
const UserServices = require('../services/UserServices');
const ProductServices = require('../services/ProductServices');
const { ErrorHandler } = require('../utils/error');

const OrderController = {
    async getOrders(req,res) {
        try {
            const listOrders = await OrderServices.listOrders();
            const listOrdersOrganized = listOrders.map(order => {
                return {
                    "order_id": order.id,
                    "employee_name": order.user.name,
                    "employee_id": order.user_id,
                    "client_name": order.client_name,
                    "table": order.table,
                    "details": order.details,
                    "status": order.status,
                    "createdAt": order.createdAt,
                    "updatedAt": order.updatedAt,
                    "products": order.products.map(product => {
                        return {
                            'id': product.id,
                            'name': product.name,
                            'flavor': product.flavor,
                            'complement': product.complement,
                            'qtd': product.orderProductsQtd.qtd
                        }
                    })
                }
            })
            res.status(200).json(listOrdersOrganized);
        } catch(error) {
            res.status(400).json(error.message);
        }
    },

    async getOrderId(req,res,next) {
        try {
            const orderId = req.params.orderId;
            const listOrderId = await OrderServices.listOrderId(orderId);
            if(!listOrderId){
                throw new ErrorHandler(404, "id not found!");
            }
            const listOrderIdOrganized = {
                "order_id": listOrderId.id,
                "employee_name": listOrderId.user.name,
                "employee_id": listOrderId.user_id,
                "client_name": listOrderId.client_name,
                "table": listOrderId.table,
                "details": listOrderId.details,
                "status": listOrderId.status,
                "createdAt": listOrderId.createdAt,
                "updatedAt": listOrderId.updatedAt,
                "products": listOrderId.products.map(product => {
                    return {
                        'id': product.id,
                        'name': product.name,
                        'flavor': product.flavor,
                        'complement': product.complement,
                        'qtd': product.orderProductsQtd.qtd
                    }
                })
            }
            res.status(200).json(listOrderIdOrganized);
        } catch(error) {
            next(error);
        }
    },

    async createOrder(req,res,next) {
        try {
            if(Object.keys(req.body).length === 0) {
                throw new ErrorHandler(400, "body is empty!");
            }
            const user = await UserServices.listUserId(req.body.user_id);
            if(!user) {
                throw new ErrorHandler(404, "user_id not found!");
            };
            const orderProducts = req.body.products;
            await Promise.all(orderProducts.map(async (product) => {
                const productsExists = await ProductServices.listProductId(product.product_id);
                if(Array.isArray(productsExists) && !productsExists.length) {
                    throw new ErrorHandler(404, "product_id not found!");
                }
            }));
            const createdOrder = await OrderServices.createOrder(req.body);
            orderProducts.forEach(product => {
                const products = {
                    'order_id': createdOrder.id,
                    'product_id': product.product_id,
                    'qtd': product.qtd
                }
                OrderServices.createOrderProducts(products);
            })
            res.status(201).json(req.body);
        } catch(error) {
            next(error);
        }
    },

    async updateOrder(req,res,next) {  
        try {
            if(Object.keys(req.body).length === 0) {
                throw new ErrorHandler(400, "body is empty!");
            }
            const orderId = parseInt(req.params.orderId);
            const orderProducts = req.body.products;
            const oldOrder = await OrderServices.listOrderId(orderId);
            if(!oldOrder){
                throw new ErrorHandler(404, "id not found!");
            }
            orderToUpdate = {
              "id": orderId,
              "client_name": req.body.client_name ? req.body.client_name : oldOrder.client_name,
              "table": req.body.table ? req.body.table : oldOrder.table,
              "user_id": req.body.user_id ? req.body.user_id : oldOrder.user_id,
              "status": req.body.status ? req.body.status : oldOrder.status,
            }
    
            if(orderProducts){
                orderProducts.forEach(async (product) => {
                    const productId = product.product_id;
                    const products = {
                        'order_id': orderId,
                        'product_id': productId,
                        'qtd': product.qtd
                    }
                    const oldOrderProduct = await OrderServices.listOrderProducts(orderId, productId);
                    productId === oldOrderProduct.product_id ? OrderServices.updateOrderProducts(productId, orderId, products) : null;
                })
            }
            await OrderServices.updateOrder(orderId, orderToUpdate);
            res.status(200).json(req.body);
        } catch (error) {
            next(error);
        }
    },

    async deleteOrder(req,res,next) {
        try {
            const orderId = parseInt(req.params.orderId);
            const orderExists = await OrderServices.listOrderId(orderId);
            if(!orderExists){
                throw new ErrorHandler(404, "id not found!");
            }
            await OrderServices.deleteOrderProducts(orderId);
            await OrderServices.deleteOrder(orderId);
            res.status(200).json('Order was deleted successfully');
        } catch (error) {
             next(error);
        }
    }
};

module.exports = OrderController