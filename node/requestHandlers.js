var mongoConnector = require("./mongo")
    , format = require('util').format;
var MongoClient = new mongoConnector.MongoClient();
var fs = require('fs');

function start(params, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  var index = fs.readFileSync('index.html');
  response.write(index);
  response.end();
}

function getPlanet(params, response) {
  console.log(params);

  var empty = true;
  for (var key in params) {
    if (params.hasOwnProperty(key)) { 
      empty = false; 
    }
  }

  if (empty) {
    MongoClient.getInitial(function(record){
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(format(record));
      response.end();
    })
  } else {
    MongoClient.filterWithQuery(params, function(record){
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(format(record));
      response.end();
    })
  }
}

function pageScript(params, response) {
  response.writeHead(200, {"Content-Type": "text/javascript"});
  var script = fs.readFileSync('script.js');
  response.write(script);
  response.end();
}

function css(params, response) {
  response.writeHead(200, {"Content-Type": "text/css"});
  var css = fs.readFileSync('css/style.css');
  response.write(css);
  response.end();
}

function upload(params, response) {
  console.log("Handling upload");

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.pageScript = pageScript;
exports.css = css;
exports.getPlanet = getPlanet;


