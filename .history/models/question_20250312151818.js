const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: String,
  email: String,
  inquiry: String,
});

module.exports = mongoose.model("Question", questionSchema);
