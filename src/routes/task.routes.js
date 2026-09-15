const express = require("express");
const router = express.Router();

/* require the handelers */
const taskController = require("../controllers/task.controller");

/* Setup routes */

//Creates a task
router.post("/create", taskController.createTask);

//fetch all tasks
router.get("/", taskController.getAllTasks);

//fetch desired task
router.get("/:id", taskController.getTaskById);

//delete desired task
router.delete("/delete/:id", taskController.deleteTask);

//mark task done
router.patch("/:id", taskController.makeTaskComplete);

module.exports = router;
