const router = require('express').Router();
const { startTrip, getTrip, endTrip } = require('../controller/trips');

router.post('/trips', startTrip);

router.get('/trip/:vehicle', getTrip);

router.put('/trip/end', endTrip)

module.exports = router;
