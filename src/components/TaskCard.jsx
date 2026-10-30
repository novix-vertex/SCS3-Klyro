import { formatDate } from '../utils/dateUtil.js'
const TaskCard = ({ task, onDeleteTask, onEditTask }) => {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.priority}</span>
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