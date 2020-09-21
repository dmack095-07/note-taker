// Dependencies
const path = require("path");


module.exports = function(app) {
  // Creating HTML GET Requests for notes page
  app.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname, "../public/notes.html"));
 });
  // Creating HTML GET Requests for index page
 app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "./develop/public/index.html"));
 });

 app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

}


