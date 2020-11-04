const http = require('http');


let server = http.createServer(function(request, response){
	if (request.url == '/') {
		response.writeHead(200,{'Content-type': 'text/html'})
		response.write('<html><body><h1>Hello world</h1><p>This is root page</p></body></html>')
		response.end();
	} else if(request.url =='/profile'){
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write('<html><body><h1>Hello DumbAss</h1><p>I aint no Human</p></body></html>')
		response.end();
	} else {
		response.writeHead(404, {'Content-type': 'text/html'});
		response.write('<html><body><h1>Hello world</h1><p>page no found you dumbass</p></body></html>')
		response.end();
	}
});

server.listen(8000);
console.log('Server is running on port: ', 8000);



