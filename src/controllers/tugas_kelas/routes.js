const express = require('express');
const router = express.Router();
const createTugas = require("./create.tugasController")



router.post("/", createTugas);


module.exports = router;