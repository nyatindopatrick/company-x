const Incident = require('../models/incidents');
const Vehicle = require('../models/vehicles');

exports.reportIncident = async (req, res) => {
  const { type, comments, date, time, location, vehicle } = req.body;
  const car = await Vehicle.findOne({ registrationNo: vehicle });

  if (!type || !comments || !date || !time || !location || !vehicle) {
    res.status(400).end();
  } else {
    const newAccident = new Incident({
      type,
      comments,
      date,
      time,
      location: JSON.stringify(location),
      vehicle: car._id,
    });
    await newAccident.save();
    res.status(200).send('success');
  }
};
