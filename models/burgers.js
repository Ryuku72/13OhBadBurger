// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
const connection = require("../config/connection")

const burgers = {
  all : function(callback) {

    const question = "Select Title, Sum(SpiceLvL) as SpiceLvL, Sum(Price) as Price, time(Time) as Time, date(Time) as Date, checkOut, Purchased from Ingredients Inner JOIN burgerOrder on IngredientID = Ingredients.id  Inner Join Burgers on BurgerID = Burgers.id group by BurgerID;"
    
    const answer = function (err, res) {
        let tableArray = [];
        if (err) throw (err);
        if (res) {
            for (let i = 0; i < res.length; i++) {
                tableArray.push(res[i]);
            }
        }
        callback(tableArray);
    }
    connection.query(question, answer);
}, 

  // The variables cols and vals are arrays.
  create: function(cols, cb) {
    orm.create("burgers", cols, function(res) {
      cb(res);
    });
  },
  
  update: function(colOneVal, colTwoVal, selector, callback) {
    let checkUpdate = 'checkOut =' + colOneVal;
    let burgerID = 'id ='+ selector;

    orm.updateStatus("Burger", checkUpdate, burgerID, function(data){
      callback(data);
  
    orm.updateStatus("Burger", function(res) {
      cb(res);
    });
  });
},

  delete: function(condition, cb) {
    orm.delete("Burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
