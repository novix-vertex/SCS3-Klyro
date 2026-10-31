# Klyro \| Kanban Task Manager

A simple task management board built with React. Klyro helps you
organise everyday work, keep track of priorities, and see what needs to
be done next.

Tasks move through three stages: **To Do**, **In Progress**, and
**Done**. You can add and update tasks, move them with drag and drop,
and find them using search and filters.

## Preview

The board is organised into three columns:

### 1. To Do
Tasks waiting to be started.

### 2. In Progress
Tasks currently being worked on.

### 3. Done
Tasks that have been completed.

Each column displays its current task count.

Every task card includes:
- Task title
- Description
- Priority level
- Due date

Each column displays its current task count. Task cards show the title,
description, priority, and due date.

## Features

### Task management

-   Add a task with a title, description, priority, and due date.
-   Edit an existing task using the same form used to add tasks.
-   Delete a task after confirming the action.
-   Move tasks between columns using drag and drop.
-   Uses Nano ID to generate unique IDs for each task.

### Search and filters

-   Search tasks by title.
-   Filter tasks by priority: Low, Medium, or High.
-   Filter tasks by status: To Do, In Progress, or Done.
-   Combine search and filters to narrow down the board.

### Board experience

-   See the number of tasks in each column.
-   See a helpful message when a column has no tasks or when no tasks
    match the current search and filters.
-   View priority labels with different colours.
-   Get toast notifications for validation errors and successful task
    actions.
-   Use the board on desktop, tablet, and mobile screens.

### Data persistence

-   Tasks are saved automatically in the browser using LocalStorage.
-   Tasks remain available after refreshing the page in the same
    browser.
-   The board starts empty when there are no saved tasks.

## Technology Stack

### React
Used to build the user interface using reusable components.

### JavaScript
Handles task operations, searching, filtering, and application logic.

### CSS
Used for layout, styling, colors, and responsive design.

### Vite
Provides the development server and creates the production build.

### React Hot Toast
Displays success and error notifications.

### Nano ID
Generates unique IDs for tasks to help identify and manage them.

### LocalStorage
Saves tasks in the browser so they remain available after refreshing the page.

### HTML Drag and Drop API
Allows users to move task cards between board columns.
## Getting Started

Follow these steps to run Klyro on your computer.

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### 1. Clone the repository

``` bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL of your Klyro repository.

### 2. Open the project folder

``` bash
cd klyro
```

### 3. Install the dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

Vite will show a local URL in the terminal. Open that URL in your
browser to use Klyro.

## Available Scripts

Run these commands from the project folder.

``` bash
npm run dev
```
Starts the local development server and runs the application.

``` bash
npm run build
```
Creates an optimised production build of the application.

## How to Use Klyro

1.  Select **Add Task** to open the task form.
2.  Enter a title and description, choose a priority, and select a due
    date.
3.  Save the task. It will appear in the **To Do** column.
4.  Select **Edit** on a task card to update its details.
5.  Select **Delete** and confirm if you want to remove a task.
6.  Drag a task card to another column when its status changes.
7.  Use the search field or the priority and status filters to find
    specific tasks.

The task count in each column updates as tasks are added, removed,
moved, searched, or filtered.

## Project Structure

``` text
klyro/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Header.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskColumn.jsx
│   │   └── TaskModal.jsx
│   ├── hooks/
│   │   ├── useModal.js
│   │   └── useTasks.js
│   ├── utils/
│   │   └── dateUtil.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

### A quick look at the main files

-   **App.jsx** -- Connects the main components and manages search,
    filters, and the task modal.
-   **Board.jsx** -- Creates the three Kanban columns.
-   **TaskColumn.jsx** -- Displays tasks for a particular status and
    shows the column count.
-   **TaskCard.jsx** -- Displays an individual task and handles its
    edit, delete, and drag actions.
-   **TaskModal.jsx** -- Provides the form for adding and editing tasks,
    including validation.
-   **useTasks.js** -- Contains task operations and LocalStorage
    handling.
-   **useModal.js** -- Controls whether the task modal is open or
    closed.
-   **dateUtil.js** -- Formats task due dates for display.
-   **index.css** -- Contains the application styles and responsive
    breakpoints.

## How LocalStorage Works

Klyro stores task data in the browser under the key:

``` text
klyro-tasks
```

Whenever the task list changes, the updated list is saved to
LocalStorage. When the app starts, it checks for previously saved tasks
and loads them if they exist.

**A few things to keep in mind:** - Tasks are saved in the current
browser on the current device. - They are not synced between different
browsers or devices. - Clearing the browser's site data can remove the
saved tasks. - There is currently no backend or online database.

## Current Scope

Klyro is a frontend Kanban project. It focuses on the core task
management workflow and does not currently include user accounts, team
collaboration, or cloud synchronisation.

## Run the Production Build

Before sharing or deploying the project, you can check that it builds
successfully:

``` bash
npm run build
```

Vite creates the production-ready files in the `dist/` folder.



------------------------------------------------------------------------

**Klyro**\
*Keep tasks clear. Keep work moving.*
