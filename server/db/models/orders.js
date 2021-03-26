'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
      Orders.belongsToMany(models.Product, { 
        through: 'ProductsOrders', 
        as: 'products',
        foreignKey: 'order_id' 
      })
    }
  };
  Orders.init({
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
}; 