const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const user = new User(req.body);
  const savedUser = await user.save();
  console.log(savedUser);
  res.send("user saved");
};

const signInUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function (err, user) {
    if (err) throw err;

    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: "invalid Email/Password" });
    }
    return res.json({ token: jwt.sign({ email: user.email }, "ABHIMANYU"), user:user });
    console.log(jwt.sign({ email: user.email }));
  });
};

module.exports = {
  registerUser,
  signInUser,
};
