var connection = null, r = require('rethinkdb'), time = require('./time');

var start = time.getTimeMSFloat();
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {

  if (err) {
    throw err;
  }

  connection = conn;

  for (var i = 0; i < 1000; i++) {
    r.db('drupal').table('cache').get('testing' + i).run(connection, function(err, cursor) {
      if (err) {
        throw err;
      }
    });
  }

  connection.close();

  var end = time.getTimeMSFloat();

  console.log(end - start);

});
