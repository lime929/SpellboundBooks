"use strict";

const bannerController = require("./bannerController");

var authors = [
  {
    image: "images/authors/author1.jpg",
    name: "Stan Lee",
    description:
      "Stan Lee was a comic book writer, editor, and publisher, best known for creating the iconic Marvel Comics superheroes Spider-Man, the X-Men, and the Avengers. He changed the world of comics by introducing personal struggles and realistic issues into the superhero universe, making them more relateable and realistic. His writing style, which had a perfect blend of realism and entertainment, made him a beloved figure among comic fans around the world. Over his long career, Lee became a cultural icon who would regularly make cameo appearances in Marvel films.",
  },
  {
    image: "images/authors/author2.jpg",
    name: "Edgar Allan Poe",
    description:
      "Edgar Allan Poe was an American writer and poet most famous for his atmospheric and dark horror pieces. Poe's writings often have themes on death, madness, and the macabre, solidifying his role as an icon of Gothic horror stories. His use of unreliable narrators and psychological issues influenced generations of writers and captured the attention of readers. Though he suffered a downfall caused by financial failures and a dark personal life, Poe's writing are still a staple of American literature.",
  },
  {
    image: "images/authors/author3.jpg",
    name: "William Shakespeare",
    description:
      "William Shakespeare was an English playwright, actor, and poet regarded as one of the greatest writers to have used the English language. His works, including tragedies Hamlet and Macbeth, have been performed and translated so much they've become known by thousands. Shakespeare's exploration of human nature and writing complex characters helped shape modern dramas and narratives. His innovative use of language, including his invention of many new words and expressions, has left a lasting impact on English literature.",
  },
  {
    image: "images/authors/author4.jpg",
    name: "Oscar Wilde",
    description:
      "Oscar Wilde was an Irish playwright, novelist, and poet who was well-known for his wit and bold personality. Wilde is most famous for his plays 'The Importance of Being Earnest' and 'An Ideal Husband', as well as his novel The Picture of Dorian Gray. Wilde was a satirist who used wit and irony to satirize the constraints of Victorian life. His outspoken and unconventional lifestyle made him both a celebrity and a controversial person.",
  },
  {
    image: "images/authors/author5.jpg",
    name: "Elijah Walter",
    description:
      "Elijah Walter is a historian and author known for his deep dives into music history, blending academic research with a more artistic interpretation of music. Specializing in jazz, his writing offers a unique perspective on the genre's origins, evolution, and cultural impact. Walter's passion for the subject is evident in his meticulous research, which highlights both the technical aspects of jazz and the cultural resonance it holds in society. His books explore the lives of iconic jazz musicians, tracing their influence on the genre and its integration into mainstream culture.",
  },
  {
    image: "images/authors/author6.jpg",
    name: "Evelyn Jones",
    description:
      "Evelyn Jones is an acclaimed poet and essayist whose work captures the beauty and struggles of everyday life. Her writing is deeply personal yet relateable to many, often reflecting on themes of self-discovery, race, and femininity. As former teacher, Monica uses her platform to encourage young women to make their voices heard in literature. Evelyn's warmth and wisdom make her a beloved figure in contemporary literature today.",
  },
  {
    image: "images/authors/author7.jpg",
    name: "Clara Davis",
    description:
      "Clara Davis is a poet whose work delves into the complexities of womanhood, aging, and the societal pressures placed upon women. Born and raised in a small town, her writing reflects her deep introspection and challenges she has with conventional expectations of femininity. Through direct and deeply personal writing, Clara captures the struggle of reconciling personal desires with the roles imposed by society. Clara's writing has impacted the lives of many women dealing with similar problems, causing her to gain recognition as a voice for women and a source of inspiration for many.",
  },
  {
    image: "images/authors/author8.jpg",
    name: "Mason Williams",
    description:
      "Mason Williams is a graphic novelist and street artist whose works include storytelling, activism, and humor. Inspired by his experiences in the Southside of Chicago, he tells stories that highlight social issues through vibrant illustrations and narratives. Mason often sketches his ideas on the go, drawing inspiration from people he meets in local spots and the streets. His love for storytelling extends beyond books, as he also collaborates on mural projects around the country.",
  },
];

exports.authors = (req, res) => {
  res.render("authors", {
    offeredAuthors: authors,
    offeredAdvertisements: bannerController.forPage("authors"),
  });
};

exports.showAuthors = (req, res) => {
  res.render("authors", {
    offeredAuthors: authors,
    offeredAdvertisements: bannerController.forPage("authors"),
  });
};
