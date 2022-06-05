'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz_answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({quiz_answer, quiz_question}) {
      // define association here
      quiz_answer.belongsTo(quiz_question);
    }
  }
  quiz_answer.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'quiz_answer',
  });
  return quiz_answer;
};