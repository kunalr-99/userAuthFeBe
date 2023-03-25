const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/*

User registration
field validation
password encryption
cookie generation
password edit

*/

const getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find();
  console.log(allUsers);
  return res.status(200).json({ data: allUsers });
};

const createNewUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUserData = {
      ...req.body,
      password: hashedPassword,
    };
    const newUser = await UserModel.create(newUserData);
    console.log(newUser);
    const token = await jwt.sign({ user: newUser }, "himajhipvtkey");
    return res.status(201).json({ data: newUser, jwToken: token });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const requiredUser = await UserModel.findOne({ email: email });
    const verifyUser = await bcrypt.compare(password, requiredUser.password);
    if (!verifyUser) {
      return res.status(400).json({ data: "No access" });
    }
    return res.status(200).json({ data: "access granted" });
  } catch (error) {
    return res.status(200).json({ data: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const requiredUser = req.params.user;
    const verifyUser = await UserModel.deleteOne({ name: requiredUser });
    return res.status(200).json({ data: verifyUser });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  signInUser,
  deleteUser,
};
