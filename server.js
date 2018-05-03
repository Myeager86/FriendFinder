// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import data files from seperate JS
const friends = require('./app/data/friends.js');

// API route
const api = require('./app/routing/apiRoutes.js')(app);

const html = require('./app/routing/htmlRoutes.js')(app);

// listening and letting us know the server is up and running 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});