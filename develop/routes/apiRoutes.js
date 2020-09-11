// Loading data from json
const tableData = require("../db/db.json");


module.exports = function(app) {

  // Creating API GET Requests
  app.get("/api/notes", function(req, res){
    res.json(tableData);
  });
  // Creating API POST Requests
  app.post("/api/notes", function(req, res){
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  }

  app.post("/api/clear", function(req, res) {
  // Empty out the arrays of data
  tableData.length = 0;
  res.json({ ok: true });
});

});

}