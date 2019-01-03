var path = require ('path');

var friends = require ('../data/friends.js');

module.exports = function (app) {
  app.get ('/api/friends', function (req, res) {
    res.json (friends);
  });

  //other routes..

  app.post ('/api/friends', function (req, res) {
    var newFriend = req.body;
    console.log (newFriend);

    var scores = newFriend.scores;

    var newFriendName = '';
    var newFriendPhoto = '';
    var totalScore = 1000;

    for (var i = 0; i < friends.length; i++) {
      var diff = 0;
      for (var j = 0; j < scores.length; j++) {
        diff += Math.abs(+friends[i].scores[j] - +scores[j]);
      }
      if (diff < totalScore) {
        totalScore = diff;
        newFriendName = friends[i].name;
        newFriendPhoto = friends[i].photo;
      }
    }
    
    console.log('Closest match found = ' + totalScore);
    console.log('Friend name = ' + newFriendName);
    console.log('Friend photo = ' + newFriendPhoto);

    friends.push (newFriend);

    res.json ({newFriendName: newFriendName, newFriendPhoto: newFriendPhoto});
  });
};
