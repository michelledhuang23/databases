var db = require('../db');
var app = require('../app');

module.exports = {
  messages: {
    get: function () { }, // a function which produces all the messages
    post: function () { } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () {
      app.post('/classes/users', (req, res) => {
        var username = [req.username];
        var statement = `INSERT INTO users(name) VALUES(?)`;
        db.sqlConnection.query(statement, username, (err) => {
          if (err) {
            throw err;
          } else {
            res.write('INSERT INTO USERS TABLE');
          }
        });
      });
    }
  }
};

