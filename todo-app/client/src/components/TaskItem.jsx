import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  const { id, text, completed, dueDate, priority } = task;

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
          {text}
        </span>
      </div>

      {/* ---------- Right Side ---------- */}
      <div className="task-right">
        {dueDate && <span className="task-pill">Due: {dueDate}</span>}

        {priority && (
          <span className={`priority-tag ${priority.toLowerCase()}`}>
            {priority}
          </span>
        )}

        <i
          className="fa-solid fa-trash-alt delete-icon"
          onClick={() => deleteTask(id)}
        ></i>
      </div>
    </div>
  );
};

export default TaskItem;
