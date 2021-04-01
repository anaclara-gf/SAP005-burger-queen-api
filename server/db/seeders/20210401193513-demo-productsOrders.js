'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductsOrders', [
      {
        order_id: 1,
        product_id: 34,
        qtd: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        product_id: 9,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        product_id: 7,
        qtd: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 28,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 22,
        qtd: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 12,
        qtd: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 3,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 33,
        qtd: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 17,
        qtd: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 21,
        qtd: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 30,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductsOrders', null, {});
  }
};
