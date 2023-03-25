const { books, authors } = require("../models/database");

const findBooks = (req, res) => {
  const allBooksName = books.map((book) => book.title);
  return res.json({ data: allBooksName });
};

const findAuthors = (req, res) => {
  const allAuthorsName = authors.map((author) => author.name);
  return res.json({ data: allAuthorsName });
};
const findBooksByGenre = (req, res) => {
  const genre = req.params.type;
  const filteredBooks = books
    .filter((book) => book.genre.includes(genre)) // [genre books array]
    .map((book) => book.title);
  return res.json({ data: filteredBooks });
};
const findBooksByAuthorName = (req, res) => {
  const { name } = req.params;
  const verifyAuthor = authors.filter((author) => author.name === name)[0]
    .bookName;
  return res.json({ data: verifyAuthor });
};

module.exports = {
  findBooks,
  findAuthors,
  findBooksByAuthorName,
  findBooksByGenre,
};
