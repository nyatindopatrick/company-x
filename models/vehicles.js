const { Schema, model } = require('mongoose');

const vehicleSchema = new Schema({
  registrationNo: { type: String, required: true },
});

module.exports = model('Vehicle', vehicleSchema);
