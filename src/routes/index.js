const express = require('express');
const router = express.Router();
const classRoutes = require('../controllers/classes/routes');
const userRoutes = require('../controllers/users/routes');
const sessionRoutes = require('../controllers/sessions/routes');
const materialRoutes = require('../controllers/materials/routes');
const quizRoutes = require('../controllers/quiz/routes');
const quizQuestionRoutes = require('../controllers/quiz_question/routes');
const quizAnswerRoutes = require('../controllers/quiz_answer/routes');

router.use("/class", classRoutes);
router.use("/user", userRoutes);
router.use("/session", sessionRoutes);
router.use("/material", materialRoutes);
router.use("/quiz", quizRoutes);
router.use("/quiz_question", quizQuestionRoutes);
router.use("/quiz_answer", quizAnswerRoutes);


module.exports = router;