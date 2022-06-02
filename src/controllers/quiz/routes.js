const express = require('express');
const router = express.Router();
const createQuiz = require('./create.quizController');
const readWithQuest = require("./readWithQuest.quizController")


router.post('/', createQuiz.service);
router.get('/:id', readWithQuest.service);
router.get('/', readWithQuest.service);


module.exports = router;