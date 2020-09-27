const { Schema, model } = require('mongoose');

const accidentSchema = new Schema({
  damageExtent: { type: String, enum: ['minor', 'major'], required: true },
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

module.exports = model('Accident', accidentSchema);
