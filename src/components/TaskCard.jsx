import { formatDate } from '../utils/dateUtil.js'
import toast from "react-hot-toast"
const TaskCard = ({ task, onDeleteTask, onEditTask }) => {

    const handleDelete = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) {
            return;
        }

        onDeleteTask(task.id);
        toast.success("Task deleted successfully!");
    };
    return (
        <div
            className="task-card"
            draggable="true"
            onDragStart={(e) => {
                e.dataTransfer.setData("taskId", task.id);
            }}
        >
            <div className="task-card-top">
                <span className={`priority-${task.priority.toLowerCase()}`}>
                    {task.priority}
                </span>
                <div className="task-card-actions">
                    <button
                        className="task-edit-btn"
                        type="button"
                        onClick={() => onEditTask(task)}
                    >
                        Edit
                    </button>

                    <button
                        className="task-delete-btn"
                        type="button"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <h3 className="task-title">{task.title}</h3>
            <p className="task-desc">{task.description}</p>
            <p className="task-due-date">Due Date: {formatDate(task.dueDate)}</p>

        </div>
    )
}

export default TaskCard