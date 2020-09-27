const router = require('express').Router();
const { reportService } = require('../controller/service');

router.post('/service', reportService);

module.exports = router;
