import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Card from "../components/common/Card";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";
import Button from "../components/common/Button";
import AddTask from "./AddTask";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/api";
import "./WorkToDo.css";

const WorkToDo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const todos = await getTodos();
      setTasks(todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  const handleAddTask = () => {
    setIsAddTaskModalOpen(true);
  };

  const handleSaveTask = async (taskData) => {
    try {
      if (editingTask) {
        // Editing existing task
        const updatedTodo = await updateTodo(editingTask.id, {
          title: taskData.title,
          description: taskData.description,
          due_date: taskData.dueDate,
          priority: taskData.priority,
        });
        setTasks(tasks.map((t) => (t.id === editingTask.id ? updatedTodo : t)));
      } else {
        // Creating new task
        const newTodo = {
          title: taskData.title,
          description: taskData.description,
          completed: false,
          due_date: taskData.dueDate,
          priority: taskData.priority,
        };
        const createdTodo = await createTodo(newTodo);
        setTasks([...tasks, createdTodo]);
      }
      setIsAddTaskModalOpen(false);
      setEditingTask(null);
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  const handleCloseModal = () => {
    setIsAddTaskModalOpen(false);
    setEditingTask(null);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsAddTaskModalOpen(true);
  };

  const toggleComplete = async (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    try {
      const updatedTodo = await updateTodo(id, { completed: !task.completed });
      setTasks(tasks.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTodo(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

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
          onEdit={handleEditTask}
        />
        <Button onClick={handleAddTask}>+ Add New Task</Button>
      </Card>

      <AddTask
        isOpen={isAddTaskModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        editingTask={editingTask}
      />
    </div>
  );
};

export default WorkToDo;
