"use strict";

const bannerController = require("./bannerController");

var authors = [
  {
    image: "images/authors/author1.jpg",
    name: "Stan Lee",
    genre: "Fiction",
    description:
      "Stan Lee was a comic book writer, editor, and publisher, best known for creating the iconic Marvel Comics superheroes Spider-Man, the X-Men, and the Avengers. He changed the world of comics by introducing personal struggles and realistic issues into the superhero universe, making them more relatable and realistic. His writing style, which had a perfect blend of realism and entertainment, made him a beloved figure among comic fans around the world. Over his long career, Lee became a cultural icon who would regularly make cameo appearances in Marvel films.",
  },
  {
    image: "images/authors/author2.jpg",
    name: "Edgar Allan Poe",
    genre: "Mystery",
    description:
      "Edgar Allan Poe was an American writer and poet most famous for his atmospheric and dark horror pieces. Poe's writings often have themes of death, madness, and the macabre, solidifying his role as an icon of Gothic horror stories. His use of unreliable narrators and psychological themes influenced generations of writers and captured the attention of readers. Though he suffered financial difficulties and personal tragedy, Poe's writings remain a staple of American literature.",
  },
  {
    image: "images/authors/author3.jpg",
    name: "William Shakespeare",
    genre: "Fiction",
    description:
      "William Shakespeare was an English playwright, actor, and poet regarded as one of the greatest writers in the English language. His works, including the tragedies Hamlet and Macbeth, have been performed and translated so widely that they are known around the world. Shakespeare's exploration of human nature and complex characters helped shape modern drama and storytelling. His innovative use of language, including many new words and expressions, has left a lasting impact on English literature.",
  },
  {
    image: "images/authors/author4.jpg",
    name: "Oscar Wilde",
    genre: "Fiction",
    description:
      "Oscar Wilde was an Irish playwright, novelist, and poet who was well known for his wit and bold personality. Wilde is most famous for his plays The Importance of Being Earnest and An Ideal Husband, as well as his novel The Picture of Dorian Gray. He used wit and irony to criticize the constraints of Victorian life. His outspoken and unconventional lifestyle made him both a celebrity and a controversial figure.",
  },
  {
    image: "images/authors/author5.jpg",
    name: "Elijah Walter",
    genre: "Non-Fiction",
    description:
      "Elijah Walter is a historian and author known for his deep dives into music history, blending academic research with a more artistic interpretation of music. Specializing in jazz, his writing offers a unique perspective on the genre's origins, evolution, and cultural impact. Walter's passion for the subject is evident in his meticulous research, which highlights both the technical aspects of jazz and the cultural resonance it holds in society. His books explore the lives of iconic jazz musicians and trace their influence on the genre.",
  },
  {
    image: "images/authors/author6.jpg",
    name: "Evelyn Jones",
    genre: "Poetry",
    description:
      "Evelyn Jones is an acclaimed poet and essayist whose work captures the beauty and struggles of everyday life. Her writing is deeply personal yet relatable, often reflecting on themes of self-discovery, race, and femininity. As a former teacher, Evelyn uses her platform to encourage young women to make their voices heard in literature. Her warmth and wisdom make her a beloved figure in contemporary literature.",
  },
  {
    image: "images/authors/author7.jpg",
    name: "Clara Davis",
    genre: "Poetry",
    description:
      "Clara Davis is a poet whose work explores the complexities of womanhood, aging, and the societal pressures placed upon women. Born and raised in a small town, her writing reflects deep introspection and the challenge of conventional expectations of femininity. Through direct and deeply personal work, Clara captures the struggle of reconciling personal desires with roles imposed by society. Her writing has made her a source of recognition and inspiration for many readers.",
  },
  {
    image: "images/authors/author8.jpg",
    name: "Mason Williams",
    genre: "Fiction",
    description:
      "Mason Williams is a graphic novelist and street artist whose work combines storytelling, activism, and humor. Inspired by his experiences on the South Side of Chicago, he tells stories that highlight social issues through vibrant illustrations and narratives. Mason often sketches ideas on the go, drawing inspiration from people he meets in local spaces and on the streets. His love for storytelling also extends to mural collaborations around the country.",
  },
  {
    image: "images/authors/author9.jpg",
    name: "Maya Angelou",
    genre: "Poetry",
    description:
      "Maya Angelou was an American poet, memoirist, and civil-rights activist whose writing explored identity, resilience, racism, family, and personal freedom. Her memoir I Know Why the Caged Bird Sings introduced many readers to her powerful voice and life story. Angelou's poems are known for their emotional clarity, musical language, and celebration of strength in the face of hardship.",
  },
  {
    image: "images/authors/author10.jpg",
    name: "Agatha Christie",
    genre: "Mystery",
    description:
      "Agatha Christie was an English novelist best known for writing influential detective fiction. She created famous investigators such as Hercule Poirot and Miss Marple, whose cases combine carefully placed clues, memorable suspects, and surprising endings. Christie's novels and plays have made her one of the most widely read mystery writers in history.",
  },
  {
    image: "images/authors/author11.jpg",
    name: "Toni Morrison",
    genre: "Fiction",
    description:
      "Toni Morrison was an American novelist, editor, and essayist whose fiction examined Black American life, memory, history, family, and community. Her novels use rich language and layered storytelling to portray characters confronting both personal trauma and larger social forces. Works such as Beloved and Song of Solomon established her as one of the most significant writers of modern American literature.",
  },
  {
    image: "images/authors/author12.jpg",
    name: "Neil Gaiman",
    genre: "Fantasy",
    description:
      "Neil Gaiman is a British author known for imaginative stories that blend mythology, folklore, fantasy, and modern life. His work includes novels, comics, short stories, and screenwriting, often featuring ordinary people drawn into strange and magical worlds. Gaiman's storytelling is recognized for its dark humor, emotional depth, and inventive world-building.",
  },
  {
    image: "images/authors/author13.jpg",
    name: "James Baldwin",
    genre: "Non-Fiction",
    description:
      "James Baldwin was an American writer and social critic whose essays, novels, and plays addressed race, sexuality, religion, and inequality in the United States. His nonfiction writing combines personal experience with sharp cultural analysis and moral urgency. Baldwin remains influential because of his ability to describe difficult social realities with precision, empathy, and powerful prose.",
  },
  {
    image: "images/authors/author14.jpg",
    name: "Virginia Woolf",
    genre: "Fiction",
    description:
      "Virginia Woolf was an English novelist and essayist associated with literary modernism. Her writing often explores consciousness, time, identity, and the private thoughts of her characters. Through novels such as Mrs Dalloway and To the Lighthouse, Woolf developed innovative narrative techniques that continue to influence writers and readers.",
  },
  {
    image: "images/authors/author15.jpg",
    name: "Langston Hughes",
    genre: "Poetry",
    description:
      "Langston Hughes was an American poet, novelist, playwright, and major figure of the Harlem Renaissance. His poetry drew from jazz, blues, everyday speech, and the experiences of Black Americans. Hughes wrote with accessibility and rhythm, celebrating ordinary people while also confronting racism, inequality, and dreams of freedom.",
  },
  {
    image: "images/authors/author16.jpg",
    name: "Arthur Conan Doyle",
    genre: "Mystery",
    description:
      "Arthur Conan Doyle was a British writer best known for creating Sherlock Holmes, one of literature's most enduring fictional detectives. His Holmes stories helped establish many conventions of modern detective fiction, including close observation, logical deduction, and the partnership between detective and narrator. Doyle also wrote historical fiction, science fiction, and nonfiction.",
  },
  {
    image: "images/authors/author17.jpg",
    name: "Octavia E. Butler",
    genre: "Science Fiction",
    description:
      "Octavia E. Butler was an American science-fiction writer whose novels explored power, race, gender, survival, and social change. She used speculative worlds and future societies to examine real human conflicts and inequalities. Her work, including Kindred and the Parable series, is praised for its thought-provoking ideas and deeply human characters.",
  },
  {
    image: "images/authors/author18.jpg",
    name: "Gabriel García Márquez",
    genre: "Fiction",
    description:
      "Gabriel García Márquez was a Colombian novelist, journalist, and short-story writer known for his use of magical realism. His stories blend extraordinary events with everyday life, often exploring love, family, political conflict, and memory. One Hundred Years of Solitude is among his best-known works and helped bring Latin American literature to an international audience.",
  },
  {
    image: "images/authors/author19.jpg",
    name: "Mary Shelley",
    genre: "Horror",
    description:
      "Mary Shelley was an English novelist best known for Frankenstein, a Gothic novel that examines creation, ambition, isolation, and responsibility. The novel's story of a scientist and the being he creates has had a major influence on horror and science-fiction literature. Shelley's work continues to raise questions about the ethical consequences of scientific discovery.",
  },
  {
    image: "images/authors/author20.jpg",
    name: "Ta-Nehisi Coates",
    genre: "Non-Fiction",
    description:
      "Ta-Nehisi Coates is an American writer and journalist whose work examines history, race, politics, identity, and the lived experience of Black Americans. His essays often combine personal narrative with historical research and cultural criticism. Through books and long-form journalism, Coates has contributed prominently to contemporary discussions about inequality and social justice.",
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
