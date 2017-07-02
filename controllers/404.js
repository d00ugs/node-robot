exports.get = function(req, res) {  
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("404 - Page not found<br>Oh noes, it's a 404<br><p>This isn't the page you're looking for...</p>");
  res.end();
};

