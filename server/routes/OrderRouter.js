const { Router } = require('express');
const OrderController = require('../controller/OrderController');
const AuthController = require('../controller/AuthController');

const router = Router()

router.get("/orders", AuthController.auth, OrderController.getOrders);

router.get("/orders/:orderId", AuthController.auth, OrderController.getOrderId);

router.post("/orders", AuthController.auth, OrderController.createOrder);

router.put("/orders/:orderId", AuthController.auth, OrderController.updateOrder);

router.delete("/orders/:orderId", AuthController.auth, OrderController.deleteOrder);

module.exports = router