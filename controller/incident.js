const Incident = require('../models/incidents');

exports.reportIncident = async (req, res) => {
  const { type, comments, date, time, location, vehicle } = req.body;
  if (!type || !comments || !date || !time || !location || !vehicle) {
    res.status(400).end();
  } else {
    const newAccident = new Incident({
      type,
      comments,
      date,
      time,
      location,
      vehicle,
    });
    await newAccident.save();
    res.status(200).send('success');
  }
};
