const http = require('http');
const fs = require('fs');

const selectByGender = require('./selectByGender');
const selectById = require('./selectById');

http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Hello World )');
    } else if (req.url == '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        var content = fs.readFileSync('./data/users.json', 'utf8');
        res.end(content);
    } else if (/[\d|\w]{24}/gi.test(req.url) ) {
        selectById(req, res);
    } else if (req.url == '/users/gender/male') {
        selectByGender(req, res);
    } else if (req.url == '/users/gender/female') {
        selectByGender(req, res);
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Enter the correct address');
    }
}).listen(3000, () => console.log('Сервер работает'));