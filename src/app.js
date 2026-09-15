const express = require("express");

const taskRoutes = require("./routes/task.routes");

const app = express();

/* Middlewares */
app.use(express.json());

/* Routes */
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
