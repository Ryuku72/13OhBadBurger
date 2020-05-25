const connection = require("../config/connection");
const chalk = require("chalk");

// Tools

const orm = {
    selectAll: function (tableInput, callback) {
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

    create: function (table, cols, cb) {
        const inputName = cols.toString();
        console.log("Burger Name: " + chalk.bold.red(inputName));
        const input = [table, inputName, 1, 0];
        const question = "INSERT INTO ?? (title, checkOut, purchased) VALUES (?, ?, ?)";
        connection.query(question, input, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
            //console.log(res)
        });
    },

    createIngredients: async function (colOne, numID, callback) {
        const question = "INSERT INTO burgerOrder (burgerID, ingredientID) VALUES (?, ?);"
   
            for (let i = 0; i < colOne.length; i++) {
                let numberInput = parseInt(colOne[i]);
                connection.query(question, [numID, numberInput], function (err, result) {
                    if (err) throw err;
                    console.log("BurgerID " + chalk.bold.magenta(numID) + " updated. IngredientID " + chalk.bold.green(result.insertId) + " updated");
                })
            }
        callback(numID);
    },

    // Update

    updateStatus: function (btnID, callback) {
        const question = "UPDATE burgers SET checkOut = 0, purchased = 1 where id = ?";
        const input = [parseInt(btnID)];
        //console.log(inputArray)
        connection.query(question, input, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    delete: function (table, btnID, callback) {
        const question = "DELETE FROM ?? WHERE id = ?"
        const input = [parseInt(btnID)];
        const answer = [table, input]

        connection.query(question, answer, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
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
