// Import Statements
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const users = require("./routes/User");
const books = require("./routes/Book");

// Create instance of express (enable express)
const server = express();
const port = 4000;

// Db connect
mongoose
  .connect(
    "mongodb+srv://kunalr-99:Kunal2018@taskster-app.7aegm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    server.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    })
  )
  .catch((err) => console.log(`error is ${err.message}`));

//  Middlewares
server.use(cors());
server.use(express.json());
server.use("/books", books);
server.use("/users", users);
