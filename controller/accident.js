const Accident = require('../models/accidents');

exports.reportAccident = async (req, res) => {
  const { damageExtent, comments, date, time, location, vehicle } = req.body;
  if (!damageExtent || !comments || !date || !time || !location || !vehicle) {
    res.status(400).end();
  } else {
    const newAccident = new Accident({
      damageExtent,
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
