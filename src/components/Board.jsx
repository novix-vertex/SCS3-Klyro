import TaskColumn from "./TaskColumn";

const Board = ({ tasks, onDeleteTask, onEditTask, onUpdateTaskStatus, hasActiveFilters }) => {
    const handleTaskStatus = (e, newStatus) => {
        const taskId = Number(e.dataTransfer.getData("taskId"))
        onUpdateTaskStatus(taskId, newStatus);
    }

    return (
        <main>
            <div className="board">
                <TaskColumn
                    tasks={tasks}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                    handleTaskStatus={handleTaskStatus}
                    hasActiveFilters={hasActiveFilters}
                    status="todo"
                    columnTitle="To Do" />
                <TaskColumn
                    tasks={tasks}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                    handleTaskStatus={handleTaskStatus}
                    hasActiveFilters={hasActiveFilters}
                    status="ongoing"
                    columnTitle="In Progress" />
                <TaskColumn
                    tasks={tasks}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                    handleTaskStatus={handleTaskStatus}
                    hasActiveFilters={hasActiveFilters}
                    status="completed"
                    columnTitle="Done" />
            </div>
        </main >
    )
}

export default Board