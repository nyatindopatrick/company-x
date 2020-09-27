const Fueling = require('../models/fueling');

exports.reportFueling = async (req, res) => {
  const { station, liters, cost, date, time, location, vehicle } = req.body;
  if (!station || !liters || !cost || !date || !time || !location || !vehicle) {
    res.status(400).end();
  } else {
    const newFueling = new Fueling({
      station,
      liters,
      cost,
      date,
      time,
      location,
      vehicle,
    });
    await newFueling.save();
    res.status(200).send('success');
  }
};
