"use strict";

exports.contact = (req, res) => {
  res.render("contact");
};

exports.submitContactForm = (req, res) => {
  res.redirect("/thanks");
};
