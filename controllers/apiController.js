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
  });
});

router.post("/newBurger", function (req, res) {

       burgers.create(req.body.title, function (result){
       let burgerID = result.insertId;
       let ingredientList = []
       ingredientList = req.body.Topping;
       ingredientList.push(req.body.Sauce);
       ingredientList.push(req.body.Patty);
       ingredients.create(ingredientList, burgerID, function (result2) {
         // console.log(result1.insertId);
           res.json({ id: result2 });
        })
      })
    });

      router.put("/burgers/:id", function (req, res) {
          const btnID = req.params.id;
          if (req.params.id !== null) {
            burgers.update(btnID, function (result) {
              return res.status(200).json(result);
            })
          } else {
            res.status(200).end();
          }
        }),


        router.delete("/burgers/:id", function (req, res) {
          const btnID = req.params.id;

          if (req.params.id !== null) {
            burgers.delete(btnID, function (result) {
              return res.status(200).json(result)
            })
          } else {
            res.status(200).end();
          }

        });

      // Export routes for server.js to use.
      module.exports = router;