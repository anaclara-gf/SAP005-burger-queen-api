const ProductServices = require('../services/ProductServices');
const { ErrorHandler } = require('../utils/error');

const ProductController = {
  async getProducts(req,res,next) {
    try {
      const listProducts = await ProductServices.listProducts();
      res.status(200).json(listProducts);
    } catch (error) {
     next(error)
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
      if(!req.body.name || !req.body.price || !req.body.type || !req.body.sub_type){
        throw new ErrorHandler(404, "missing information");
      }
      const listProductName = await ProductServices.listProductName(req.body.name.trim());
      if(listProductName.length){
        throw new ErrorHandler(400, "there is already a product with this name!");
      }
      product = {
        "name": req.body.name.trim(),
        "flavor": req.body.flavor ? req.body.flavor.trim() : null,
        "complement": req.body.complement ? req.body.complement.trim() : null,
        "price": req.body.price.trim(),
        "type": req.body.type.trim(),
        "sub_type": req.body.sub_type.trim()
      }
      const createdProduct = await ProductServices.createProduct(product);
      res.status(201).json(createdProduct);
    } catch (error) {
      next(error);
    }
  },

  async updateProduct(req,res,next) {
    try {
      const productId = req.params.productId;
      const oldProduct = await ProductServices.listProductId(productId);
      if(!oldProduct.length){
        throw new ErrorHandler(404, "product not found!");
      }
      if(Object.keys(req.body).length === 0){
        throw new ErrorHandler(400, "body is empty!");
      }
      if(req.body.id) {
        throw new ErrorHandler(401, "id cannot be updated!");
      }
      productToUpdate = {
        "id": productId,
        "name": req.body.name ? req.body.name.trim() : oldProduct.name,
        "flavor": req.body.flavor ? req.body.flavor.trim() : oldProduct.flavor,
        "complement": req.body.complement ? req.body.complement.trim() : oldProduct.complement,
        "price": req.body.price ? req.body.price.trim() : oldProduct.price,
        "type": req.body.type ? req.body.type.trim() : oldProduct.type,
        "sub_type": req.body.sub_type ? req.body.sub_type.trim() : oldProduct.sub_type,
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