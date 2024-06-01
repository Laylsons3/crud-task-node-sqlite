const db = require("./database");

const createUser = (username, password, callback) => {
  const sql = `INSERT INTO usuarios (username, password) VALUES (?, ?)`;
  db.run(sql, [username, password], function (err) {
    callback(err, this ? this.lastID : null);
  });
};

const getUserByUsername = (username, callback) => {
  const sql = `SELECT * FROM usuarios WHERE username = ?`;
  db.get(sql, [username], (err, row) => {
    callback(err, row);
  });
};

const getAllUsers = (callback) => {
  const sql = `SELECT * FROM usuarios`;
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = {
  createUser,
  getUserByUsername,
  getAllUsers,
};
