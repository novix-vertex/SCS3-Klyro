import TaskCard from "./TaskCard"

const Board = () => {
    const tasks = [
        {
            id: 1,
            title: "Build Login Page",
            description: "Create login form",
            priority: "High",
            dueDate: "2026-11-05",
            status: "todo"
        },
        {
            id: 2,
            title: "Create Dashboard",
            description: "Design the main dashboard",
            priority: "Medium",
            dueDate: "2026-11-08",
            status: "todo"
        },
        {
            id: 3,
            title: "Setup API",
            description: "Connect backend API",
            priority: "Low",
            dueDate: "2026-11-10",
            status: "in-progress"
        }
    ];
    return (
        <main>
            <div className="board">
                <section className="board-column">
                    <h2>To Do</h2>
                    {
                        tasks.map((task) => <TaskCard key={task.id} task={task} />)
                    }
                </section>
                <section className="board-column">
                    <h2>In Progress</h2>
                </section>
                <section className="board-column">
                    <h2>Done</h2>
                </section>
            </div>
        </main>
    )
}

export default Board