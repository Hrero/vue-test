const express = require('express');
const router = express.Router();


const questionsCreate = require("./questionsCreate");


router.use('/questionsCreate', questionsCreate);

module.exports = router;