const router = require('express').Router();
const { createCheck } = require('../controller/checks');

router.post('/checks', createCheck);

module.exports = router;
