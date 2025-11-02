import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, toggleComplete, deleteTask, onEdit }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet. Add one!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
