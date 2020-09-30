const Service = require('../models/servicing');
const Vehicle = require('../models/vehicles');

exports.reportService = async (req, res) => {
  const {
    garage,
    serviceDueDate,
    comments,
    date,
    time,
    location,
    vehicle,
    odometer,
    partsNeeded,
  } = req.body;
  const car = await Vehicle.findOne({ registrationNo: vehicle });

  if (
    !odometer ||
    !garage ||
    !serviceDueDate ||
    !comments ||
    !date ||
    !time ||
    !location ||
    !vehicle ||
    !partsNeeded
  ) {
    res.status(400).end();
  } else {
    const newService = new Service({
      garage: garage.join(''),
      serviceDueDate,
      comments,
      date,
      time,
      location: JSON.stringify(location),
      vehicle: car._id,
      odometer,
      partsNeeded,
    });
    await newService.save();
    res.status(200).send('success');
  }
};
