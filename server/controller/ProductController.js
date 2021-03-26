const ProductServices = require('../services/ProductServices');

const ProductController = {
  async getProducts(req, res) {
    try {
      const listProducts = await ProductServices.listProducts();
      res.status(201).json(listProducts);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async getProductId(req, res) {
    const productId = parseInt(req.params.productId);
    try {
      const listProductId = await ProductServices.listProductId(productId);
      res.status(201).json(listProductId);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async createProduct(req, res) {
    const product = req.body;
    try { 
      const createdProduct = await ProductServices.createProduct(product);
      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async updateProduct(req, res) {
    const productId = parseInt(req.params.productId);
    const oldProduct = await ProductServices.listProductId(productId);
    productToUpdate = {
      "id": productId,
      "name": req.body.name ? req.body.name : oldProduct.name,
      "flavor": req.body.flavor ? req.body.flavor : oldProduct.flavor,
      "complement": req.body.complement ? req.body.complement : oldProduct.complement,
      "price": req.body.price ? req.body.price : oldProduct.price,
      "type": req.body.type ? req.body.type : oldProduct.type,
      "sub_type": req.body.sub_type ? req.body.sub_type : oldProduct.sub_type,
    }
    
    try {
      await ProductServices.updateProduct(productId, productToUpdate);
      res.status(200).json(productToUpdate);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async deleteProduct(req, res) {
    const productId = parseInt(req.params.productId);
    try {
      const deletedProduct = await ProductServices.deleteProduct(productId);
      res.status(200).json('Product was deleted successfully');
    } catch (error) {
      res.status(400).json(error)
    }
  },
}

module.exports = ProductController