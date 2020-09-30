const Trips = require('../models/trips');

exports.startTrip = async (req, res) => {
  const { vehicle, odometer, startingPoint, date, time, location } = req.body;

  if (!vehicle || !odometer || !startingPoint || !date || !time || !location) {
    res.status(400).send('Please fill all fields!');
  } else {
    try {
      const newTrip = new Trips({
        vehicle,
        odometer,
        startingPoint,
        date,
        time,
        location,
      });
      const saved = await newTrip.save();
      res.status(200).send('Trip started successfully!');
    } catch (error) {
      res.status(500).end();
    }
  }
};

exports.endTrip = async (req, res) => {
  const { tripId, odometer, destination, date, time, location } = req.body;
  const trip = await Trips.findById(tripId);
  if (trip) {
    trip.ended = {
      status: true,
      odometer,
      destination,
      date,
      time,
      location,
    };
    await trip.save();
    res.status(200).send('Trip ended successfully!');
  }
};

exports.getTrip = async (req, res) => {
  const { vehicle } = req.params;
  const trip = await Trips.findOne({ vehicle, 'ended.status': false });
  if (trip) {
    res.status(200).send(trip);
  } else {
    res.status(400).end();
  }
};

exports.activeTrips = async (req, res) => {
  const trip = await Trips.find({ 'ended.status': false });
  if (trip.length > 0) {
    res.status(200).send(trip.vehicle.registrationNo);
  } else {
    res.status(400).end();
  }
};
