"use strict";

var advertisements = [
    {
        page: "catalog",
        title: "The Psychology of Money",
        image: "images/banners/money-book.jpg",
        tagline: "Morgan Housel presents Timeless lessons on wealth, greed, and happiness."
    },
    // {
    //     page: "home",
    //     title: "Children's Book Sale",
    //     image: "images/banners/childrens-book.jpg",
    //     tagline: "Discover the magic of reading with our special sale on children's books!"
    // }
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

// only exports banner to certain page
exports.forPage = (page) =>
  advertisements.filter((ad) => ad.page === page);