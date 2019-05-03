var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          res.statusCode = 400;
          res.end();
        } else {
          res.statusCode = 200;
          res.json(data);
          res.end();
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = [
        req.body.username,
        req.body.roomname,
        req.body.message
      ];
      models.messages.post(data, (err) => {
        if (err) {
          throw err;
        } else {
          res.statusCode = 201;
          res.end();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) {
      var username = [req.body.username];
      models.users.post(username, (err) => {
        if (err) {
          throw err;
        } else {
          res.statusCode = 201;
          res.end();
        }
      });
    }
  }
};

