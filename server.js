// NPM Packages
const chalk = require("chalk")
const bodyParser = require('body-parser')
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const helpers = require('handlebars-helpers')()

// Port
const PORT = process.env.PORT || 8000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/apiController");
app.use("/", routes);

// Listener
app.listen(PORT, function() {
  console.log(chalk.bold.yellow("Server Up // PORT: ") + chalk.blue(PORT));
});

