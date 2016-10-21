var mysql = require('mysql'),
    time  = require('./time');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'drupal8',
  port: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

var start = time.getTimeMSFloat();
connection.connect();

var caches = [];
for (var i = 0; i < 1000; i++) {
  caches.push('testing' + i);
}

connection.query("SELECT * FROM cache_default WHERE cid IN ('" + caches.join("','") + "')", function(err, rows, fields) {
  if (err) {
    throw err;
  }

  var end = time.getTimeMSFloat();

  console.log(end - start);
});

connection.end();