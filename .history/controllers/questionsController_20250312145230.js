const express = require("express");
const router = express.Router();
const Question = require("../models/question");

exports.getAllQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.render("questions", { questions });
  } catch (error) {
    next(error);
  }
};

// exports.getQuestionPage = (req, res) => {
//   res.render("contact");
// };

exports.saveQuestion = async (req, res, next) => {
  const { name, email, question } = req.body;
  try {
    const newQuestion = new Question({
      name,
      email,
      question,
    });
    await newQuestion.save();
    res.render("thanks");
  } catch (error) {
    next(error);
  }
};

// New route to display all submissions
router.get("/data", async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.render("data", { questions });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
