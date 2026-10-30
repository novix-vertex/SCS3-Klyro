import logo from "../assets/logo.png";
const Header = ({
    onAddTask,
    searchText,
    onSearchChange,
    priorityFilter,
    onPriorityChange,
    statusFilter,
    onStatusChange
}) => {
    return (
        <header>
            <div className="header-logo-section">
                <img src={logo} className="logo" alt="Klyro logo" />
                <h1>Klyro</h1>
            </div>

            <div className="header-actions">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchText}
                    onChange={(e) => onSearchChange(e.target.value)}
                />

                <select
                    value={priorityFilter}
                    onChange={(e) => onPriorityChange(e.target.value)}
                >
                    <option value="all">All Priorities</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <select
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                >
                    <option value="all">All Statuses</option>
                    <option value="todo">To Do</option>
                    <option value="ongoing">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button onClick={onAddTask}>+ Add Task</button>
            </div>
        </header>
    );
};

export default Header;