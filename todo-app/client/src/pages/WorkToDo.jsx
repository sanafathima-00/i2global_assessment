import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";
import AddTaskButton from "../components/AddTaskButton";
import AddTask from "./AddTask";
import "./WorkToDo.css";

const WorkToDo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete project proposal", completed: true, dueDate: "Oct 25", priority: "High" },
    { id: 2, text: "Prepare presentation slides", completed: false, dueDate: "Oct 28", priority: "Medium" },
    { id: 3, text: "Email progress report", completed: false, dueDate: "Nov 2", priority: "Low" },
  ]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const completedCount = tasks.filter((t) => t.completed).length;

  const handleAddTask = () => {
    setIsAddTaskModalOpen(true);
  };

  const handleSaveTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      text: taskData.title,
      completed: false,
      dueDate: taskData.dueDate,
      priority: taskData.priority,
      category: taskData.category,
      description: taskData.description,
    };
    setTasks([...tasks, newTask]);
  };

  const handleCloseModal = () => {
    setIsAddTaskModalOpen(false);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="work-todo-container">
      <h2 className="page-title">
        Work To-Dos <span>({completedCount}/{tasks.length} completed)</span>
      </h2>

      <div className="work-todo-card">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
        <AddTaskButton onClick={handleAddTask} />
      </div>

      <AddTask
        isOpen={isAddTaskModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default WorkToDo;
