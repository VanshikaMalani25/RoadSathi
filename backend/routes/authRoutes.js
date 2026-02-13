const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { email, phone, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({ email, phone, password });
  }

  res.json({
    success: true,
    message: "Login successful",
    userId: user._id
  });
});

module.exports = router;
