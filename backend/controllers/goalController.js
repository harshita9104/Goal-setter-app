//i created my controller function, this will get all goals
//desc - Get goals
//routes- Get /api/goals
//access - private
const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
//this will have a bunch of mongoose methods on it, we can use to create in our database or read
//in getGoals function create a variable and we can get them from our database through our mongoose model we need to await as this is asynchronus
//and instead of returning a message we return goals
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});
//desc - set goals
//routes- POST /api/goals
//access - private
//now to get body data
//use an express error handler because it does have a built-in error handler
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});
//desc - UPDATE goals
//routes- PUT /api/goals/:id
//access - private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findByID(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }
  const updatedGoal = await Goal.findByIDAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});
//desc - DELETE goals
//routes- DELETE /api/goals/:id
//access - private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
//in the controller when we use mongoose in each of these functions to interact with database we get back a promise so we are going to be using async await to these functions
//now we have complete crud functionality for our API
