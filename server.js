// Dependencies
const express = require("express");
const fs = require("fs");


// Sets up Express App
const PORT = 3000;
const app = express();

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("develop/public"));

// Creating router for our server
require("./develop/routes/apiRoutes")(app);
require("./develop/routes/htmlRoutes")(app);

//Creating listener to start my server
app.listen(PORT, function() {
  console.log("App is listening on: http://localhost" + PORT);
});

