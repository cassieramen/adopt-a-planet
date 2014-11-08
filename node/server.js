var http = require("http");
var url = require("url");

function start(route, handler) {
  function onRequest(request,response) {
    var pathname = url.parse(request.url).pathname;
    
    route(pathname, handler, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

