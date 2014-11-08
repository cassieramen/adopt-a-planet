var mongoConnector = require("./mongo")
    , format = require('util').format;
var MongoClient = new mongoConnector.MongoClient();
var fs = require('fs');

function start(response) {
  console.log("Handling start");
  
    MongoClient.filterWithRange(0, 50, 'dist_from_earth', function(records){
      response.writeHead(200, {"Content-Type": "text/plain"});
      var index = fs.readFileSync('index.html');
      response.write(index);
      response.end();
    })
}

function upload(response) {
  console.log("Handling upload");

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;


