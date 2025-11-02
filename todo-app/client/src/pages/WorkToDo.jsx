import React, { useState } from "react";
import Header from "../components/common/Header";
import Card from "../components/common/Card";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";
import Button from "../components/common/Button";
import AddTask from "./AddTask";
import "./WorkToDo.css";

const WorkToDo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete project proposal", completed: true, dueDate: "2025-10-25", priority: "High" },
    { id: 2, text: "Prepare presentation slides", completed: false, dueDate: "2025-11-08", priority: "Medium" },
    { id: 3, text: "Email progress report", completed: false, dueDate: "2025-11-02", priority: "Low" },
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
      <Header
        title={`Work To-Dos (${completedCount}/${tasks.length} completed)`}
        level={2}
        align="center"
        className="page-title"
        style={{ marginTop: '75px' }}
      />

      <Card className="work-todo-card">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
        <Button onClick={handleAddTask}>+ Add New Task</Button>
      </Card>

      <AddTask
        isOpen={isAddTaskModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default WorkToDo;
