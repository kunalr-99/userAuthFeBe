// Import statement
const express = require("express");
const {
  getAllUsers,
  createNewUser,
  deleteUser,
  signInUser,
} = require("../controllers/User");

// Instance creation
const app = express.Router();

// Routing
app.get("/", getAllUsers);
app.post("/register", createNewUser);
app.post("/signin", signInUser);
app.delete("/:user", deleteUser);

// Export statement
module.exports = app;
