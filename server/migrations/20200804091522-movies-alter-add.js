'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await   queryInterface.removeColumn( 'Ratings', 'moviesId');// removing movies colum
    await queryInterface.addColumn('Ratings','moviesId',Sequelize.INTEGER) //adding with altered values
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn( 'Ratings', 'moviesId', Sequelize.STRING ); //adding colum
    await   queryInterface.removeColumn( 'Ratings', 'moviesId'); // deleting column


  }
};
