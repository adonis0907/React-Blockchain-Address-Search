'use strict';

import express from 'express';
import path from 'path';
import ejs from 'ejs'
import cors from 'cors';
import ngrok from 'ngrok';
import request from 'request';
import io from 'socket.io';
import http from 'http';

let app = express();
app.set('views', path.join(__dirname, '/public/build'));
app.use(express.static(__dirname + '/public/build'));
app.use(cors())
app.engine('.html', ejs.renderFile);

app.get("/get-transactions/:address", (req, res) => {
	const baseUrl = 'https://blockchain.info';
	let addressQuery = '/rawaddr/' + req.params.address+ '?cors=true';
	let params = '&limit=10';

	request(baseUrl + addressQuery + params, function (error, response, body) {
		res.send(response);
	});
});

app.get("/", (req, res) => {
	res.render('index.html')
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("App alive on port: " + port);
});

let ipAddress = 'ws://ws.blockchain.info/inv';
var server = http.createServer();
		server.listen(8000);
var socket = io.listen(server);

console.log('socket.io listening on port: ', port);

ngrok.connect(3000, (err, url) => {
	console.log(url)
}); 