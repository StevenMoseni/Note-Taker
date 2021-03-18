const path = require('path');

module.exports = function(app){
    app.get('/notes', function(app){
        res.sendFile(path.join(_dirname, '../Public/notes.html'));
    });

    app.get('/', function(req, res) {
        res.sendFile(path.join(_dirname, '../Public/index.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(_dirname, '../Public/index.html'));
    });
}