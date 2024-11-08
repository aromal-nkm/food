const express = require("express");
const Donor = require("../models/Donor");

const router = express.Router();

// Add a donation
router.post("/donate", async (req, res) => {
  const { name, contactNumber, currentLocation, cookedTime, expireTime } = req.body;

  try {
    const donor = new Donor({ name, contactNumber, currentLocation, cookedTime, expireTime });
    await donor.save();
    res.status(201).json({ message: "Food donated successfully", donor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
