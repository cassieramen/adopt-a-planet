var fs = require('fs');

function route(pathname, params, handler, response) {
  console.log("About to route a request for " + pathname);

  if(typeof handler[pathname] === 'function') {
    handler[pathname](params, response);
  } else if (pathname.indexOf('/images/') > -1) {
  	var img = fs.readFileSync(pathname.slice(1));
  	response.writeHead(200, {"Content-Type": "image/png"});
    response.end(img, 'binary');
  } else if (pathname.indexOf('jquery') > -1 ) {
  	var jquery = fs.readFileSync(pathname.slice(1));
  	response.writeHead(200, {"Content-Type": "text/javascript"});
    response.end(jquery);
  } else {
    console.log("No handler found for pathname:" + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }

}

exports.route = route;

