const User = require("../models/userModel");
const mongoose = require("mongoose");

// login user
const loginUser = async (res, req) => {
  res.json({ mssg: "login user" });
};

// signup user
const signupUser = async (res, req) => {
  const { email, password } = req.body;

  try {
    const user = User.signupUser(email, password);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "signup user" });
};

module.exports = { loginUser, signupUser };
