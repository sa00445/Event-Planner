const http = require('http');
const fs = require('fs');
const path = require('path');

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notfound.html');
// const homePage = fs.readFileSync('index.html');
// const homePage = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/index.html") {
        res.end(homePage);
    } else if (req.url === "/about.html") {
        res.end(aboutPage);
    } else if (req.url === "/contact.html") {
        res.end(contactPage);
    } else {
        res.writeHead(404);
        res.end(notFoundPage);
    }
});

server.listen(3000)