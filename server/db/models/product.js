'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Orders, { 
        through: 'ProductsOrders', 
        as: 'orders',
        foreignKey: 'product_id'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};