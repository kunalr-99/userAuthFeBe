// database.books[1].title = "the secret"

const books = [
  {
    isbm: 105,
    title: "Rich Dad, Poor Dad",
    lang: ["eng", "spa", "mar"],
    author: [1, 4],
    publication: [1],
    genre: ["motivation", "finance"],
  },
  {
    isbm: 123456,
    title: "The Secret",
    lang: ["eng", "frn", "hin"],
    author: [1, 3],
    publication: [2],
    genre: ["education", "motivation"],
  },
  {
    isbm: 115,
    title: "Magic of thinking Big",
    lang: ["eng", "ban", "urd"],
    author: [1],
    publication: [3],
    genre: ["selfgrowth", "positive"],
  },
  {
    isbm: 137,
    title: "The Avengers",
    lang: ["eng", "ger", "chn"],
    author: [4, 5],
    publication: [4],
    genre: ["fiction", "action"],
  },
];

const authors = [
  {
    id: 1,
    name: "kunal",
    bookIds: [123456, 115],
    bookName: ["The Secret", "Magic of thinking Big"],
  },
  {
    id: 2,
    name: "bhavesh",
    bookIds: [115, 137],
    bookName: ["Magic of thinking Big", "The Avengers"],
  },
  {
    id: 3,
    name: "rahul",
    bookIds: [101, 123456],
    bookName: ["Rich Dad, Poor Dad", "The Secret"],
  },
  {
    id: 4,
    name: "deva",
    bookIds: [137, 101],
    bookName: ["The Avengers", "Rich Dad, Poor Dad"],
  },
];

module.exports = {
  books,
  authors,
};
