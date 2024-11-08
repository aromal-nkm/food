const express = require("express");
const CollectionTeam = require("../models/CollectionTeam");
const Donor = require("../models/Donor");
const Notification = require("../models/Notification");

const router = express.Router();

// Mark collection as completed
router.post("/complete/:donorId", async (req, res) => {
  const { donorId } = req.params;
  const { teamId } = req.body;

  try {
    const donor = await Donor.findById(donorId);
    if (!donor) return res.status(404).json({ message: "Donor not found" });

    const team = await CollectionTeam.findById(teamId);
    if (!team) return res.status(404).json({ message: "Collection Team not found" });

    donor.status = "Collected";
    donor.assignedTeam = null;
    await donor.save();

    const notification = new Notification({
      message: `Team ${team.name} has collected food from ${donor.name}`,
    });
    await notification.save();

    res.json({ message: "Food collection marked as complete" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
