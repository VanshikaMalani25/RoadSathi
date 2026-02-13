const express = require("express");
const router = express.Router();
const ServiceRequest = require("../models/ServiceRequest");

// ================== CREATE SERVICE REQUEST ==================
router.post("/request", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const {
      name,
      email,
      phone,
      password,
      vehicleNumber,
      location,
      serviceType,
      details
    } = req.body;

    const newRequest = new ServiceRequest({
      name,
      email,
      phone,
      password,
      vehicleNumber,
      location,
      serviceType,
      details,
      status: "Pending"
    });

    await newRequest.save();

    res.status(201).json({
      success: true,
      message: "Service request submitted successfully",
      data: newRequest
    });

  } catch (error) {
    console.error("Error saving service request:", error);
    res.status(500).json({
      success: false,
      message: "Server error while saving request"
    });
  }
});


// ================== GET ALL REQUESTS ==================
router.get("/requests", async (req, res) => {
  try {
    const requests = await ServiceRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ message: "Error fetching requests" });
  }
});

module.exports = router;
