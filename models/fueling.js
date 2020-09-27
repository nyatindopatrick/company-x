const { Schema, model } = require('mongoose');

const fuelingSchema = new Schema({
  station: {
    type: String,
    enum: ['Total', 'Shell', 'National Oil'],
    required: true,
  },
  liters: { type: Number, required: true },
  cost: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true,
  },
});

module.exports = model('Fueling', fuelingSchema);
