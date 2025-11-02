import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, toggleComplete, deleteTask, onEdit }) => {
  const { id, title, completed, description, due_date, priority } = task;

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="task-item">
      {/* ---------- Left Side ---------- */}
      <div className="task-left">
        <div
          className={`custom-checkbox ${completed ? "checked" : ""}`}
          onClick={() => toggleComplete(id)}
        >
          {completed && <i className="fa-solid fa-check"></i>}
        </div>

        <span className={`task-text ${completed ? "completed" : ""}`}>
          {title}
        </span>
      </div>

      {/* ---------- Right Side ---------- */}
      <div className="task-right">
        {due_date && <span className="task-pill">Due: {formatDate(due_date)} </span>}
        {priority && <span className={`priority-tag ${priority.toLowerCase()}`}>{priority}</span>}
        {description && <span className="task-pill">{description}</span>}

        <i
          className="fa-solid fa-trash-alt delete-icon"
          onClick={() => deleteTask(id)}
        ></i>

        <i
          className="fa-solid fa-chevron-right edit-icon"
          onClick={() => onEdit(task)}
        ></i>
        
      </div>
    </div>
  );
};

export default TaskItem;
