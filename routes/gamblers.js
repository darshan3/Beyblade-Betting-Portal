var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/beyblade');

router.get('/', function(req, res) {
    var collection = db.get('users');
    collection.find({}, function(err, users){
        if (err) throw err;
      	res.json(users);
    });
});

router.post('/insert/', function(req, res){
    var collection = db.get('users');
    collection.insert({
        fb_id: req.body.fb_id,
        name: req.body.name,
        points: 100,
        bet: 0,
        bet_points: 0
    }, function(err, user){
        if (err) throw err;

        res.json(user);
    });
});
module.exports = router;