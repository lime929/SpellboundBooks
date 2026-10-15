"use strict";

exports.contact = (req, res) => {
  res.render("contact");
};

// exports.submitContactForm = (req, res) => {
//   res.redirect("/thanks");
// };

exports.submitContactForm = (req, res) => {
  try {
    // Process the form data here
    res.redirect("/thanks");
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).send("Internal Server Error"); // Handle error response
  }
};