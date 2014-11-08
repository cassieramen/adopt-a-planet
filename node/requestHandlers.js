var mongoConnector = require("./mongo")
    , format = require('util').format;
var MongoClient = new mongoConnector.MongoClient();
var fs = require('fs');

function start(params, response) {
  console.log("Handling start with params, ", params);
  
  if (!params) {
    MongoClient.getInitial(function(record){
      response.writeHead(200, {"Content-Type": "text/plain"});
      console.log(record);
      var index = fs.readFileSync('index.html');
      response.write(index);
      response.end();
    })
  } else {
    MongoClient.filterWithQuery(params, function(record){
      response.writeHead(200, {"Content-Type": "text/plain"});
      console.log(record);
      var index = fs.readFileSync('index.html');
      response.write(index);
      response.end();
    })
  }
}

function upload(params, response) {
  console.log("Handling upload");

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;


