const { Router } = require('express');
const ProductController = require('../controller/ProductController');
const AuthController = require('../controller/AuthController');

const router = Router()

router.get("/products", AuthController.auth, ProductController.getProducts);

router.get("/products/:productId", AuthController.auth, ProductController.getProductId);

router.post("/products", AuthController.auth, ProductController.createProduct);

router.put("/products/:productId", AuthController.auth, ProductController.updateProduct);

router.delete("/products/:productId", AuthController.auth, ProductController.deleteProduct);

module.exports = router