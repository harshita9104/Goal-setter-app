const mongoose = require("mongoose");
//declare an arrow function which is asynchronus , as all mongoose methods are asynchronus ,they return promise, here using try catch, in try we are going to connect so we will create a variable and then we are going to await on Mongoose and then there is a function called connect and this takes in our mongo URI which we can get from our process.
//once it connects , just do console log the host of the connection
//in error exit the process with failure so pass in a 1 here.

const dbURI =
  "mongodb+srv://roonwal721972:c2oZAPc4JezYO2M0@cluster-mern.fntpbbc.mongodb.net/mernapp?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
    // try {
    //   const conn = await mongoose.connect(process.env.MONGO_URI);
    //   console.log(`MongoDB Connected: ${conn.connected.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
