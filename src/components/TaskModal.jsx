import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const TaskModal = ({ isModalOpen, onModalClose, onTaskSubmit, editingTask }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: ""
    });

    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate
            });
        } else {
            setFormData({
                title: "",
                description: "",
                priority: "Low",
                dueDate: ""
            });
        }
    }, [editingTask, isModalOpen]);


    if (!isModalOpen) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        onTaskSubmit(formData);
        toast.success(editingTask ? "Task updated successfully!" : "Task added successfully!");

        setFormData({
            title: "",
            description: "",
            priority: "Medium",
            dueDate: ""
        });
    };

    const validateForm = () => {
        if (!formData.title.trim()) {
            toast.error("Please enter task title");
            return false;
        }

        if (formData.title.trim().length < 3) {
            toast.error("Title must contain at least 3 characters");
            return false;
        }

        if (!formData.description.trim()) {
            toast.error("Please enter task description");
            return false;
        }

        if (formData.description.trim().length < 5) {
            toast.error("Description must contain at least 5 characters");
            return false;
        }

        if (!formData.dueDate) {
            toast.error("Please select a due date");
            return false;
        }

        return true;
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-body">
                        <label>Task Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter task title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            placeholder="Enter task description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <label>Priority</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            required>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div>
                        <label>Due Date</label>
                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" onClick={onModalClose}>
                            Cancel
                        </button>

                        <button type="submit">
                            {editingTask ? "Save Changes" : "Add Task"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;