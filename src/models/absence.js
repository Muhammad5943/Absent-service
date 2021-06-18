'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Absence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Absence.init({
    name: DataTypes.STRING,
    modelType: DataTypes.ENUM('adminBraketBrick', 'schoolEmployee', 'teacher'),
    modelId: DataTypes.ENUM(1,2,3),
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Absence',
  });
  return Absence;
};