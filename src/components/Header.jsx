const Header = ({ onAddTask }) => {
    return (
        <header>
            <h1>Klyro</h1>
            <button onClick={onAddTask}>+ Add Task</button>
        </header>
    )
}

export default Header