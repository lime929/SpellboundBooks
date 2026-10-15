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
  try {
    const newQuestion = new Question({
      name,
      email,
      inquiry,
    });
    await newQuestion.save();
    res.render("thanks");
  } catch (error) {
    next(error);
  }
};
