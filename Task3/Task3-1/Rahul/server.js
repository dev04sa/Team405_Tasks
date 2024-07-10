const http = require('http');

const server = http.createServer((request, response) => {
	response.write('Hello World and change the world\n');
	response.end();
});

server.listen(9000, () => {
	console.log('Server is running...');
}); 