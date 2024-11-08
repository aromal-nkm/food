const mongoose = require("mongoose");

const collectionTeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  collectionTime: { type: Date },
  donor: { type: mongoose.Schema.Types.ObjectId, ref: "Donor" },
});

module.exports = mongoose.model("CollectionTeam", collectionTeamSchema);
