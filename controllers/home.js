exports.get = function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' +
    '\n<head><script src="js/jquery-3.2.1.min.js"></script>' +
    '\n<script src="funcs.js"></script>\n' +
    '\n<meta charset="utf-8">\n<title>ROBOT</title></head>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/elbowup\');" type="button">Elbow Up</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/elbowdown\');" type="button">Elbow Down</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/shoulderup\');" type="button">Shoulder Up</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/shoulderdown\');" type="button">Shoulder Down</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/left\');" type="button">Left</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/right\');" type="button">Right</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/wristup\');" type="button">Wrist Up</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/wristdown\');" type="button">Wrist Down</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/open\');" type="button">Open</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/close\');" type="button">Close</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/in\');" type="button">In</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/out\');" type="button">Out</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/up\');" type="button">Up</button>' + 
    '<button onmouseup="$.get(\'/action/done\');" onmousedown="$.get(\'/action/down\');" type="button">Down</button>' + 
    '\n\n');
  res.end();
};

