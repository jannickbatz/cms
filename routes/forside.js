const db = require('../config/mysql')();
module.exports = function (app) {

    app.get('/', function (req, res) {
        db.query(`SELECT * FROM rooms`, function (err, results) {
            if (err) throw err;
            db.query('SELECT * FROM page', function (err, main) {
                if (err) throw err;
                console.log(results);
                res.render('index', {
                    'results': results[0],
                    'main': main[0]
                });
            });
        });
    });
}