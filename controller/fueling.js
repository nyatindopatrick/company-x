const Fueling = require('../models/fueling');
const Vehicle = require('../models/vehicles');

exports.reportFueling = async (req, res) => {
  const { station, liters, cost, date, time, location, vehicle } = req.body;

  const car = await Vehicle.findOne({ registrationNo: vehicle });
  if (!station || !liters || !cost || !date || !time || !location || !vehicle) {
    res.status(400).end();
  } else {
    const newFueling = new Fueling({
      station: station.join(''),
      liters,
      cost,
      date,
      time,
      location: JSON.stringify(location),
      vehicle: car._id,
    });
    await newFueling.save();
    res.status(200).send('success');
  }
};
