"use strict";

var advertisements = [
    {
        page: "catalog",
        title: "The Psychology of Money",
        image: "images/banners/money-book.jpg",
        graphic: "images/banners/money-book-graphic.png",
        tagline: "Morgan Housel presents Timeless lessons on wealth, greed, and happiness."
    },
    {
        page: "home",
        title: "The Polaroid Book",
        image: "images/banners/polaroid-book.jpg",
        graphic: "images/banners/polaroid-book-graphic.png",
        tagline: "A collection of Polaroid photographs from the 20th century, showcasing the evolution of instant photography."
    },
    {
      page: "authors",
      title: "The Great Gatsby",
      image: "images/banners/gatsby-book.jpg",
      graphic: "images/banners/gatsby-book-graphic.png",
      tagline: "The classic novel exploring themes of wealth, love, and the American Dream in the Roaring Twenties."
    }
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