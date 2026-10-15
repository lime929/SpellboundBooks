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
    name: "Erik Larson",
    genre: "Non-Fiction",
    description:
      "Erik Larson is an American nonfiction writer known for narrative histories that blend detailed archival research with the pacing of a novel. His books often focus on pivotal historical moments and the people caught within them, bringing together politics, science, crime, and culture. Larson's engaging style makes complex historical events accessible while preserving their real-world stakes.",
  },
    {
    image: "images/authors/author6.jpg",
    name: "Gwendolyn Brooks",
    genre: "Poetry",
    description:
      "Gwendolyn Brooks was an American poet whose work captured the ordinary lives, hopes, and struggles of Black communities in Chicago. Her poems use vivid detail, rhythm, and carefully observed characters to explore family, inequality, identity, and ambition. Brooks became the first Black recipient of the Pulitzer Prize for Poetry and remains an important voice in American literature.",
  },
  {
    image: "images/authors/author7.jpg",
    name: "Maya Angelou",
    genre: "Poetry",
    description:
      "Maya Angelou was an American poet, memoirist, and civil-rights activist whose writing explored resilience, identity, family, racism, and personal freedom. Her poetry is known for its strong rhythm, direct emotional voice, and celebration of human dignity. Angelou's work, including her memoir I Know Why the Caged Bird Sings, made her one of the most widely recognized literary voices of her generation.",
  },
  {
    image: "images/authors/author8.jpg",
    name: "Ida B. Wells",
    genre: "Non-Fiction",
    description:
      "Ida B. Wells was an American journalist, educator, and civil-rights activist whose investigative reporting exposed racial violence and injustice in the United States. She documented lynching through evidence-based journalism and used her writing to advocate for civil rights, women's suffrage, and equal treatment under the law. Her courageous reporting established her as a foundational figure in investigative journalism.",
  },
    {
    image: "images/authors/author9.jpg",
    name: "Walt Whitman",
    genre: "Poetry",
    description:
      "Walt Whitman was an American poet, essayist, and journalist whose work helped redefine American poetry. His landmark collection Leaves of Grass used free verse, expansive imagery, and an everyday American voice to explore democracy, nature, the body, identity, and human connection. Whitman's bold style and belief in the value of ordinary people made him a foundational figure in modern American literature.",
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
    genre: "Mystery",
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
    name: "Nikki Giovanni",
    genre: "Poetry",
    description:
      "Nikki Giovanni is an American poet, writer, and educator whose work is known for its direct voice, energy, and emotional honesty. Her poetry explores love, Black identity, family, social justice, and everyday life. Rising to prominence during the Black Arts Movement, Giovanni has continued to write for both adults and young readers while encouraging audiences to speak openly and live with confidence.",
  },
  {
    image: "images/authors/author18.jpg",
    name: "Isabel Wilkerson",
    genre: "Non-Fiction",
    description:
      "Isabel Wilkerson is an American journalist and author whose nonfiction examines race, migration, history, and social structures in the United States. Her work combines extensive research with personal stories to show how large historical forces shape individual lives. Through books such as The Warmth of Other Suns and Caste, Wilkerson has helped bring complex subjects to a broad audience.",
  },
  {
    image: "images/authors/author19.jpg",
    name: "Mary Shelley",
    genre: "Mystery",
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
