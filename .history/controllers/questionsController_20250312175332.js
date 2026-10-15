const Question = require("../models/question");

exports.getAllQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.render("questions", { questions });
  } catch (error) {
    next(error);
  }
};

exports.getQuestionPage = (req, res) => {
  res.render("contact");
};

exports.saveQuestion = async (req, res, next) => {
  const { name, email, inquiry } = req.body;
  console.log("Request body:", req.body);
  try {
    const newQuestion = new Question({
      name,
      email,
      inquiry,
    });
    console.log("New question created:", newQuestion);
    await newQuestion.save();
    res.render("question");
  } catch (error) {
    next(error);
  }
};

// Ensure this file exports correctly
module.exports = exports;
