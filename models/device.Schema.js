const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeviceSchema = new Schema(
  {
    browser: {
      type: String,
    },
    cpu: {
      type: String,
    },
    device: {
      type: String,
    },
    engine: {
      type: String,
    },
    os: {
      type: String,
    },
    ua: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", DeviceSchema);
