'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz_question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Quiz, quiz_question, quiz_answer}) {
      // define association here
      quiz_question.belongsTo(Quiz);
      quiz_question.hasMany(quiz_answer);

    }
  }
  quiz_question.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    question: DataTypes.TEXT,
    file: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'quiz_question',
  });
  return quiz_question;
};