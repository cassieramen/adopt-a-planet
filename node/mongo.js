var mongoConnector = require('mongodb').MongoClient

var MongoClient = function () {
}

MongoClient.prototype.getCount = function (callback) {
  mongoConnector.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection('planets');
    collection.count(function(err, count) {
      callback(count);
      db.close();
    });
  })
}

MongoClient.prototype.getInitial = function (callback) {
  mongoConnector.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection('planets');

    collection.find({}).toArray(function(err, records) {
      var randomize = randomInt(0, records.length);
      callback(records[randomize]);
      db.close();
    });

  })
}

MongoClient.prototype.filterWithQuery = function (query, callback) {
  var _this = this;
  mongoConnector.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection('planets');
    
    var firstQuery;
    if(query.min) {
      var minimums = query.min.split(',');
      for (var i in minimums) {
      var elements = minimums[i].split(':');
      //we want to have a comparison to previous planet
      var comparison = {};
      comparison[elements[0]] = { $gt : parseFloat(elements[1])};
      //a lot of planets are missing fields so let's also include ones without 
      var exists = {};
      exists[elements[0]] = { $exists : false};
      //and now we can make it an or query
      firstQuery = [ comparison, exists ] ;
    }
  }

  var secondQuery;
  if(query.max) {
    var maximums = query.max.split(',');
    for (var j in maximums) {
      var elements = maximums[j].split(':');
      //we want to have a comparison to previous planet
      var comparison = {};
      comparison[elements[0]] = { $lt : parseFloat(elements[1])};
      //a lot of planets are missing fields so let's also include ones without 
      var exists = {};
      exists[elements[0]] = { $exists : false};
      //and now we can make it an or query
      secondQuery = [ comparison, exists ];
    }
  }

  if(firstQuery && secondQuery) {
    parsedQuery = {$and: [{$or : firstQuery}, {$or : secondQuery}] };
  } else if (firstQuery) {
    parsedQuery = {$or : firstQuery};
  } else if (secondQuery) {
    parsedQuery = {$or : secondQuery};
  }
  console.log(parsedQuery);
  console.log("first:", firstQuery);
  console.log("second:", secondQuery);
  collection.find(parsedQuery).limit(1).toArray(function(err, records) {
    if(records) {
      callback(records[0]);
    } else {
      callback(null);
    }
    db.close();
  });

})
}

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

exports.MongoClient = MongoClient;