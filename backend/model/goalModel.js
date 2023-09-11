//here we define any resources we have
//define our schema which is going to be fields for this particular resource
//a variable goalSchema adn we set that with Mongoose.Schema and then we pass an object with our fields like text
//add a second argument here after your schema of an object and then you can say timestamps
const mongoose = require("mongoose");
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);
//now we will export mongoose.model and we gonna name this Goal which will take in goalSchema
module.exports = mongoose.model("Goal", goalSchema); //this exports the model so that other files can use it by using const Goal=
