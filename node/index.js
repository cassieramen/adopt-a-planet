var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/script.js"] = requestHandlers.pageScript;
handle["/css/style.css"] = requestHandlers.css;

server.start(router.route, handle);
