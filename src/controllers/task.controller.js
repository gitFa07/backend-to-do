const { mongo, default: mongoose } = require("mongoose");
const taskModel = require("../models/task.model");

// Create task handler
async function createTask(req, res) {
  const { title, description, completed } = req.body;

  const task = await taskModel.create({
    title,
    description,
    completed,
  });

  res.status(200).json({
    message: "Task created successfully",
    task: {
      title: task.title,
      description: task.description,
      completed: task.completed,
    },
  });
}

async function getAllTasks(req, res) {
  const tasks = await taskModel.find().select("title description completed");

  res.status(200).json({
    message: "All tasks fetched successfully: ",
    tasks,
  });
}

async function getTaskById(req, res) {
  const task = await taskModel
    .findById(req.params.id)
    .select("title description completed");

  if (!task) {
    return res.status(400).json({
      message: "Task not found",
    });
  }

  res.status(200).json({
    message: "Task fetched successfully",
    task,
  });
}

async function deleteTask(req, res) {
  //Delete task by id
  const task = await taskModel.findByIdAndDelete(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.status(200).json({
    message: "Task deleted successfully",
    task,
  });
}

async function makeTaskComplete(req, res) {
  const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.status(200).json({
    message: "Task marked completed",
    task,
  });
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  deleteTask,
  makeTaskComplete,
};
