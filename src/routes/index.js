const express = require('express');
const router = express.Router();
const classRoutes = require('../controllers/classes/routes');
const userRoutes = require('../controllers/users/routes');
const sessionRoutes = require('../controllers/sessions/routes');
const materialRoutes = require('../controllers/materials/routes');
const quizRoutes = require('../controllers/quiz/routes');


router.use("/class", classRoutes);
router.use("/user", userRoutes);
router.use("/session", sessionRoutes);
router.use("/material", materialRoutes);
router.use("/quiz", quizRoutes);


module.exports = router;