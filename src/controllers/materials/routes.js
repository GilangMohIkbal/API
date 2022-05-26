const express = require('express');
const router = express.Router();

const createMaterial = require('./create.materialController');


// router.get('/',)
router.post('/', createMaterial.service);

module.exports = router;