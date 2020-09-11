const path = require("path");

module.exports = function(app) {
  // Creating HTML Routes
app.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname, "../public/notes.html"));
 });
 
 app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "./develop/public/index.html"));
 });

}


