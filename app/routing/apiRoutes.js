var path = require('path');

var friends = require('../data/friends.js');

module.exports = function (app) {
  app.get ('/api/friends', function (req, res) {
    res.json(friends);
  });

  //other routes..

  app.post ('/api/friends', function (req, res) {

    // var newFriend = req.body;

    // newFriend.routeName = newFriend.name
    //   .replace (/\s+/g, '')
    //   .toLowerCase ();

    // console.log (newFriend);

    // friends.push (newFriend);

    // res.json (newFriend);
  });

};
