const { Schema, model } = require('mongoose');

const checkSchema = new Schema(
  {
    tripDate: { type: String, required: true },
    engine: {
      oilLevel: { type: String, required: true },

      radiatorFludCap: { type: String, required: true },

      clutchBrakeFluid: { type: String, required: true },

      fanBelt: { type: String, required: true },

      ExhaustPipe: { type: String, required: true },

      fuelTank: { type: String, required: true },
    },
    electrical: {
      headlights: { type: String, required: true },

      sidelights: { type: String, required: true },

      indicatorAndBrake: { type: String, required: true },

      numberPlateAndReverse: { type: String, required: true },
    },
    mirrors: {
      windscreen: { type: String, required: true },

      sideMirrors: { type: String, required: true },

      rearView: { type: String, required: true },
    },
    tires: {
      pressure: { type: String, required: true },

      tread: { type: String, required: true },

      spareWheel: { type: String, required: true },

      jackAndSpanner: { type: String, required: true },
    },
    general: {
      firstAidKit: { type: String, required: true },

      triangles: { type: String, required: true },

      extinguisher: { type: String, required: true },

      radio: { type: String, required: true },
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
