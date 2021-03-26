const { Router } = require('express')
const ProductController = require('../controller/ProductController')

const router = Router()

router.get("/products", ProductController.getProducts);

router.get("/products/:productId", ProductController.getProductId);

router.post("/products", ProductController.createProduct);

router.put("/products/:productId", ProductController.updateProduct);

router.delete("/products/:productId", ProductController.deleteProduct);

module.exports = router