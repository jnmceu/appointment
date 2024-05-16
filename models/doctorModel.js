const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    timings: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
