'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class presences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({presences, Users, Sessions}) {
      presences.belongsTo(Users);
      presences.belongsTo(Sessions);
    }
  }
  presences.init({
    user_id: DataTypes.INTEGER,
    session_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'presences',
  });
  return presences;
};