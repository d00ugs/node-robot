exports.get = function(req, res) {
  var PythonShell = require('python-shell');

  PythonShell.run('action/shoulderup.py', function (err) {
    if (err) throw err;
  });
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end();
};

