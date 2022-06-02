'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tugas_Kelas, Tugas}) {
      Tugas.belongsTo(Tugas_Kelas);
    }
  }
  Tugas.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    tugas_kela_id: DataTypes.UUID,
    Judul: DataTypes.STRING,
    description: DataTypes.TEXT,
    file: DataTypes.STRING,
    dateFrom: DataTypes.DATE,
    dataTo: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tugas',
  });
  return Tugas;
};