const fs = require('fs');

function selectById(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    var content = fs.readFileSync('./data/users.json', 'utf8');
    var arrayOfPeople = JSON.parse(content);
    var idInUrl = req.url.slice(7);

    for (var i = 0; i < arrayOfPeople.length; i++) {
        if (arrayOfPeople[i]["_id"] == idInUrl) {
            var obj = JSON.stringify(arrayOfPeople[i]);
            content = obj;
            break;
        } else {
            content = 'There is no such id';
        }
    };
    res.end(content);
}

module.exports = selectById;