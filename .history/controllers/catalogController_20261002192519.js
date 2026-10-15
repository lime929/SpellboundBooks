"use strict";

const bannerController = require("./bannerController");

var books = [
  {
  image: "images/books/book1.jpg",
  title: "The Picture of Dorian Gray",
  author: "Oscar Wilde",
  genre: "Fiction",
  description:
    "A young man sells his soul to Lord Henry Wotton in exchange for eternal youth and beauty. Dorian Gray's body stays young, but a portrait of him ages and becomes a reminder of his evil deeds.",
  format: "Paperback",
  price: 12.99,
  rating: 4.5,
},
{
  image: "images/books/book2.jpg",
  title: "Your Heart is the Sea",
  author: "index Thought and Nikita Gill",
  genre: "Poetry",
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
  genre: "Poetry",
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
  genre: "Non-Fiction",
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
  genre: "Mystery",
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
  genre: "Mystery",
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
  genre: "Non-Fiction",
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
  genre: "Fiction",
  description:
    "A new and adult collection of tales featuring clever, rebellious, and magical women instead of traditional princesses and fairies. Filled with wit, darkness, and humor, these stories celebrate female cunning, power, and mischief, making for a modern take on classic fairy tales.",
  format: "Paperback",
  price: 18.99,
  rating: 4.6,
},
{
  image: "images/books/book10.jpg",
  title: "Company of One",
  author: "Paul Jarvis",
  genre: "Non-Fiction",
  description:
    "Company of One explores why business growth is not always the best goal. Paul Jarvis explains how individuals and small teams can build meaningful, profitable businesses by focusing on independence, flexibility, and doing better work instead of becoming bigger.",
  format: "Hardcover",
  price: 24.99,
  rating: 4.4,
},
{
  image: "images/books/book9.jpg",
  title: "The Chronicles of Narnia",
  author: "C. S. Lewis",
  genre: "Fiction",
  description:
    "A beloved fantasy series that follows children who enter the magical land of Narnia, where they encounter talking animals, mythical creatures, and the powerful lion Aslan. This collected edition contains all seven classic adventures.",
  format: "Hardcover",
  price: 39.99,
  rating: 4.8,
},
{
  image: "images/books/book11.jpg",
  title: "Wuthering Heights",
  author: "Emily Brontë",
  genre: "Fiction",
  description:
    "A Gothic novel centered on the intense and destructive relationship between Heathcliff and Catherine Earnshaw. Set across the Yorkshire moors, the story explores love, revenge, social class, obsession, and the lasting consequences of cruelty.",
  format: "Hardcover",
  price: 16.99,
  rating: 4.4,
},
{
  image: "images/books/book12.jpg",
  title: "The Memoirs of Sherlock Holmes",
  author: "Arthur Conan Doyle",
  genre: "Mystery",
  description:
    "A collection of classic detective stories featuring Sherlock Holmes and Dr. John Watson. Holmes applies close observation, logic, and deduction to solve unusual cases, including encounters with blackmailers, stolen documents, secret societies, and his famous rival, Professor Moriarty.",
  format: "Paperback",
  price: 13.99,
  rating: 4.6,
},
{
  image: "images/books/book13.jpg",
  title: "Being the Red Flag",
  author: "Mol Srivastava",
  genre: "Poetry",
  description:
    "A poetic collection that reflects on curiosity, identity, relationships, emotions, and self-discovery. Through personal and reflective writing, the poems encourage readers to recognize their own patterns, questions, and experiences.",
  format: "Paperback",
  price: 14.99,
  rating: 4.3,
},
{
  image: "images/books/book14.jpg",
  title: "Longfellow's Poems",
  author: "Henry Wadsworth Longfellow",
  genre: "Poetry",
  description:
    "A collection of poems by Henry Wadsworth Longfellow, one of America’s most widely read nineteenth-century poets. The volume includes lyrical, narrative, and reflective poetry that explores history, nature, love, memory, and the human experience.",
  format: "Hardcover",
  price: 18.99,
  rating: 4.5,
},
{
  image: "images/books/book15.jpg",
  title: "Misery",
  author: "Stephen King",
  genre: "Mystery",
  description:
    "A suspenseful psychological thriller about novelist Paul Sheldon, who is rescued from a car crash by Annie Wilkes, his self-proclaimed number-one fan. When Annie discovers he has ended a beloved character’s story, Paul becomes trapped in her isolated home and must find a way to survive.",
  format: "Paperback",
  price: 17.99,
  rating: 4.7,
},
{
  image: "images/books/book16.jpg",
  title: "Hüznün Lalesidir Dünya",
  author: "Nurullah Genç",
  genre: "Poetry",
  description:
    "A Turkish poetry collection by Nurullah Genç. The work uses lyrical language and imagery to explore emotion, longing, reflection, and the beauty and sadness present in everyday life.",
  format: "Paperback",
  price: 15.99,
  rating: 4.4,
},
{
  image: "images/books/book17.jpg",
  title: "Pride and Prejudice",
  author: "Jane Austen",
  genre: "Fiction",
  description:
    "A classic novel following Elizabeth Bennet as she navigates family expectations, social status, first impressions, and an evolving relationship with the proud Mr. Darcy. The story is known for its wit, romance, and critique of class and marriage in Regency England.",
  format: "Paperback",
  price: 12.99,
  rating: 4.8,
},
{
  image: "images/books/book18.jpg",
  title: "The Dead Zone",
  author: "Stephen King",
  genre: "Mystery",
  description:
    "After awakening from a long coma, Johnny Smith discovers that he has the ability to see people’s pasts and possible futures through physical contact. His gift becomes both a burden and a responsibility when he foresees a devastating future connected to an ambitious politician.",
  format: "Paperback",
  price: 18.99,
  rating: 4.5,
},
{
  image: "images/books/book19.jpg",
  title: "Beautiful Resistance",
  author: "Jon Tyson",
  genre: "Non-Fiction",
  description:
    "A book about holding onto conviction, faith, and personal integrity in a culture that often rewards compromise. Jon Tyson encourages readers to form meaningful values, practice courage, and live with purpose in the face of pressure and uncertainty.",
  format: "Hardcover",
  price: 22.99,
  rating: 4.3,
},
{
  image: "images/books/book20.jpg",
  title: "Sculpture: From Antiquity to the Middle Ages",
  author: "Taschen",
  genre: "Non-Fiction",
  description:
    "An art-history volume that surveys sculpture from ancient civilizations through the Middle Ages. It highlights major works, materials, artistic traditions, and cultural contexts while showing how sculptural forms changed across regions and historical periods.",
  format: "Hardcover",
  price: 34.99,
  rating: 4.4,
},
];

exports.index = (req, res) => {
  res.render("index", {
    offeredBooks: books,
    offeredAdvertisements: bannerController.forPage("index"),
  });
};

exports.showBooks = (req, res) => {
  res.render("index", {
    offeredBooks: books,
    offeredAdvertisements: bannerController.forPage("index"),
  });
};
