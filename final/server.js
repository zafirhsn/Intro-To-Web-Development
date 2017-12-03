var http = require("http");
var url = require("url");
var fs = require("fs");

function onRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile("./home.html", null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write("file not found");
		} else {
			res.write(data);
		}
		res.end();
	});	
}


http.createServer(onRequest).listen(8888);

// JavaScript Document