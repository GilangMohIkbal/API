'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Classes, Sessions,Tugas_Kelas,join} ) {
      Classes.hasMany(Sessions);
      // Classes.belongsToMany(Users, {through: 'join'});
      Classes.hasMany(Tugas_Kelas);
      Classes.hasMany(join);
    }
  }
  Classes.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    file: DataTypes.STRING,
    dateFrom: DataTypes.DATEONLY,
    dateTo: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};