var mongoConnector = require("./mongo")
    , format = require('util').format;
var MongoClient = new mongoConnector.MongoClient();
var fs = require('fs');
var Handlebars = require('handlebars');
Handlebars.registerHelper('exists', function(variable, options) {
    if (typeof variable !== 'undefined') {
        return 1;
    } else {
        return 0;
    }
});

function start(params, response) {
  var empty = true;
  for (var key in params) {
    if (params.hasOwnProperty(key)) { 
      empty = false; 
    }
  }

  var source = fs.readFileSync('index2.html', 'utf8');
  var template = Handlebars.compile(source);

  if (empty) {
    MongoClient.getInitial(function(record) {
      record['options'] = ["Alien-Life", "Mass", "Temperature", "Orbital-Period", "Distance-From-Earth", "Radius", "Year-Discovered", "Neighbors"];
      console.log(record);
      var result = template(record);

      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(result);
      response.end();
    })
  } else {
      MongoClient.filterWithQuery(params, function(record){
        record['options'] = ["Alien-Life", "Mass", "Temperature", "Orbital-Period", "Distance-From-Earth", "Radius", "Year-Discovered", "Neighbors"];
        console.log(record);
        var result = template(record);

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(result);
        response.end();
    })
  }

}

function getPlanet(params, response) {
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

function purchase(params, response) {
  var source = fs.readFileSync('purchase.html', 'utf8');
  var template = Handlebars.compile(source);
  MongoClient.getInitial(function(record) {
      record['options'] = ["Alien-Life", "Mass", "Temperature", "Orbital-Period", "Distance-From-Earth", "Radius", "Year-Discovered", "Neighbors"];
      var result = template(record);

      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(result);
      response.end();
    })
}

exports.start = start;
exports.upload = upload;
exports.pageScript = pageScript;
exports.css = css;
exports.getPlanet = getPlanet;
exports.purchase = purchase;


