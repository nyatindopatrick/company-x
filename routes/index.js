const router = require('express').Router();
const vehicle = require('./vehicle');
const trips = require('./trips');
const accident = require('./accident');
const incident = require('./incident');
const service = require('./service');
const fueling = require('./fueling');
const checks = require('./checks');

router.use('/', vehicle, trips, accident, incident, service, fueling, checks);

module.exports = router;
