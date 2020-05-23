const express = require("express");
const router = express.Router();

// Import the models to use its database functions.
const burgers = require("../models/burgers");
const ingredients = require("../models/ingredients")

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  burgers.all(function(burgers){
   ingredients.all(function(ingredients){
    res.render("index", {burger: burgers, ingredient: ingredients})
 })
  })
});

router.post("/newBurger", function(req, res) {

  ingredientList = req.body.Topping
  ingredientList.push(req.body.Sauce)
  ingredientList.push(req.body.Patty)
 
  burgers.create([
    req.body.title
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  },
  ingredients.create(
    ingredientList
  , function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  }
  ))
});


router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;