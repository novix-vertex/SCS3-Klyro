import { useState } from "react";

const TaskModal = ({ isModalOpen, onModalClose, onTaskSubmit }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: ""
    });

    if (!isModalOpen) {
        return null;
    }
    console.log("modal called");
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert("Please enter a task title");
            return;
        }

        onTaskSubmit(formData);

        setFormData({
            title: "",
            description: "",
            priority: "Medium",
            dueDate: ""
        });
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-body">
                        <label>Task Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter task title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            placeholder="Enter task description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label>Priority</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}>
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
                        />
                    </div>
                    <div className="modal-actions">
  <button type="button" onClick={onModalClose}>
    Cancel
  </button>

  <button type="submit">
    Add Task
  </button>
</div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;