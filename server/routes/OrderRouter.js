const { Router } = require('express')
const OrderController = require('../controller/OrderController')

const router = Router()

router.get("/orders", OrderController.getOrders);

router.get("/orders/:orderId", OrderController.getOrderId);

router.post("/orders", OrderController.createOrder);

router.put("/orders/:orderId", OrderController.updateOrder);

router.delete("/orders/:orderId", OrderController.deleteOrder);

module.exports = router