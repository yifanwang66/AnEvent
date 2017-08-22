var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('eventlist', ['eventlist']);
var userdb = mongojs('userevent', ['userevent']);

var bodyParser = require('body-parser');

var fs = require('fs');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get('/eventlist', function(req, res){
    //res.sendFile(path.join(__dirname, '/index.html'));
    console.log("Get eventlist request");
    db.eventlist.find(function(err, docs){
    	console.log("docs");
    	res.json(docs);
    });
    
});

app.post('/eventlist', function (req, res) {
    //var file_name = req.body.ogrNo;
    console.log(req.body);
    db.eventlist.insert(req.body, function(err, doc){
    	res.json(doc);
    });
});

app.post('/userevent', function (req, res) {
    //var file_name = req.body.ogrNo;
    console.log(req.body);
    userdb.userevent.insert(req.body, function(err, doc){
    	res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");