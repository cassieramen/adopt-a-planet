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

MongoClient.prototype.filterWithRange= function (min, max, field, callback) {
  console.log(field);
  mongoConnector.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection('planets');
    var query = {};
    query[field] = {$lt : max, $gt : min}
    
    collection.find(query).toArray(function(err, records) {
        callback(records);
        db.close();
    });

  })
}

exports.MongoClient = MongoClient;