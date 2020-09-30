const router = require('express').Router();
const {
  startTrip,
  getTrip,
  endTrip,
  activeTrips,
} = require('../controller/trips');

router.post('/trips', startTrip);

router.get('/trip/:vehicle', getTrip);

router.put('/trip/end', endTrip);

router.get('/trips/active', activeTrips);

module.exports = router;
