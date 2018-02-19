import express from 'express';
import path from 'path';

let app = express();

app.set('views', path.join(__dirname, 'public/src/'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/src'));

app.get("/", function (req, res) {
	res.render('index')
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("App alive on post " + port);
});