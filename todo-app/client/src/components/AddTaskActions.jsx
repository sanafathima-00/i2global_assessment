import React from 'react';
import './AddTaskActions.css';

const AddTaskActions = ({ onClose, onSave }) => {
  return (
    <div className="add-task-actions">
      <button onClick={onClose} className="add-task-btn add-task-cancel-btn">
        Cancel
      </button>
      <button onClick={onSave} className="add-task-btn add-task-save-btn">
        Save Task
      </button>
    </div>
  );
};

export default AddTaskActions;
