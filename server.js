const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
