'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Amanda",
        email: "teste1@teste",
        password: "123456",
        role: "salao",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: "Maria",
        email: "teste2@teste",
        password: "123456",
        role: "salao",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marcos",
        email: "teste3@teste",
        password: "123456",
        role: "salao",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bruno",
        email: "teste4@teste",
        password: "123456",
        role: "cozinha",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mariana",
        email: "teste5@teste",
        password: "123456",
        role: "cozinha",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marcia",
        email: "teste6@teste",
        password: "123456",
        role: "cozinha",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marcelo",
        email: "teste7@teste",
        password: "123456",
        role: "admin",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ana Clara",
        email: "teste8@teste",
        password: "123456",
        role: "admin",
        restaurant: "AckaBurger",
        createdAt:new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
