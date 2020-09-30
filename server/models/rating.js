'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(`[Assocition Rating HasMany Movies]`)

      Rating.belongsTo(models.Movie, {
        foreignKey: 'moviesId'
      })
    }
  };
  Rating.init({
    moviesId: DataTypes.INTEGER,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};