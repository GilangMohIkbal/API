const express = require('express');
const router = express.Router();
const createQuestion =require("./create.quizQuestController")
const readWithAns = require("./readWithAns.answerController")

router.post('/',createQuestion.service);
router.get('/:id',readWithAns.service);
router.get('/',readWithAns.service);


module.exports = router;