const User = require("../models/user");

const createUser = (req, res) => {
  const { username, password } = req.body;
  User.createUser(username, password, (err, userId) => {
    if (err) {
      res.status(500).json({ error: "Erro ao criar usuário." });
    } else {
      res.status(201).json({ userId });
    }
  });
};

const getUserByUsername = (req, res) => {
  const { username } = req.params;
  User.getUserByUsername(username, (err, user) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar usuário." });
    } else {
      res.status(200).json(user);
    }
  });
};

const getAllUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar usuários." });
    } else {
      res.status(200).json(users);
    }
  });
};

module.exports = {
  createUser,
  getUserByUsername,
  getAllUsers,
};
