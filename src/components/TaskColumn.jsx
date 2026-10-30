import TaskCard from "./TaskCard";

const TaskColumn = ({ tasks, onDeleteTask, onEditTask, handleTaskStatus, status, columnTitle }) => {
    return (
        <section
            className={`board-column ${status}-column`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                handleTaskStatus(e, status);
            }}
        >
            <h2>{columnTitle}</h2>
            <div className="task-list">
                {
                    tasks
                        .filter((task) => task.status === status)
                        .map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />)
                }
            </div>
        </section>
    )
}

export default TaskColumn