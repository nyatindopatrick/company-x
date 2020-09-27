const Service = require('../models/servicing');

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
      garage,
      serviceDueDate,
      comments,
      date,
      time,
      location,
      vehicle,
      odometer,
      partsNeeded,
    });
    await newService.save();
    res.status(200).send('success');
  }
};
