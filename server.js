const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    console.log(req.url);
    res.end("Hello");
});

server.listen(3000)
