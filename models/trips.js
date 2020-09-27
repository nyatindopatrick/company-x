const { Schema, model } = require('mongoose');

const tripSchema = new Schema(
  {
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true,
    },
    odometer: { type: Number, required: true },
    startingPoint: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    ended: {
      status: { type: Boolean, default: false },
      odometer: { type: Number },
      destination: { type: Number },
      date: { type: String },
      time: { type: String },
      location: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = model('Trip', tripSchema);
