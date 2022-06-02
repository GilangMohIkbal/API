'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class join extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Classes, join}) {
      join.belongsTo(Users);
      join.belongsTo(Classes);
    }
  }
  join.init({
    class_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
    },
    role: DataTypes.ENUM("student","tutor","fasilitator")
  }, {
    sequelize,
    modelName: 'join',
  });
  return join;
};