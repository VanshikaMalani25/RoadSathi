const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);
