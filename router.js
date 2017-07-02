var url = require('url');  
var fs = require('fs');

exports.get = function(req, res) {  
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
    if (path === '/' || path === '/home') {
      require('./controllers/home').get(req, res);
    } else if (path.substring(0,8)  === '/action/') {
      require('.' + path).get(req, res);
    } else if (path.substring(0,4) === '/js/') {
	res.writeHead(200);
        res.write(fs.readFileSync(path.slice(1), "utf8"));
	res.end();
    } else {
      require('./controllers/404').get(req, res);
    }
};


