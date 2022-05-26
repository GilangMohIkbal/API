const express = require('express');
const router = express.Router();
const createSession = require('./create.sessionController');
const validator = require("../../helpers/validator")
const { checkToken} = require("../../middlewares/jwt")
const deleteSession = require('./delete.sessionController');
const updateSession = require('./update.sessionController');
const readWithMaterial = require('./readWithMaterial.sessionController');



router.post("/", createSession.validation, validator, createSession.service);
router.delete("/:id", deleteSession.service);
router.put("/:id", updateSession.service);
router.get("/:id", readWithMaterial.service);
router.get("/", readWithMaterial.service);


module.exports = router;