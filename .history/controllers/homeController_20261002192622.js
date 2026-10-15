const bannerController = require("./bannerController");

exports.index = (req, res) => {
  res.render("index");
};

exports.logRequestPaths = (req, res, next) => {
  console.log(`Request made to: ${req.url}`);
  next();
};

var books2 = [
  {
    image: "images/featured/featured-1.jpg",
    title: "Batman: The Legend Reborn",
    author: "Jim Lee & Frank Miller",
    genre: "Superhero Comics",
    description:
      "Dick Grayson, the original Robin, took on the title of Batman because Bruce Wayne is thought to be dead. Bruce's real son, a ten-year-old psychopath, is his sidekick. However, with crime taking on a more threatening form than usual, the city needs its heroes more than ever. The Red Hood is much more dangerous since he and his sidekick are determined to bring their twisted idea of justice to Gotham's streets and make the punishment fitting of the crime.",
    format: "Hardcover",
    price: 24.99,
    rating: 4.5,
  },
  {
    image: "images/featured/featured-2.jpg",
    title: "The Iliad",
    author: "Homer",
    genre: "Epic Poetry",
    description:
      "The Iliad is an epic poem from ancient Greece that focuses on a brief period in the Trojan War, showcasing the wrath of Achilles. It begins with a dispute between Achilles and the Greek leader Agamemnon over honor and spoils, causing Achilles to refuse to fight. Achilles' absence has huge repercussions on the Greeks as Trojan soldiers, led by Hector, push them to the brink of defeat. The death of Achilles' close friend Patroclus causes him to re-enter the conflict with a fury of vengeance. In a highly charged duel, Achilles kills Hector, setting the stage for the downfall of Troy.",
    format: "Paperback",
    price: 13.99,
    rating: 4.4,
  },
  {
    image: "images/featured/featured-3.jpg",
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description:
      "In the second book in the Lord of the Rings series, the fellowship has split and the characters are going their separate ways. Aragorn, Legolas, and Gimli are on a quest to find the abducted hobbits Merry and Pippin. Gandalf returns as Gandalf the White and helps in the fight against Sauron's growing power. The book revolves around alliances, conflicts, and the ongoing quest to destroy the One Ring.",
    format: "Paperback",
    price: 16.99,
    rating: 4.8,
  },
  {
    image: "images/featured/featured-4.jpg",
    title: "The Black Arts",
    author: "Richard Cavendish",
    genre: "Occult History",
    description:
      "This is an examination of the occult, history, and culture, covering alchemy, witchcraft, demonology, and astrology. The author examines the ways these practices have influenced civilizations throughout history, from ancient times to the present. The book examines the symbolism and psychology of occult practices and why people were drawn to them. It also explores famous occult personalities such as Aleister Crowley and how they have shaped esoteric traditions.",
    format: "Paperback",
    price: 18.99,
    rating: 4.3,
  },
];

exports.index = (req, res) => {
  res.render("index", {
    offeredBooks2: books2,
    offeredAdvertisements: bannerController.forPage("home"),
  });
};

exports.showBooks2 = (req, res) => {
  res.render("index", {
    offeredBooks2: books2,
    offeredAdvertisements: bannerController.forPage("home"),
  });
};

const bannerController = require("./bannerController");

res.render("index", {
  offeredBooks2: books2,
  offeredAdvertisements: bannerController.forPage("home"),
});