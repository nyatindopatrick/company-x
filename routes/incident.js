const router = require('express').Router();
const { reportIncident } = require('../controller/incident');

router.post('/incident', reportIncident);

module.exports = router;
