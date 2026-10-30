import { formatDate } from '../utils/dateUtil.js'
const TaskCard = ({ task, onDeleteTask, onEditTask }) => {
    return (
        <div
            className="task-card"
            draggable="true"
            onDragStart={(e) => {
                e.dataTransfer.setData("taskId", task.id);
            }}
        >
            <span className={`priority-${task.priority.toLowerCase()}`}>
                {task.priority}
            </span>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {formatDate(task.dueDate)}</p>
            <div className="task-card-actions">
                <button
                    type="button"
                    onClick={() => onEditTask(task)}
                >
                    Edit
                </button>

                <button
                    type="button"
                    onClick={() => onDeleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskCard