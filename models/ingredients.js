// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const ingredients  = {
    all: function(callback) {
        orm.selectAll("Ingredients", function(res) {
          callback(res)
        });
      },
    
      create: function(colOne) {
        orm.createIngredients(colOne);
      },
}

module.exports = ingredients;