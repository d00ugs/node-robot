var http_IP = '127.0.0.1';  
var http_port = 8899;  
var http = require('http');  
var server = http.createServer(function(req, res) {  
  require('./router').get(req, res);
}); // end server() 
server.listen(http_port);  
console.log(http_port);
