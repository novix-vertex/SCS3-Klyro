import { useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Build Login Page",
            description: "Create login form",
            priority: "High",
            dueDate: "2026-11-05",
            status: "todo"
        },
        {
            id: 2,
            title: "Create Dashboard",
            description: "Design the main dashboard",
            priority: "Medium",
            dueDate: "2026-11-08",
            status: "todo"
        },
        {
            id: 3,
            title: "Setup API",
            description: "Connect backend API",
            priority: "Low",
            dueDate: "2026-11-10",
            status: "ongoing"
        },
        {
            id: 4,
            title: "Design Registration Page",
            description: "Create user registration form",
            priority: "High",
            dueDate: "2026-11-06",
            status: "completed"
        },
        {
            id: 5,
            title: "Implement Authentication",
            description: "Add JWT-based authentication",
            priority: "High",
            dueDate: "2026-11-12",
            status: "ongoing"
        },
        {
            id: 6,
            title: "Create User Profile",
            description: "Build user profile page",
            priority: "Medium",
            dueDate: "2026-11-14",
            status: "todo"
        },
        {
            id: 7,
            title: "Setup Database",
            description: "Configure database connection",
            priority: "High",
            dueDate: "2026-11-07",
            status: "completed"
        },
        {
            id: 8,
            title: "Build Navigation Bar",
            description: "Create responsive navigation bar",
            priority: "Low",
            dueDate: "2026-11-15",
            status: "ongoing"
        },
        {
            id: 9,
            title: "Add Search Functionality",
            description: "Implement search and filtering",
            priority: "Medium",
            dueDate: "2026-11-18",
            status: "todo"
        },
        {
            id: 10,
            title: "Create Settings Page",
            description: "Build application settings page",
            priority: "Low",
            dueDate: "2026-11-20",
            status: "completed"
        },
        {
            id: 11,
            title: "Implement Notifications",
            description: "Add real-time notifications",
            priority: "High",
            dueDate: "2026-11-16",
            status: "ongoing"
        },
        {
            id: 12,
            title: "Add Dark Mode",
            description: "Implement light and dark themes",
            priority: "Medium",
            dueDate: "2026-11-22",
            status: "todo"
        },
        {
            id: 13,
            title: "Build Task Management",
            description: "Create task CRUD functionality",
            priority: "High",
            dueDate: "2026-11-11",
            status: "completed"
        },
        {
            id: 14,
            title: "Optimize Performance",
            description: "Improve application loading speed",
            priority: "Medium",
            dueDate: "2026-11-25",
            status: "ongoing"
        },
        {
            id: 15,
            title: "Add File Upload",
            description: "Allow users to upload documents",
            priority: "Low",
            dueDate: "2026-11-28",
            status: "todo"
        },
        {
            id: 16,
            title: "Implement Logout",
            description: "Add secure logout functionality",
            priority: "Medium",
            dueDate: "2026-11-09",
            status: "completed"
        },
        {
            id: 17,
            title: "Create Reports Page",
            description: "Display analytics and reports",
            priority: "High",
            dueDate: "2026-11-26",
            status: "ongoing"
        },
        {
            id: 18,
            title: "Write Unit Tests",
            description: "Add tests for application components",
            priority: "Medium",
            dueDate: "2026-11-30",
            status: "todo"
        },
        {
            id: 19,
            title: "Fix UI Responsiveness",
            description: "Make application mobile-friendly",
            priority: "High",
            dueDate: "2026-11-13",
            status: "completed"
        },
        {
            id: 20,
            title: "Deploy Application",
            description: "Deploy application to production",
            priority: "High",
            dueDate: "2026-12-01",
            status: "ongoing"
        }
    ]);

    const addTask = (formData) => {
        const newTask = {
            id: Date.now(),
            ...formData,
            status: "todo"
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
    }

    const editTask = (taskId, updatedData) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, ...updatedData }
                    : task
            )
        );
    };

    const updateTaskStatus = (taskId, newStatus) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, status: newStatus }
                    : task
            )
        );
    };

    const searchTasks = (searchText) => {
        return tasks.filter((task) =>
            task.title.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    return {
        tasks,
        addTask,
        deleteTask,
        editTask,
        updateTaskStatus,
        searchTasks
    };
};

export default useTasks;