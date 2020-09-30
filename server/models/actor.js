'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actor.belongsToMany(models.Movie, {
        through: 'IMDBMovie',
        foreignKey: 'actorId',
        otherKey:'moviesId'
      });
       
    }
  };
  Actor.init({
    name: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};