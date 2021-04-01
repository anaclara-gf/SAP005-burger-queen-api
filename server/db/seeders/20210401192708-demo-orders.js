'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Orders', [
        {
          user_id: 1,
          client_name: 'Flávia',
          table: 2,
          status: 'pending',
          details: 'água com gás gelo e limão, hamburguer bem-passado, fritas sem sal',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          client_name: 'Adriana',
          table: 5,
          status: 'doing',
          details: 'guaraná sem gelo com laranja, hamburguer ao ponto, suco sem açúcar',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          client_name: 'Laura',
          table: 10,
          status: 'complete',
          details: 'água sem gelo, hamburguer veg com salada e bacon, coca com gelo sem limão',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
