//each resource in your api will have its own route file
const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
//replace the whole callback function with getGoals
router.get("/", getGoals);
router.post("/", setGoal);
//to update we have a put request, where we need to give id which is our params
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `delete  goal ${req.params.id}` });
});
module.exports = router;
//now we have all our routes set up, we could proceed to add our functionality in the body of these callback functions but it is better to create a controller and have your functions there
//if we want to make a post request to api goals we need to send some data to create a goal, we do that by adding data in the body , raw json
