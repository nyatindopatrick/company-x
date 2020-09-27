const router = require('express').Router();
const { reportFueling } = require('../controller/fueling');

router.post('/fueling', reportFueling);

module.exports = router;
