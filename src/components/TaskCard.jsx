const TaskCard = ({ task }) => {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.priority}</span>
            <p>{task.dueDate}</p>
        </div>
    )
}

export default TaskCard