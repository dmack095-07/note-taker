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


require("./develop/routes/apiRoutes")(app);
require("./develop/routes/htmlRoutes")(app);




app.listen(PORT, function() {
  console.log("App is listening on: http://localhost" + PORT);
});

