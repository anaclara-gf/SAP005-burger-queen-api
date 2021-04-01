'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Café simples',
        price: 2.5,
        flavor: null,
        complement: null,
        type: 'breakfast',
        sub_type: 'drinks',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Café com leite',
        price: 4.5,
        flavor: null,
        complement: null,
        type: 'breakfast',
        sub_type: 'drinks',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suco de laranja',
        price: 7.5,
        flavor: null,
        complement: null,
        type: 'breakfast',
        sub_type: 'drinks',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salgado',
        price: 4.5,
        flavor: null,
        complement: null,
        type: 'breakfast',
        sub_type: 'food',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pão na chapa',
        price: 5.5,
        flavor: null,
        complement: null,
        type: 'breakfast',
        sub_type: 'food',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misto quente',
        price: 10.5,
        flavor: null,
        complement: null,
        type: 'breakfast',
        sub_type: 'food',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batata-frita',
        price: 10.5,
        flavor: null,
        complement: null,
        type: 'all-day',
        sub_type: 'sider',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anéis de cebola',
        price: 10.5,
        flavor: null,
        complement: null,
        type: 'all-day',
        sub_type: 'sider',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 9.5,
        flavor: 'carne',
        complement: null,
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 9.5,
        flavor: 'frango',
        complement: null,
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 9.5,
        flavor: 'vegetariano',
        complement: null,
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 11.5,
        flavor: 'carne',
        complement: 'salada',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 11.5,
        flavor: 'frango',
        complement: 'salada',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 11.5,
        flavor: 'vegetariano',
        complement: 'salada',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 10.5,
        flavor: 'carne',
        complement: 'bacon',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 10.5,
        flavor: 'frango',
        complement: 'bacon',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger simples',
        price: 10.5,
        flavor: 'vegetariano',
        complement: 'bacon de cenoura',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 10.5,
        flavor: 'carne',
        complement: null,
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 10.5,
        flavor: 'frango',
        complement: null,
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 10.5,
        flavor: 'vegetariano',
        complement: null,
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 13.5,
        flavor: 'carne',
        complement: 'salada',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 13.5,
        flavor: 'frango',
        complement: 'salada',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 13.5,
        flavor: 'vegetariano',
        complement: 'salada',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 11.5,
        flavor: 'carne',
        complement: 'bacon',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 11.5,
        flavor: 'frango',
        complement: 'bacon',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cheeseburger duplo',
        price: 11.5,
        flavor: 'vegetariano',
        complement: 'bacon de cenoura',
        type: 'all-day',
        sub_type: 'hamburguer',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante lata',
        price: 5.5,
        flavor: 'coca-cola',
        complement: null,
        type: 'all-day',
        sub_type: 'soda',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante lata',
        price: 5.5,
        flavor: 'guaraná',
        complement: null,
        type: 'all-day',
        sub_type: 'soda',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante lata',
        price: 5.5,
        flavor: 'fanta-laranja',
        complement: null,
        type: 'all-day',
        sub_type: 'soda',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 600mL',
        price: 5.5,
        flavor: 'coca-cola',
        complement: null,
        type: 'all-day',
        sub_type: 'soda',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 600mL',
        price: 5.5,
        flavor: 'guaraná',
        complement: null,
        type: 'all-day',
        sub_type: 'soda',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 600mL',
        price: 5.5,
        flavor: 'fanta-laranja',
        complement: null,
        type: 'all-day',
        sub_type: 'soda',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água copo',
        price: 2.5,
        flavor: null,
        complement: null,
        type: 'all-day',
        sub_type: 'water',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 500mL',
        price: 3.5,
        flavor: null,
        complement: null,
        type: 'all-day',
        sub_type: 'water',
        createdAt:new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
