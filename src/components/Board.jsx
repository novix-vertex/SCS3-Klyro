import TaskCard from "./TaskCard"

const Board = () => {
    return (
        <main>
            <div className="board">
                <div className="board-column">
                    <h2>To Do</h2>
                </div>
                <div className="board-column">
                    <h2>In Progress</h2>
                </div>
                <div className="board-column">
                    <h2>Done</h2>
                </div>
            </div>
        </main>
    )
}

export default Board