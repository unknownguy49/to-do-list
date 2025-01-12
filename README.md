# To-Do List Application Documentation

## Overview

This is a simple To-Do List web application that allows users to create, view, filter, and delete tasks. The application supports adding priority levels, categories, and due dates for each task. The tasks are stored locally using the browser's `localStorage` to persist data even after page reloads.

## Features

- **Create Tasks**: Add tasks with customizable attributes such as text, priority, category, and due date.
- **Filter Tasks**: Filter tasks based on priority, category, and completion status.
- **Mark as Completed**: Mark tasks as completed with a checkbox.
- **Delete Tasks**: Delete tasks from the list.
- **Persistent Data**: Tasks are saved to the browser's `localStorage`, so they remain available after refreshing or revisiting the page.

### 1. Task Creation

Users can add a new task by:
- Typing the task name into the input field.
- Selecting a priority from `low`, `medium`, or `high`.
- Selecting a category from `personal`, `work`, or `study`.
- Choosing a due date for the task.

When the user clicks the "Add Task" button, the task is added to the list and saved in `localStorage`.

### 2. Task Display

Each task is displayed as an item in the list with the following information:
- Task text.
- Priority.
- Category.
- Due date (if specified).
- A checkbox to mark the task as completed.
- A "Delete" button to remove the task.

### 3. Task Completion

Users can mark a task as completed by clicking the checkbox next to the task. When a task is marked as completed:
- The task text is displayed with a line-through.
- The task's completion state is saved to `localStorage`.

### 4. Task Deletion

Each task has a "Delete" button that allows users to remove the task from the list. Deleting a task updates the `localStorage` to reflect the changes.

### 5. Task Filtering

Users can filter the displayed tasks based on:
- **Priority**: Filter by low, medium, or high priority.
- **Category**: Filter by personal, work, or study category.
- **Completion**: Filter tasks by completed or not-completed status.

The task list is updated dynamically when any filter option is changed.

### 6. Responsiveness

The layout is responsive, with the following behaviors:
- On screens larger than 1200px, the layout has two main columns for input and tasks.
- On screens smaller than 800px, the layout switches to a single column.
- On screens smaller than 500px, the font size is reduced to ensure usability on smaller devices.

## LocalStorage

Tasks are saved in the browser's `localStorage` as a JSON array. The application retrieves tasks from `localStorage` on page load and updates the storage whenever a task is added, completed, or deleted.

The structure of each task stored in `localStorage` is as follows:
```json
{
    "text": "Task description",
    "priority": "low|medium|high",
    "category": "personal|work|study",
    "dueDate": "YYYY-MM-DD",  // Optional
    "completed": true|false
}
```

## How to Access Online

You can access the live version of the To-Do List Application online by visiting the following link:

[To-Do List App - Live Version](https://unknownguy-to-do.vercel.app/)

## How to Clone and Use Locally

To clone and use the To-Do List application locally, follow these steps:

1. **Clone the repository**:

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/unknownguy49/to-do-list.git

2. **Navigate to the project directory**:

   ```bash
   cd to-do-list
   ```

3. **Open the project in your browser**:
   - Open the `index.html` file in any web browser to run the application locally.

4. **Edit the code (Optional)**:
   - You can modify the code in the `index.html`, `style.css`, and `script.js` files as needed to customize the application.

5. **Run Locally**:
   - The application does not require any server or back-end. Simply open the `index.html` file in a browser to start using the To-Do List App locally.

## Conclusion

This To-Do List application offers a simple yet effective way to manage tasks. With features like task creation, filtering, and completion tracking, it helps keep your tasks organized. You can access the live app online or clone the repository for local use and further customization.