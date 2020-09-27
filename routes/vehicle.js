const router = require('express').Router();
const {
  newVehicle,
  getAllVehicles,
  getVehicle,
} = require('../controller/vehicle');

router.post('/vehicle', newVehicle);

router.get('/vehicles', getAllVehicles);

router.get('/vehicle/:id', getVehicle);

module.exports = router;
