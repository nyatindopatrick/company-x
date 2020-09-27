const router = require('express').Router();
const { reportAccident } = require('../controller/accident');

router.post('/accident', reportAccident);

module.exports = router;
