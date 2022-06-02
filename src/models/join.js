'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Classes, joins}) {
      joins.belongsTo(Users);
      joins.belongsTo(Classes);
    }
  }
  joins.init({
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
    modelName: 'joins',
  });
  return joins;
};