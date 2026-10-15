"use strict";

// var books = [
//   {
//     image: "images/books/book1.jpg",
//     title: "The Picture of Dorian Gray",
//     author: "Oscar Wilde",
//     description:
//       "A young man sells his soul to Lord Henry Wotton in exchange for eternal youth and beauty. Dorian Gray's body stays young, but a portrait of him ages and becomes a reminder of his evil deeds.",
//   },
//   {
//     image: "images/books/book2.jpg",
//     title: "Your Heart is the Sea",
//     author: "Catalog Thought and Nikita Gill",
//     description:
//       "A collection of poems that explore the depths and emotions of the human heart and soul in a contemporary style. Each section of the book has different themes about the process breaking to healing your heart.",
//   },
//   {
//     image: "images/books/book3.jpg",
//     title: "All The Letters I Should Have Sent",
//     author: "Rania Naim",
//     description:
//       "Rania addresses the people who influenced her life significantly in each letter, expressing both joy and heartache towards them. This is a book about healing, grieving, gratitude, and moving forward, even if the letters you wish you could have sent never leave your hands.",
//   },
//   {
//     image: "images/books/book4.jpg",
//     title: "Pic of Tasty",
//     author: "Mac Mu",
//     description:
//       "Mu showcases his stunning photography that displays the artistry of different dishes, alongside a selection of curated recipes. Through beautiful imagery and classic yet upscale recipes, it invites readers to appreciate both the visual beauty and the fun in cooking.",
//   },
//   {
//     image: "images/books/book5.jpg",
//     title: "The Puppeteer",
//     author: "Jostein Gaarder",
//     description:
//       "The Puppeteer tells the story of Jakop Jacobsen, a lonely man who entertains himself by attending strangers' funerals and sharing stories about the deceased—whether true or not. Through themes of solitude, friendship, and purpose, the novel explores Jakop's search for connection in an unconventional and thought-provoking way.",
//   },
//   {
//     image: "images/books/book6.jpg",
//     title: "Vampyres",
//     author: "Christopher Frayling",
//     description:
//       "From Eastern European folklore to the Romantics and beyond, Vampyres is an extensive and embellished history and anthology of vampires in literature.  It includes excerpts from a vast array of sources, including Angela Carter's The Bloody Chamber, which the author examines in a wider cultural context, and Bram Stoker's research notes for Dracula.",
//   },
//   {
//     image: "images/books/book7.jpg",
//     title: "Read This if You Want to Take Great Photographs",
//     author: "Henry Carroll",
//     description:
//       "A practical and inspiring guide that teaches photographers of all skill levels how to improve using professional techniques. Featuring striking images from both legendary and contemporary photographers, the book covers composition, exposure, light, and the art of seeing and feeling to help readers capture more compelling photos.",
//   },
//   {
//     image: "images/books/book8.jpg",
//     title: "Angela Carter's Book of Fairy Tales",
//     author: "Angela Carter",
//     description:
//       "A new and adult collection of tales featuring clever, rebellious, and magical women instead of traditional princesses and fairies. Filled with wit, darkness, and humor, these stories celebrate female cunning, power, and mischief, making for a modern take on classic fairy tales.",
//   },
// ];

var books = [
  {
    image: "images/books/book1.jpg",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "A young man sells his soul to Lord Henry Wotton in exchange for eternal youth and beauty. Dorian Gray's body stays young, but a portrait of him ages and becomes a reminder of his evil deeds.",
    format: "Paperback",
    price: 12.99,
    rating: 4.5,
  },
  {
    image: "images/books/book2.jpg",
    title: "Your Heart is the Sea",
    author: "Catalog Thought and Nikita Gill",
    description:
      "A collection of poems that explore the depths and emotions of the human heart and soul in a contemporary style. Each section of the book has different themes about the process breaking to healing your heart.",
    format: "Paperback",
    price: 14.99,
    rating: 4.4,
  },
  {
    image: "images/books/book3.jpg",
    title: "All The Letters I Should Have Sent",
    author: "Rania Naim",
    description:
      "Rania addresses the people who influenced her life significantly in each letter, expressing both joy and heartache towards them. This is a book about healing, grieving, gratitude, and moving forward, even if the letters you wish you could have sent never leave your hands.",
    format: "Paperback",
    price: 15.99,
    rating: 4.6,
  },
  {
    image: "images/books/book4.jpg",
    title: "Pic of Tasty",
    author: "Mac Mu",
    description:
      "Mu showcases his stunning photography that displays the artistry of different dishes, alongside a selection of curated recipes. Through beautiful imagery and classic yet upscale recipes, it invites readers to appreciate both the visual beauty and the fun in cooking.",
    format: "Hardcover",
    price: 29.99,
    rating: 4.3,
  },
  {
    image: "images/books/book5.jpg",
    title: "The Puppeteer",
    author: "Jostein Gaarder",
    description:
      "The Puppeteer tells the story of Jakop Jacobsen, a lonely man who entertains himself by attending strangers' funerals and sharing stories about the deceased—whether true or not. Through themes of solitude, friendship, and purpose, the novel explores Jakop's search for connection in an unconventional and thought-provoking way.",
    format: "Hardcover",
    price: 24.99,
    rating: 4.2,
  },
  {
    image: "images/books/book6.jpg",
    title: "Vampyres",
    author: "Christopher Frayling",
    description:
      "From Eastern European folklore to the Romantics and beyond, Vampyres is an extensive and embellished history and anthology of vampires in literature. It includes excerpts from a vast array of sources, including Angela Carter's The Bloody Chamber, which the author examines in a wider cultural context, and Bram Stoker's research notes for Dracula.",
    format: "Hardcover",
    price: 35.99,
    rating: 4.5,
  },
  {
    image: "images/books/book7.jpg",
    title: "Read This if You Want to Take Great Photographs",
    author: "Henry Carroll",
    description:
      "A practical and inspiring guide that teaches photographers of all skill levels how to improve using professional techniques. Featuring striking images from both legendary and contemporary photographers, the book covers composition, exposure, light, and the art of seeing and feeling to help readers capture more compelling photos.",
    format: "Paperback",
    price: 19.99,
    rating: 4.7,
  },
  {
    image: "images/books/book8.jpg",
    title: "Angela Carter's Book of Fairy Tales",
    author: "Angela Carter",
    description:
      "A new and adult collection of tales featuring clever, rebellious, and magical women instead of traditional princesses and fairies. Filled with wit, darkness, and humor, these stories celebrate female cunning, power, and mischief, making for a modern take on classic fairy tales.",
    format: "Paperback",
    price: 18.99,
    rating: 4.6,
  },
  {
  image: "images/books/book9.jpg",
  title: "Company of One",
  author: "Paul Jarvis",
  description:
    "Company of One explores why business growth is not always the best goal. Paul Jarvis explains how individuals and small teams can build meaningful, profitable businesses by focusing on independence, flexibility, and doing better work instead of becoming bigger.",
  format: "Hardcover",
  price: 24.99,
  rating: 4.4,
},
{
  image: "images/books/book10.jpg",
  title: "The Chronicles of Narnia",
  author: "C. S. Lewis",
  description:
    "A beloved fantasy series that follows children who enter the magical land of Narnia, where they encounter talking animals, mythical creatures, and the powerful lion Aslan. This collected edition contains all seven classic adventures.",
  format: "Hardcover",
  price: 39.99,
  rating: 4.8,
},
];

exports.catalog = (req, res) => {
  res.render("catalog", { offeredBooks: books });
};

exports.showBooks = (req, res) => {
  res.render("catalog", {
    offeredBooks: books,
  });
};
