var http = require("http");
var url = require("url");

function start(route, handler) {
  function onRequest(request,response) {
  	var parsedURL = url.parse(request.url, true);
    
    route(parsedURL.pathname, parsedURL.query, handler, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

