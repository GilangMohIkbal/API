'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz_answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Quiz_Question, Quiz_answer}) {
      Quiz_answer.belongsTo(Quiz_Question);
    }
  }
  Quiz_answer.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    quiz_question_id: DataTypes.UUID,
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Quiz_answer',
  });
  return Quiz_answer;
};