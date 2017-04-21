var express  = require("express");
var http = require("http");
var app = express();

app.set("PORT", 3000);

app.use(express.static(__dirname+"/public"));


http.createServer(app).listen(app.get("PORT"), function() {
  console.log("Eighth Server Started ...!");
});
