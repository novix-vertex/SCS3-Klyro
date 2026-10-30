import TaskCard from "./TaskCard"

const Board = ({ tasks, onDeleteTask, onEditTask }) => {
    return (
        <main>
            <div className="board">
                <section className="board-column">
                    <h2>To Do</h2>
                    {
                        tasks
                            .filter((task) => task.status === "todo")
                            .map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />)
                    }
                </section>
                <section className="board-column">
                    <h2>In Progress</h2>
                    {
                        tasks
                            .filter((task) => task.status === "ongoing")
                            .map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />)
                    }
                </section>
                <section className="board-column">
                    <h2>Done</h2>
                    {
                        tasks
                            .filter((task) => task.status === "completed")
                            .map((task) => <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />)
                    }
                </section>
            </div>
        </main>
    )
}

export default Board