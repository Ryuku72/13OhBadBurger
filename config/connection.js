const mysql = require("mysql");
//const chalk = require("chalk");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "ohBadBurgerDB",
      dateStrings: 'date' ///formats date string
    });
};



// //mySQL connection
// connection.connect(function (err) {
//   if (err){ 
//     console.log(chalk.bold.red(err));
//   return;
//   }
//   console.log(chalk.bold.yellow("Connected to mySQL As ID# ") + chalk.green(connection.threadId))
// })

module.exports = connection;