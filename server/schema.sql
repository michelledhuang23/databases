DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users(
  id INT AUTO_INCREMENT,
  name VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE rooms(
  id INT AUTO_INCREMENT,
  name VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE messages(
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  room_name VARCHAR(100),
  text VARCHAR(200),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

