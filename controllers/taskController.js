const Task = require("../models/task");

const createTask = (req, res) => {
  const { task, autor, data } = req.body;
  Task.createTask(task, autor, data, (err, taskId) => {
    if (err) {
      res.status(500).json({ error: "Erro ao criar tarefa." });
    } else {
      res.status(201).json({ taskId });
    }
  });
};

const getAllTasks = (req, res) => {
  Task.getAllTasks((err, tasks) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar tarefas." });
    } else {
      res.status(200).json(tasks);
    }
  });
};

const getTasksByUser = (req, res) => {
  const { autor } = req.params;
  Task.getTasksByUser(autor, (err, tasks) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar tarefas do usuário." });
    } else {
      res.status(200).json(tasks);
    }
  });
};

module.exports = {
  createTask,
  getAllTasks,
  getTasksByUser,
};
