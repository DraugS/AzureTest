var express = require('express');
var router = express.Router();
var Parse = require('parse').Parse;

/* GET home page. */
router.get('/', function(req, res) {
  var userQuery = new Parse.Query(Parse.Object.extend('User'));
  userQuery.find({
    success: function(users){
      res.render('index', {users: users});
    }, error: function(error){
      res.json(error)
    }
  });

});

module.exports = router;
