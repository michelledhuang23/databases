var db = require('../db');
module.exports = {
  messages: {
    get: function (cb) {
      var statement = `SELECT * FROM messages`;
      db.sqlConnection.query(statement, cb);
    }, // a function which produces all the messages
    post: function (data, cb) {
      var statement = 'INSERT INTO messages(user_id, room_name, text)\
                        VALUES((SELECT id FROM users WHERE name = ? LIMIT 1),?,?)';
      db.sqlConnection.query(statement, data, cb);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function (data, cb) {
      var statement = `INSERT INTO users(name) VALUES(?)`;
      db.sqlConnection.query(statement, data, cb);
    }
  }
};

