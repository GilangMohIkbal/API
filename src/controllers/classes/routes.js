const express = require('express');
const router = express.Router();
const createClass = require('./create.classController');
const updateClass = require("./update.classController")
const deleteClass = require("./delete.classController")
const readClass = require("./read.classController")
const validator = require("../../helpers/validator")
const readWithSessions = require("./readWithSession.classController");
const { checkToken } = require("../../middlewares/jwt")
// const { checkRole } = require("../../middlewares/role")
const readUser = require("./readUser.classController");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/class')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });



router.post('/', upload.array('file'), checkToken, createClass.validation, validator, createClass.service);
router.put('/:id',updateClass.service);
router.delete('/:id',deleteClass.service);
router.get('/sessions/:id',readWithSessions.service);
router.get('/sessions',readWithSessions.service);
router.get('/user/:id',readUser.service);
router.get('/user',readUser.service);
router.get('/:id',readClass.service);
router.get('/',readClass.service);



module.exports = router;