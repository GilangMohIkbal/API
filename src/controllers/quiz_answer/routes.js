const express = require('express');
const router = express.Router();

const createAnswer = require('./create.quizAnsController');


router.post('/', createAnswer.service);


module.exports = router;