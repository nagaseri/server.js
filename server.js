var http = require("http");

var PORT = 7000;

function handleRequest(request, response){
	response.end("You are fucking amazing!" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});


var PORT1 = 7500;

function handleRequest2(request, response){
	response.end("You are still fucking amazing!" + request.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
});