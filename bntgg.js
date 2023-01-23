const http = require('http');
const port = 3948;
const bntg = 7981;

const server = http.createServer((req, res) => {
    res.end("Server is running");
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

setInterval(() => {
    http.get(`http://localhost:${port}`);
}, 1000); // setiap 60 detik
/*setInterval(() => {
    http.get(`http://localhost:${bntg}`);
}, 5000); // setiap 60 detik*/
