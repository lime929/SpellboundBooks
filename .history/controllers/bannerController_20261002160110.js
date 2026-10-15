"use strict";

var advertisements = [
    {
        page: "catalog",
        title: "The Psychology of Money",
        image: "images/banners/money-book.jpg",
        tagline: "Morgan Housel presents Timeless lessons on wealth, greed, and happiness."
    },
];

exports.offeredAdvertisements = advertisements;

exports.advertisements = (req, res) => {
  res.render("advertisements", { offeredAdvertisements: advertisements });
};

exports.showadvertisements = (req, res) => {
  res.render("advertisements", {
    offeredAdvertisements: advertisements,
  });
};
