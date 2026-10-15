"use strict";

exports.community = (req, res) => {
  res.render("community", { communityReviews: reviews });
};

const reviews = [
  {
    user: "Peter Anderson",
    book: "The Picture of Dorian Gray By Oscar Wilde",
    image: "images/books/book1.jpg",
    review:
      "The Picture of Dorian Gray is a study of vanity, moral degeneration, and the outcome of unchecked morality. The novel's prose is impressive, with Wilde's trademark of wit and philosophical themes being present; although occasionally the dialogue is overly self-indulgent. Dorian's descent into depravity works nicely, but the supporting cast, particularly the women, are underdeveloped and only serve the plot. While his portrait ages Dorian remaining young, this is a lovely metaphor for hidden vices, but the ending, feels a bit rushed.",
  },
  {
    user: "Annabelle Martin",
    book: "Angela Carter's Book of Fairy Tales By Angela Carter",
    image: "images/books/book8.jpg",
    review:
      "Angela Carter's Book of Fairy Tales is a captivating collection that breathes new life into old fairytales with her own unique dark and subversive voice. The stories contain vivid descriptions and wit, having themes of underlying violence and gender politics embedded within these traditional fairy tales. Although Carter's readings are provocative and beautifully written, some would find the rushed, disconnected nature of certain stories less charming compared to the original tales. The best thing about the collection is its ability to subvert traditional storytelling, containing heroines who resist conventional expectations and narratives. It is a compelling anthology that demonstrates Carter's strong ability to rework well-known stories into something bold and modern.",
  },
  {
    user: "Charlie Johnson",
    book: "Vampyres by Christopher Frayling",
    image: "images/books/book6.jpg",
    review:
      "Christopher Frayling's Vampyres is a thoroughly researched exploration of the vampire myth in literature, film, and culture. The book details the development of the vampire from its origins in folklore to its gothic and cinematic portrayals accompanied by an expert level historical and literary analysis. Frayling writes at a highly academic level, which makes it so some sections of dense detail will intimidate some readers. The inclusion of illustrations, movie stills, and literary quotes makes the book an even more comprehensive and engaging experience.",
  },
  {
    user: "Diana Mendoza",
    book: "Read This If You Want to Take Great Photographs by Henry Carroll",
    image: "images/books/book7.jpg",
    review:
      "Henry Carroll's book is a clear, image-filled guide that aims to simplify basic photography concepts to the fundamentals. Using plain language and clear example pictures, Carroll makes concepts like composition, lighting, and exposure easier to understand without making them too simplistic. With its helpful advice and creative recommendations, the book is particularly useful for beginners, meaning more experienced photographers may find it somewhat simplistic. Its layout is clean and visually appealing, making it easy to look through and absorb the main points at a glance. Overall, this is an inspiring and easy-to-use book that encourages experimentation and the development of photography skills for beginners.",
  },
  {
  user: "Emily Parker",
  book: "Your Heart is the Sea by Catalog Thought and Nikita Gill",
  image: "images/books/book2.jpg",
  review:
    "Your Heart is the Sea is a thoughtful collection that captures the emotions of heartbreak, healing, and learning to move forward. I enjoyed how the poems made personal feelings seem relatable without needing long explanations. Some sections felt repetitive, but the gentle tone made this a comforting book to return to. I would recommend it to readers who enjoy reflective poetry about relationships and self-discovery.",
},
{
  user: "Marcus Williams",
  book: "All The Letters I Should Have Sent by Rania Naim",
  image: "images/books/book3.jpg",
  review:
    "All The Letters I Should Have Sent feels like reading the words someone finally found the courage to say. The reflections on gratitude, grief, and letting go were the strongest parts for me. I liked being able to read a few letters at a time rather than rushing through the entire collection. Although some passages explored similar emotions, the personal style made the book feel sincere and comforting.",
},
{
  user: "Sophia Chen",
  book: "Pic of Tasty by Mac Mu",
  image: "images/books/book4.jpg",
  review:
    "Pic of Tasty caught my attention with its beautiful food photography, and the recipes gave me another reason to keep browsing. I enjoyed the way the book presents food as something creative rather than just a finished meal. The photographs inspired me to think more carefully about plating and presentation in my own kitchen. I would have liked more everyday recipe options, but it was still an enjoyable book for someone who loves both cooking and photography.",
},
{
  user: "Daniel Brooks",
  book: "The Puppeteer by Jostein Gaarder",
  image: "images/books/book5.jpg",
  review:
    "The Puppeteer has an unusual premise that made me curious about Jakop Jacobsen from the beginning. His habit of attending strangers' funerals creates an interesting way to explore loneliness and the stories people tell to feel connected. I enjoyed the reflective parts of the novel, although the slower pace sometimes made it difficult to stay fully engaged. It is a good choice for readers who prefer thoughtful characters and questions about human connection over a fast-moving plot.",
},
{
  user: "Olivia Ramirez",
  book: "Company of One by Paul Jarvis",
  image: "images/books/book10.jpg",
  review:
    "Company of One offers a refreshing perspective on success by questioning whether a business always needs to get bigger. I appreciated its focus on independence, flexibility, and doing meaningful work rather than constantly chasing growth. The ideas encouraged me to think about what I would actually want from running a business. Some points felt repetitive, but the overall message was useful and especially appealing to someone interested in working independently.",
},
{
  user: "James Thompson",
  book: "The Chronicles of Narnia by C. S. Lewis",
  image: "images/books/book9.jpg",
  review:
    "The Chronicles of Narnia is an imaginative collection filled with memorable creatures, magical places, and adventures that are easy to get absorbed in. I especially enjoyed the sense of discovery as the children entered a world so different from their own. Having all seven adventures together made it enjoyable to explore more of Narnia beyond a single story. Some adventures held my attention more than others, but the collection remained a charming escape that I would happily revisit.",
}
];

exports.reviews = (req, res) => {
  res.render("community", { communityReviews: reviews });
};

exports.showReviews = (req, res) => {
  res.render("community", {
    communityReviews: reviews,
  });
};
