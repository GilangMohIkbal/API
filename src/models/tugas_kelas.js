'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tugas_Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Classes, Tugas_Kelas, Tugas,Quiz}) {
      Tugas_Kelas.belongsTo(Classes);
      Tugas_Kelas.hasMany(Tugas);
      Tugas_Kelas.hasMany(Quiz);
    }
  }
  Tugas_Kelas.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    classId: DataTypes.UUID,
    topik: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tugas_Kelas',
  });
  return Tugas_Kelas;
};