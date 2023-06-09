const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  email: { type: String, unique: true },
  password: String,
  phoneNumber: String,
});

module.exports = mongoose.model("User", userSchema);