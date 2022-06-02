'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz_Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Quiz, Quiz_Question, Quiz_answer}) {
      Quiz_Question.belongsTo(Quiz);
      Quiz_Question.hasMany(Quiz_answer);
}
  }
  Quiz_Question.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    quiz_id: DataTypes.UUID,
    question: DataTypes.TEXT,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quiz_Question',
  });
  return Quiz_Question;
};