const { Schema, model } = require('mongoose');

const servicingSchema = new Schema({
  odometer: { type: String, required: true },
  serviceDueDate: { type: Date, required: true },
  garage: {
    type: String,
    required: true,
  },
  partsNeeded: { type: Array, required: true },
  comments: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true,
  },
});

module.exports = model('Service', servicingSchema);
