const Vehicle = require('../models/vehicles');

exports.newVehicle = async (req, res) => {
  const { registrationNo } = req.body;
  if (!registrationNo) {
    res.status(400).send('missing registration Number!');
  } else {
    const newVehicle = new Vehicle({
      registrationNo,
    });
    const car = await newVehicle.save();
    res.status(200).send(`${car.registrationNo} registered successfully!`);
  }
  res.status(500).send('Server error!');
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.status(200).send(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVehicle = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Vehicle.findOne({ registrationNo: id });
    if (car) {
      res.status(200).send(car);
    } else {
      res.status(400).end();
    }
  } catch (error) {
    res.status(400).end();
  }
};
