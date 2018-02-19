var express = require("express");
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'public/src/'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/src'));


/* serves main page */
app.get("/", function (req, res) {
  res.render('index')
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("App alive on post " + port);
});