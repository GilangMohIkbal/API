const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/controllers/materials/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

const createMaterial = require('./create.materialController');
const deleteMaterial = require('./delete.materialController');


// router.get('/',)
router.post('/', upload.array('file', 2), createMaterial.service);
router.delete('/:id', deleteMaterial.service);

module.exports = router;