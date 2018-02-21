'use strict';

import express from 'express';
import path from 'path';
import ejs from 'ejs'
import cors from 'cors';
import ngrok from 'ngrok';
import request from 'request';
let app = express();

// app.set('views', path.join(__dirname, 'public/src/'));
app.set('views', path.join(__dirname, '/public/build'));
app.use(express.static(__dirname + '/public/build'));
app.use(cors())
app.engine('.html', ejs.renderFile);

app.get("/get-transactions/:address", function (req, res) {

	const baseUrl = 'https://blockchain.info';
	let addressQuery = '/rawaddr/' + req.params.address+ '?cors=true';
	let params = '&limit=10';


	request(baseUrl + addressQuery + params, function (error, response, body) {
		res.send(response);
	});

});

app.get("/", function (req, res) {
	res.render('index.html')
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("App alive on post " + port);
});

ngrok.connect(3000, function (err, url) {
	console.log(url)
}); 