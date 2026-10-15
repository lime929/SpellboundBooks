const Question = require("../models/questions");

exports.getAllQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.render("questions", { questions });
  } catch (error) {
    next(error);
  }
};

// exports.getSubscriptionPage = (req, res) => {
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
