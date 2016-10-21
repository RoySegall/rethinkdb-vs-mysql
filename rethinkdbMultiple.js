var connection = null, r = require('rethinkdb'), time = require('./time');

var start = time.getTimeMSFloat();

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {

  if (err) {
    throw err;
  }

  connection = conn;

  var caches = [];

  for (var i = 0; i < 1000; i++) {
    caches.push('testing' + i);
  }

  r.db('drupal').table('cache').run(connection, function (err, cursor) {

    if (err) {
      throw err;
    }

    connection.close();

  }).then(function() {
    var end = time.getTimeMSFloat();
    console.log(end - start);
  });

});
