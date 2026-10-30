import TaskColumn from "./TaskColumn";

const Board = ({ tasks, onDeleteTask, onEditTask, onUpdateTaskStatus, hasActiveFilters }) => {

    const columns = [
        { status: "todo", title: "To Do" },
        { status: "ongoing", title: "In Progress" },
        { status: "completed", title: "Done" }
    ];

    const handleTaskStatus = (e, newStatus) => {
        const taskId = Number(e.dataTransfer.getData("taskId"))
        onUpdateTaskStatus(taskId, newStatus);
    }


    return (
        <main>
            <div className="board">
                {columns.map((column) => (
                    <TaskColumn
                        key={column.status}
                        tasks={tasks}
                        onDeleteTask={onDeleteTask}
                        onEditTask={onEditTask}
                        handleTaskStatus={handleTaskStatus}
                        hasActiveFilters={hasActiveFilters}
                        status={column.status}
                        columnTitle={column.title}
                    />
                ))}
            </div>
        </main >
    )
}

export default Board