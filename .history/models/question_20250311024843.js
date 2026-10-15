const mongoose = require("mongoose");

questionSchema = mongoose.Schema({
  name: String,
  email: String,
  question: String,
});

module.export = mongoose.model("Question", questionSchema);
