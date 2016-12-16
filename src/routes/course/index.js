const express = require('express');
const router = express.Router();


const independent = require("./independent");


router.use('/independent', independent);

module.exports = router;