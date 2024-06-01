const db = require("./database");

const createTask = (task, autor, data, callback) => {
  const sql = `INSERT INTO tasks (task, autor, data) VALUES (?, ?, ?)`;
  db.run(sql, [task, autor, data], function (err) {
    callback(err, this ? this.lastID : null);
  });
};

const getAllTasks = (callback) => {
  const sql = `SELECT * FROM tasks`;
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
};

const getTasksByUser = (autor, callback) => {
  const sql = `SELECT * FROM tasks WHERE autor = ?`;
  db.all(sql, [autor], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = {
  createTask,
  getAllTasks,
  getTasksByUser,
};
