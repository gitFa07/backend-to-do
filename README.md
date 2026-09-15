# To-Do List Backend

A simple REST API backend for managing tasks in a To-Do List application.

This project allows users to create, view, update, and delete tasks using a Node.js and Express.js backend with MongoDB as the database.

## Features

- Create a new task
- Get all tasks
- Get a task by ID
- Mark a task as completed
- Delete a task
- Store tasks in MongoDB

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Project Structure

backend-to-do-main/
│
├── src/
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ │ └── task.controller.js
│ ├── models/
│ │ └── task.model.js
│ ├── routes/
│ │ └── task.routes.js
│ └── app.js
│
├── server.js
├── package.json
└── .env

## Installation

1. Clone the repository:

   git clone <your-repository-url>

2. Navigate to the project directory:

   cd backend-to-do-main

3. Install dependencies:

   npm install

4. Create a `.env` file in the root directory:

   PORT=5000
   MONGO_URI=your_mongodb_connection_string

5. Start the server:

   npm run dev

The server will run on:

http://localhost:5000

## API Endpoints

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| GET    | /                     | Check server status |
| POST   | /api/tasks/create     | Create a task       |
| GET    | /api/tasks            | Get all tasks       |
| GET    | /api/tasks/:id        | Get a task by ID    |
| PATCH  | /api/tasks/:id        | Update task status  |
| DELETE | /api/tasks/delete/:id | Delete a task       |

## Example Request

### Create a Task

POST `/api/tasks/create`

Request body:

{
"title": "Learn React",
"description": "Practice React components",
"completed": false
}

### Update Task Status

PATCH `/api/tasks/:id`

Request body:

{
"completed": true
}

## Task Model

Each task contains:

- `title`: Task title (required)
- `description`: Task description
- `completed`: Task completion status
- `createdAt`: Task creation time
- `updatedAt`: Last update time

## Author

Enoch
