const express = require('express');
const router = express.Router();
const createQuiz = require('./create.quizController');


router.post('/', createQuiz.service);



module.exports = router;