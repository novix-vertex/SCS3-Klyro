import Board from "./components/Board"
import Header from "./components/Header"
import TaskModal from "./components/TaskModal";
import useTasks from "./hooks/useTasks";
import useModal from "./hooks/useModel";
import { useState } from "react";

const App = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { tasks,
    addTask,
    deleteTask,
    editTask,
    updateTaskStatus,
    searchTasks } = useTasks();

  const [editingTask, setEditingTask] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleEditClick = (task) => {
    setEditingTask(task);
    openModal();
  };
  const handleTaskSubmit = (formData) => {
    if (editingTask) {
      editTask(editingTask.id, formData);
    } else {
      addTask(formData);
    }

    setEditingTask(null);
    closeModal();
  };
  const filteredTasks = searchTasks(searchText.trim()).filter((task) => {
    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;

    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    return matchesPriority && matchesStatus;
  });

  return (
    <div>
      <Header
        onAddTask={openModal}
        searchText={searchText}
        onSearchChange={setSearchText}
        priorityFilter={priorityFilter}
        onPriorityChange={setPriorityFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />
      <Board
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onEditTask={handleEditClick}
        onUpdateTaskStatus={updateTaskStatus}
      />
      <TaskModal
        isModalOpen={isModalOpen}
        onModalClose={closeModal}
        onTaskSubmit={handleTaskSubmit}
        editingTask={editingTask}
      />
    </div>
  )
}

export default App