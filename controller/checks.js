const Check = require('../models/checks');
const Vehicle = require('../models/vehicles');

exports.createCheck = async (req, res) => {
  const { vehicle, engine, mirrors, electrical, tires, general } = req.body;
  const car = await Vehicle.findOne({ registrationNo: vehicle });

  if (!engine || !mirrors || !electrical || !tires || !general) {
    res.status(400).end();
  } else {
    const newCheck = new Check({
      engine,
      mirrors,
      electrical,
      tires,
      general,
      vehicle: car._id,
    });
    await newCheck.save();
    res.status(200).send('success!');
  }
};
