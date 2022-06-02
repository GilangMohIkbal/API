'use strict';
const {
  Model
} = require('sequelize');
// import bcryptt
const { genSaltSync, hashSync} = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, joins, presences}) {
      // define association here
        // Users.belongsToMany(Classes,{through: 'join'});
        Users.hasMany(joins);
        Users.hasMany(presences);
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true   // Automatically gets converted to SERIAL for postgres
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("user","admin"),
      defaultValue: "user"
      
    },
    password: {type : DataTypes.STRING, set(value) {
      const salt = genSaltSync(10);
      this.setDataValue('password', hashSync(value, salt));
    }}
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};