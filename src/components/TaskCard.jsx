const TaskCard = ({ task, onDeleteTask }) => {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.priority}</span>
            <p>{task.dueDate}</p>
            <button onClick={() => onDeleteTask(task.id)}>
                Delete
            </button>
        </div>
    )
}

export default TaskCard