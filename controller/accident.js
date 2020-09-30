const Accident = require('../models/accidents');
const Vehicle = require('../models/vehicles');

exports.reportAccident = async (req, res) => {
  const { damageExtent, comments, date, time, location, vehicle } = req.body;
  const car = await Vehicle.findOne({ registrationNo: vehicle });

  if (!damageExtent || !comments || !date || !time || !location || !vehicle) {
    res.status(400).end();
  } else {
    const newAccident = new Accident({
      damageExtent: damageExtent.join(''),
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
