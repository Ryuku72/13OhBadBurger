const connection = require("../config/connection");

// Tools

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll : function(tableInput, callback){
        const input = [tableInput];
        const question = "Select * FROM Ingredients;";
        const answer = function (err, res) {
            if (err) throw err;
        let tableArray = [];
        for (let i = 0; i < res.length; i++) {
                    tableArray.push(res[i]);
                }
                callback(tableArray);
            }
        connection.query(question, input, answer);
    },

    create: function(table, cols, cb) {
    
        const input = [table ,{title: cols, checkOut: 1, purchased: 0}]
        const question = "INSERT INTO ?? SET ?";
        connection.query(question, input, function(err, result) {
			if (err) throw err;
			cb(result);
		});
    },

    createIngredients: async function(colOne){
        const question = "INSERT INTO burgerOrder (burgerID, ingredientID) VALUES (?, ?);"
       
        connection.query("SELECT id FROM Burgers", function (err, res) {
            if (err) throw err;
            let burgerLength = res.length;
            console.log(burgerLength)
           
            for(let i = 0; colOne.length > i; i++){
                let numberInput = parseInt(colOne[i]);
                connection.query(question, [burgerLength, numberInput], function (err,res){
                    if (err) console.log(err);
                })
            }
        })
    },

      // An example of objColVals would be {name: panther, sleepy: true}
      update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };
    
    // Export the orm object for the model (cat.js).
    module.exports = orm;


    // selectAll: function (searchZero, searchOne, sumSearchOne, sumSearchOneName, sumSearchTwo, sumSearchTwoName, searchTwo, tableOne, tableTwo, colOne, colTwo, colTwoId, tableThree, colThree, colFour, colFourID, groupVal, callback) 
    // {
    //     const question = "Select ??, ??, Sum(??) as ??, Sum(??) as ??, time(Time) as Time, date(Time) as Date, ?? from ?? INNER JOIN ?? on ?? = ??.??  INNER JOIN ?? on ?? = ??.?? group by ??;"
    //     const inputArray = [searchZero, searchOne, sumSearchOne, sumSearchOneName, sumSearchTwo, sumSearchTwoName, searchTwo, tableOne, tableTwo, colOne, colTwo, colTwoId, tableThree, colThree, colFour, colFourID, groupVal]
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, )
    // }, //burgers, ingredient
      

    
    // Update

    // updateStatus: function (tableInput, colOne, colTwo, tableVal, callback) {
    //     const question = "UPDATE ?? SET ??, ?? where ?";
    //     const inputArray = [tableInput, colOne, colOneVal, colTwo, colTwoVal, tableVal];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // },

    // selectWhereID: function (colArray, tableInput, colToSearch, valOfCol, callback) {
    //     const question = "SELECT ?? FROM ?? WHERE ?? = ?";
    //     const inputArray = [colArray, tableInput, colToSearch, valOfCol];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // select ingredient and see spice level or price and select burger and see purchased, select BurgerId and see IngredientID

    // selectWhereValue: function (colArray, tableInput, colToSearch, valOfCol, callback) {
    //     const question = "SELECT ?? FROM ?? WHERE ?? = ??";
    //     const inputArray = [colArray, tableInput, colToSearch, valOfCol];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // select id from Burger where title = ?

    // selectAndOrder: function (colArray, tableInput, orderCol, callback) {
    //     const question = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    //     const inputArray = [colArray, tableInput, orderCol];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // select ingredient and order by spice level or price

    // selectSumAsValue: function (colToSearch, newTitle, tableOne, tableTwo, tableOneCol, tableTwoCol, tableTwoColValue, groupValue, callback) {
    //     const question = "SELECT SUM(??) AS ? FROM ?? INNER JOIN ?? ON ??=??.?? group by ??;";
    //     const inputArray = [colToSearch, newTitle, tableOne, tableTwo, tableOneCol, tableTwoCol, tableTwoColValue, groupValue];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // price and spice level

    // selectArray: function (searchOne, searchTwo, tableOne, tableTwo, tableTwoCol, tableOneCol, tableOneColValue, tableThree, tableTwoColTwo, tableThreeCol, tableThreeColValue, callback) {
    //     const question = "Select ??, ?? from ?? INNER JOIN ?? on ?? = ??.?? INNER JOIN ?? on ?? = ??.??;";
    //     const inputArray = [searchOne, searchTwo, tableOne, tableTwo, tableTwoCol, tableOneCol, tableOneColValue, tableThree, tableTwoColTwo, tableThreeCol, tableThreeColValue];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // burger ingredients

    // selectArrayWhereID: function (searchID, searchOne, searchTwo, tableOne, tableTwo, tableTwoCol, tableOneCol, tableOneColValue, tableThree, tableTwoColTwo, tableThreeCol, tableThreeColValue, colToSearch, valOfCol, callback) {
    //     const question = "Select ??, ??, ?? from ?? INNER JOIN ?? on ?? = ??.?? INNER JOIN ?? on ?? = ??.?? where ?? = ?;";
    //     const inputArray = [searchID, searchOne, searchTwo, tableOne, tableTwo, tableTwoCol, tableOneCol, tableOneColValue, tableThree, tableTwoColTwo, tableThreeCol, tableThreeColValue, colToSearch, valOfCol];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // burger ingredients where burger id = ?

    // showKeyInfo: function (searchOne, searchTwo, searchTwoValue, searchThree, searchThreeValue, searchFour, searchFive, searchSix, tableOne, tableTwo, tableOneCol, tableTwoCol, tableTwoColValue, tableThree, tableTwoColTwo, tableThreeCol, groupValue, callback) {
    //     const question = "Select ??, Sum(??) as ?, Sum(??) as ?, time(??) as time, date(??) as date, ?? from ?? INNER JOIN ?? on ?? = ??.??  Inner Join ?? on ?? = ??.?? group by ??;";
    //     const inputArray = [searchOne, searchTwo, searchTwoValue, searchThree, searchThreeValue, searchFour, searchFive, searchSix, tableOne, tableTwo, tableOneCol, tableTwoCol, tableTwoColValue, tableThree, tableTwoColTwo, tableThreeCol, groupValue];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // show Title, SpiceLvL, Price, Time, Date, Purchased

    // // Create Column entry

    // insertOne: function (tableInput, colInput, inputValue, callback) {
    //     const question = "INSERT INTO ?? (??) VALUES (?);";
    //     const inputArray = [tableInput, colInput, inputValue];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, //insert burgerName

    // insertTwo: function (tableInput, colInputOne, colInputTwo, valueOne, valueTwo, callback) {
    //     const question = "INSERT INTO ?? (??, ??) VALUES (?, ?);"
    //     const inputArray = [tableInput, colInputOne, colInputTwo, valueOne, valueTwo];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // },//insert burgerOrder burgerID and IngredientID



    // // Delete

    // deleteItem: function (tableInput, colInput, colValue, callback) {
    //     const question = "DELETE FROM ?? WHERE ?? = ?";
    //     const inputArray = [tableInput, colInput, colValue];
    //     connection.query(question, inputArray, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     }, );
    // }, // delete order


