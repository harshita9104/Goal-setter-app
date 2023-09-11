const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.port || 3380;
connectDB();
const app = express();
//get is the request we want to listen for and then the end point will be /api/goals, and the second argument is a function that takes in a request and response variable and to respond just do res.json
//in order to use body data we add few lines of middleware
//use app.use and on express we have the body parser for raw json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//where we initialised express we can do app.use and say /api/goals and in second argument we can require the file that we want to pertain to which is going to be /routes/goalRoutes.
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log(`server started on port ${port}`));
