const http = require('http');

const server = http.createServer((request, response) => {
	response.write('Hello World\n');
	response.end();
});

server.listen(9000, () => {
	console.log('Server is running...');
}); 