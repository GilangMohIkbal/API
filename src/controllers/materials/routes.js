const express = require('express');
const router = express.Router();

const createMaterial = require('./create.materialController');
const deleteMaterial = require('./delete.materialController');


// router.get('/',)
router.post('/', createMaterial.service);
router.delete('/:id', deleteMaterial.service);

module.exports = router;