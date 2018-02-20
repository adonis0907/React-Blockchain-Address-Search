'use strict';

import express from 'express';
import path from 'path';
import jade from 'jade';
import ejs from 'ejs'


let app = express();

// app.set('views', path.join(__dirname, 'public/src/'));
app.set('views', path.join(__dirname, '/public/build'));
app.use(express.static(__dirname + '/public/build'));
app.engine('.html', ejs.renderFile);


app.get("/", function (req, res) {
	res.render('index.html')

});

let port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("App alive on post " + port);
});