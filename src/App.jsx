import Board from "./components/Board"
import Header from "./components/Header"
import TaskModal from "./components/TaskModal";
import useTasks from "./hooks/useTasks";
import useModal from "./hooks/useModel";

const App = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { tasks, addTask, deleteTask } = useTasks();

  const handleAddTask = (formData) => {
    addTask(formData);
    closeModal();
  };

  return (
    <div>
      <Header onAddTask={openModal} />
      <Board
        tasks={tasks}
        onDeleteTask={deleteTask}
      />
      <TaskModal
        isModalOpen={isModalOpen}
        onModalClose={closeModal}
        onTaskSubmit={handleAddTask}
      />
    </div>
  )
}

export default App