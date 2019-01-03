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
    var totalDiff = 1000;

    for (var i = 0; i < friends.length; i++) {
      var diff = 0;
      for (var j = 0; j < scores.length; j++) {
        diff += Math.abs (friends[i].score[j] - scores[j]);
      }
    }

    if (diff < totalDiff) {
      console.log('Closest match found = ' + diff);
      console.log('Friend name = ' + friends[i].name);
      console.log('Friend image = ' + friends[i].photo);
      totalDiff = diff;
      newFriendName = friends[i].name;
      newFriendPhoto = friends[i].image;
    }

    friends.push (newFriend);

    res.json ({newFriendName: newFriendName, newFriendPhoto: newFriendPhoto});
  });
};
