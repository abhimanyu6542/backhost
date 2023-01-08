const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
