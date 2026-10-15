"use strict";

var advertisements [
    {}
]

exports.advertisements = (req, res) => {
  res.render("advertisements", { offeredadvertisements: advertisements });
};

exports.showadvertisements = (req, res) => {
  res.render("advertisements", {
    offeredadvertisements: advertisements,
  });
};
