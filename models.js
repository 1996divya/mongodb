const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  location_type: {
    type: String,
    required: true,
  }
  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;