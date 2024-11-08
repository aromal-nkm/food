const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Donor = require("../models/Donor");
const CollectionTeam = require("../models/CollectionTeam");
const Notification = require("../models/Notification");

const router = express.Router();

// Admin Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Assign Collection Team
router.put("/assign/:donorId", async (req, res) => {
  const { teamId } = req.body;
  const { donorId } = req.params;

  try {
    const donor = await Donor.findById(donorId);
    if (!donor) return res.status(404).json({ message: "Donor not found" });

    const team = await CollectionTeam.findById(teamId);
    if (!team) return res.status(404).json({ message: "Collection Team not found" });

    donor.assignedTeam = teamId;
    donor.status = "Assigned";
    await donor.save();

    const notification = new Notification({
      message: `Team ${team.name} assigned to collect food from ${donor.name}`,
    });
    await notification.save();

    res.json({ message: "Collection team assigned successfully", donor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
