const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  currentLocation: { type: String, required: true },
  cookedTime: { type: Date, required: true },
  expireTime: { type: Date, required: true },
  donatedAt: { type: Date, default: Date.now },
  status: { type: String, default: "Pending", enum: ["Pending", "Assigned", "Collected"] },
  assignedTeam: { type: mongoose.Schema.Types.ObjectId, ref: "CollectionTeam" },
});

module.exports = mongoose.model("Donor", donorSchema);
