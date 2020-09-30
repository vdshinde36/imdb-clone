'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // associate 1-M association with Rating
      console.log(`[Assocition Movies HasMany Rating]`)
      Movie.hasMany(models.Rating , {
        foreignKey: 'moviesId'
      });

      // associate 1-M association
      console.log(`[Assocition Movis HasMany Review]`)
      Movie.hasMany(models.Review , {
        foreignKey: 'moviesId'
      });

      // associate 1-1 association
      Movie.hasOne(models.ParentalGuide, {
        foreignKey:'moviesId',
        otherKey: 'actorId',
        onDelete: 'cascade'
      });
     // M-M association
      Movie.belongsToMany(models.Actor, {
        through: 'IMDBMovie',
        foreignKey: 'moviesId'
      });
    }
  };
  Movie.init({
    moviesId: DataTypes.STRING,
    moviesName: DataTypes.STRING,
    plot: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};