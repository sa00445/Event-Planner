const http = require('http');
const fs = require('fs');
const path = require('path');

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const notFoundPage = fs.readFileSync('notfound.html');
// const homePage = fs.readFileSync('index.html');
// const homePage = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(homePage);
    } else if (req.url === "/about.html") {
        res.end(aboutPage);
    } else {
        res.writeHead(404);
        res.end(notFoundPage);
    }
});

server.listen(3000)