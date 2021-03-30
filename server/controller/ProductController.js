const ProductServices = require('../services/ProductServices');
const { ErrorHandler } = require('../utils/error');

const ProductController = {
  async getProducts(req,res) {
    try {
      const listProducts = await ProductServices.listProducts();
      res.status(200).json(listProducts);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async getProductId(req,res,next) {
    try {
      const productId = parseInt(req.params.productId);
      const listProductId = await ProductServices.listProductId(productId);
      if(!listProductId.length){
        throw new ErrorHandler(404, "product not found!");
      }
      res.status(200).json(listProductId[0]);
    } catch (error) {
      next(error);
    }
  },

  async createProduct(req,res,next) {
    try { 
      if(Object.keys(req.body).length === 0){
        throw new ErrorHandler(400, "body is empty!");
      }
      const createdProduct = await ProductServices.createProduct(req.body);
      res.status(201).json(createdProduct);
    } catch (error) {
      next(error);
    }
  },

  async updateProduct(req,res,next) {
    try {
      if(Object.keys(req.body).length === 0){
        throw new ErrorHandler(400, "body is empty!");
      }
      const productId = parseInt(req.params.productId);
      const oldProduct = await ProductServices.listProductId(productId);
      if(!oldProduct.length){
        throw new ErrorHandler(404, "product not found!");
      }
      productToUpdate = {
        "id": productId,
        "name": req.body.name ? req.body.name : oldProduct.name,
        "flavor": req.body.flavor ? req.body.flavor : oldProduct.flavor,
        "complement": req.body.complement ? req.body.complement : oldProduct.complement,
        "price": req.body.price ? req.body.price : oldProduct.price,
        "type": req.body.type ? req.body.type : oldProduct.type,
        "sub_type": req.body.sub_type ? req.body.sub_type : oldProduct.sub_type,
      }
      await ProductServices.updateProduct(productId, productToUpdate);
      res.status(200).json(productToUpdate);
    } catch (error) {
      next(error);
    }
  },

  async deleteProduct(req,res,next) {
    try {
      const productId = parseInt(req.params.productId);
      const searchProduct = await ProductServices.listProductId(productId);
      if(!searchProduct.length){
        throw new ErrorHandler(404, "product not found!");
      }
      await ProductServices.deleteProduct(productId);
      res.status(200).json('Product was deleted successfully');
    } catch (error) {
      next(error);
    }
  },
}

module.exports = ProductController