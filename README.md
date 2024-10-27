# Task Management System

## Overview

The Task Management System is a web-based application designed to help teams and individuals manage their tasks efficiently. It provides features such as task creation, assignment, tracking, and reporting.

## Features

- **Task Creation**: Easily create tasks with titles, descriptions, due dates, and priorities.
- **Task Assignment**: Assign tasks to team members and set deadlines.
- **Task Tracking**: Track the progress of tasks with status updates and comments.
- **Reporting**: Generate reports to analyze task completion rates and team performance.

## Installation

To install the Task Management System, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with your existing credentials.
3. Start creating and managing your tasks.

## API Documentation

## Endpoints

### 1. Create Task

- **Method:** POST
- **URL:** `/api/tasks`
- **Description:** Creates a new task.
- **Request Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "YYYY-MM-DD",
    "priority": "low|medium|high"
  }
  ```
- **Response:**
  ```json
  {
    "id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "YYYY-MM-DD",
    "priority": "low|medium|high",
    "status": "pending"
  }
  ```

### 2. Get Task

- **Method:** GET
- **URL:** `/api/tasks/{id}`
- **Description:** Retrieves a task by its ID.
- **Response:**
  ```json
  {
    "id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "YYYY-MM-DD",
    "priority": "low|medium|high",
    "status": "pending|completed"
  }
  ```

### 3. Update Task

- **Method:** PUT
- **URL:** `/api/tasks/{id}`
- **Description:** Updates an existing task.
- **Request Body:**
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "dueDate": "YYYY-MM-DD",
    "priority": "low|medium|high",
    "status": "pending|completed"
  }
  ```
- **Response:**
  ```json
  {
    "id": "task_id",
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "dueDate": "YYYY-MM-DD",
    "priority": "low|medium|high",
    "status": "pending|completed"
  }
  ```

### 4. Delete Task

- **Method:** DELETE
- **URL:** `/api/tasks/{id}`
- **Description:** Deletes a task by its ID.
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

### 5. List Tasks

- **Method:** GET
- **URL:** `/api/tasks`
- **Description:** Retrieves a list of all tasks.
- **Response:**
  ```json
  [
      {
          "id": "task_id",
          "title": "Task Title",
          "description": "Task Description",
          "dueDate": "YYYY-MM-DD",
          "priority": "low|medium|high",
          "status": "pending|completed"
      },
      ...
  ]
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
