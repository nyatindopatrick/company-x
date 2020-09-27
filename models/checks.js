const { Schema, ObjectID } = require('mongoose');

const checkSchema = new Schema(
  {
    engine: {
      oilLevel: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      radiatorFludCap: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      clutchBrakeFluid: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      fanBelt: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      ExhaustPipe: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      fuelTank: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
    },
    electrical: {
      headlights: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      sidelights: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      indicatorAndBrake: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      numberPlateAndReverse: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
    },
    mirrors: {
      windscreen: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      sideMirrors: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      rearView: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
    },
    tires: {
      pressure: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      tread: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      spareWheel: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      jackAndSpanner: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
    },
    general: {
      firstAidKit: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      triangles: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      extinguisher: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
      radio: {
        condition: { type: String, enum: ['Good', 'Faulty'], required: true },
        comment: { type: String, required: true },
      },
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Checks', checkSchema);
