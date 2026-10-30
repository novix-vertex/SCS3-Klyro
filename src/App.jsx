import Board from "./components/Board"
import Header from "./components/Header"
import TaskModal from "./components/TaskModal";
import useTasks from "./hooks/useTasks";
import useModal from "./hooks/useModel";
import { useState } from "react";

const App = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { tasks, addTask, deleteTask, editTask } = useTasks();

  const [editingTask, setEditingTask] = useState(null);

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

  return (
    <div>
      <Header onAddTask={openModal} />
      <Board
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={handleEditClick}
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