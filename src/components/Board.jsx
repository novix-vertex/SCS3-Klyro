import TaskCard from "./TaskCard"

const Board = ({ tasks, onDeleteTask, onEditTask, onUpdateTaskStatus }) => {
    const handleTaskStatus = (e, newStatus) => {
        const taskId = Number(e.dataTransfer.getData("taskId"))
        onUpdateTaskStatus(taskId, newStatus);
    }

    return (
        <main>
            <div className="board">
                <section
                    className="board-column todo-column"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        handleTaskStatus(e, "todo");
                    }}
                >
                    <h2>To Do</h2>
                    <div className="task-list">
                        {
                            tasks
                                .filter((task) => task.status === "todo")
                                .map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />)
                        }
                    </div>
                </section>
                <section
                    className="board-column ongoing-column"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        handleTaskStatus(e, "ongoing");
                    }}
                >
                    <h2>In Progress</h2>
                    <div className="task-list">

                        {
                            tasks
                                .filter((task) => task.status === "ongoing")
                                .map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />)
                        }
                    </div>
                </section>
                <section
                    className="board-column completed-column"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        handleTaskStatus(e, "completed")
                    }}
                >
                    <h2>Done</h2>
                    <div className="task-list">

                        {
                            tasks
                                .filter((task) => task.status === "completed")
                                .map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />)
                        }
                    </div>
                </section>
            </div>
        </main >
    )
}

export default Board