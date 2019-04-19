var path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  app.get('/api/friends', function(req, res) {
    res.json(res);
  });

  app.get('/api/match', function(req, res) {
    res.json(res);
  });
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
