const express = require("express");
const {
  findAuthors,
  findBooks,
  findBooksByAuthorName,
  findBooksByGenre,
} = require("../controllers/Book");

const app = express.Router();

app.get("/", findBooks);

app.get("/authors", findAuthors);

app.get("/genre/:type", findBooksByGenre);

app.get("/author/:name", findBooksByAuthorName);

module.exports = app;
