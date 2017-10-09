const http = require('http');
const fs = require('fs');
const qs = require('querystring');

http.createServer((req, res) => {


    fs.readFile('index.html', (err, content) => {
        if (err) throw err;

        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.end(decodeURIComponent(content));
    });

    if (req.url == '/getDataFromFile') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        var content = fs.readFileSync('data.txt', 'utf8');
        res.end(content);
    }

    req.on('data', function (data) {
        var text = qs.parse(data.toString());
        formattedText = text.text;
        fs.writeFileSync('data.txt', formattedText);
    });

}).listen(3000, () => console.log('Сервер работает'));