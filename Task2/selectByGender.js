const fs = require('fs');

function selectByGender(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    var content = fs.readFileSync('./data/users.json', 'utf8');
    var arrayOfPeople = JSON.parse(content);
    var genderInUrl = req.url.slice(14).toString();
    var user = [];

    for (var i = 0; i < arrayOfPeople.length; i++) {

        if (arrayOfPeople[i].gender == genderInUrl) {
            user.push(arrayOfPeople[i]);     
        }
        
    };

    user = JSON.stringify(user);
    content = user;
    res.end(content);
}

module.exports = selectByGender;