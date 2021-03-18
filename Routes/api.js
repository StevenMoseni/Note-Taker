const fs = require('fs');

module.exports = function(app) {

app.get('/api/notes', function(req, res) {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    });
})
}