const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "ThIS FIELD IS REQUIRED"],
    },
    password: {
      type: String,
      minLength: [8, "Password must contain atleast 8 characters"],
      required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    age: {
      type: Number,
      // required: true,
    },
    isMarried: {
      type: Boolean,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("test-user", UserSchema);

module.exports = UserModel;
