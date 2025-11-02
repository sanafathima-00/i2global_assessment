import React from "react";
import "./AddTaskButton.css";

const AddTaskButton = ({ onClick }) => {
  return (
    <div className="add-task-container">
      <button className="add-task-btn" onClick={onClick}>
        + Add New Task
      </button>
    </div>
  );
};

export default AddTaskButton;
