const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  book: String,
  author: String,
  question: String,
});

module.exports = mongoose.model("Question", questionSchema);
