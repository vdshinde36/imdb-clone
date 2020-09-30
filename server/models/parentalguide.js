'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParentalGuide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ParentalGuide.belongsTo(models.Movie, {
        foreignKey: 'moviesId'
      })
    }
  };
  ParentalGuide.init({
    moviesId: DataTypes.INTEGER,
    guide: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ParentalGuide',
  });
  return ParentalGuide;
};