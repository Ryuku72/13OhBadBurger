const express = require("express");
const router = express.Router();

// Import the models to use its database functions.
const burgers = require("../models/burgers");
const ingredients = require("../models/ingredients")

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  burgers.all(function(burgers){
   ingredients.all(function(ingredients){
     console.log({burger: burgers, ingredient: ingredients})
    res.render("index", {burger: burgers, ingredient: ingredients})
 })
  })
});

// router.post("/api/burger", function(req, res) {
//   console.log("post request")
//  burger.create([
//    "BurgerId", "Title", "SpiceLvL", "Price", "Time", "Date", "Purchased", "checkOut" 
//  ])
// });

// router.put("/api/:burgerID", function(req, res) {
 
//   console.log("put request")
 
//    var condition = req.params;

//   console.log("condition", condition);
//   burgers.update({

//     Purchased: req.body.Purchased,
//     checkOut: req.body.checkOut
  
//   }, condition, function(result) {
//     if (result.changedRows.Purchased === "0" && result.changedRows.checkOut === "1") {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/burger/:burgerID", function(req, res) {
//   var condition = "burgerID = " + req.params.id;

//   burgers.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
