var friendsData = require('../data/friends');

console.log(friendsData[0].scores);
console.log(friendsData[1].scores);

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  var match = {
    name: '',
    photo: '',
    scores: []
  };
  app.post('/api/friends', function(req, res) {
    let indexSmallest;
    let data = req.body.score;
    //friendsData.push(data);
    let dataNum = [];
    data.forEach(cur => {
      dataNum.push(parseInt(cur));
    });
    console.log(data);
    console.log(dataNum);
    // match logic!!!
    // get score array
    let diffGlobal = 999999;

    for (let i = 0; i < friendsData.length; i++) {
      let diffLocal = 0;
      for (let j = 0; j < friendsData[i].scores.length; j++) {
        diffLocal += Math.abs(friendsData[i].scores[j] - dataNum[j]);
      }
      if (diffLocal < diffGlobal) {
        diffGlobal = diffLocal;
        indexSmallest = i;
      }
    }
    console.log(diffGlobal);
    console.log(indexSmallest);

    match.name = friendsData[indexSmallest].name;
    match.photo = friendsData[indexSmallest].photo;
    match.scores = friendsData[indexSmallest].scores;

    // console.log(match);
  });

  app.post('/api/match', function(req, res) {
    res.json(match);
  });

  app.get('/api/match', function(req, res) {
    res.json(match);
  });
};
