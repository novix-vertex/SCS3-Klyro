import TaskCard from "./TaskCard";

const TaskColumn = ({
    tasks,
    onDeleteTask,
    onEditTask,
    handleTaskStatus,
    status,
    columnTitle,
    hasActiveFilters }) => {

    const filteredTasks = tasks.filter((task) => task.status === status);

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
                {filteredTasks.length === 0 ? (
                    <p className="empty-message">
                        {hasActiveFilters
                            ? "No matching tasks"
                            : "No tasks here yet"}
                    </p>
                ) : (
                    filteredTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onDeleteTask={onDeleteTask}
                            onEditTask={onEditTask}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

export default TaskColumn