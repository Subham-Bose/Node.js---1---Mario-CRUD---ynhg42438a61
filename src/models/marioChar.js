const mongoose = require("mongoose");

//  Your code goes here
const marioModel = {
  name: { type: String, required: true },
  weight: { type: Number, required: true },
};

module.exports = mongoose.model("mariochar", marioModel);
