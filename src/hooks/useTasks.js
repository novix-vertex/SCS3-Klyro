import { useState, useEffect } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("klyro-tasks");

        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);

            if (parsedTasks.length > 0) {
                return parsedTasks;
            }
        }

        return [];
    });
    useEffect(() => {
        localStorage.setItem("klyro-tasks", JSON.stringify(tasks));
    }, [tasks]);

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