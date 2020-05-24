const express = require("express");
const router = express.Router();

// Import the models to use its database functions.
const burgers = require("../models/burgers");
const ingredients = require("../models/ingredients")

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

  burgers.all(function (burgers) {
    ingredients.all(function (ingredients) {
      res.render("index", {
        burger: burgers,
        ingredient: ingredients
      })
    })
  })
});

router.post("/newBurger", function (req, res) {

  //console.log(req.body);
  ingredientList = req.body.Topping;
  ingredientList.push(req.body.Sauce);
  ingredientList.push(req.body.Patty);
  //console.log(ingredientList);

  burgers.create([req.body.title], function (result1) {
    ingredients.create(ingredientList, function (result2) {
      // console.log(result1.insertId);
     // console.log(result2);
      res.json({id1: result1.insertId})
    })
  })
});

router.put("/burgers/:id", function (req, res) {
    const btnID = req.params.id;
    if (req.params.id !== null) {
      burgers.update(btnID, function (result) {
        res.status(200).json(result);
      })
    } else {
      res.status(200).end();
    }
  }),


  router.delete("/burgers/:id", function (req, res) {
    const btnID = req.params.id;

    if (req.params.id !== null) {
      burgers.delete(btnID, function(result) {
        res.status(200).json(result)
      })
    } else {
      res.status(200).end();
    }

  });

// Export routes for server.js to use.
module.exports = router;