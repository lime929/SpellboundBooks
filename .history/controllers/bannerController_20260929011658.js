"use strict";

var advertisements = [
    {
        title: "The Psychology of Money",
        image: "images/money-book.jpg",
        tagline: "Morgan Housel presents Timeless lessons on wealth, greed, and happiness."
    },
];

exports.advertisements = (req, res) => {
  res.render("advertisements", { offeredAdvertisements: advertisements });
};

exports.showadvertisements = (req, res) => {
  res.render("advertisements", {
    offeredAdvertisements: advertisements,
  });
};
