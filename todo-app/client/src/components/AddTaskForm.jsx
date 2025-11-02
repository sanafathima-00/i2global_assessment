import React from 'react';
import AddTaskField from './AddTaskField';
import './AddTaskForm.css';

const AddTaskForm = ({ formData, handleInputChange, today }) => {
  return (
    <div className="add-task-form">
      <div className="add-task-section">
        <input
          type="text"
          name="title"
          placeholder="Task Title *"
          value={formData.title}
          onChange={handleInputChange}
          className="add-task-input add-task-title-input"
          required
        />
      </div>

      <div className="add-task-section add-task-attributes-grid">
        <AddTaskField
          type="date"
          name="startDate"
          placeholder="dd-mm-yyyy"
          value={formData.startDate}
          onChange={handleInputChange}
          min={today}
        />
        <AddTaskField
          type="select"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          options={[
            { value: '', label: 'Select' },
            { value: 'Projects', label: 'Projects' },
            { value: 'Work', label: 'Work' },
            { value: 'Study', label: 'Study' },
          ]}
        />
        <AddTaskField
          type="date"
          name="dueDate"
          placeholder="dd-mm-yyyy"
          value={formData.dueDate}
          onChange={handleInputChange}
          min={formData.startDate || today}
        />
        <AddTaskField
          type="select"
          name="priority"
          value={formData.priority}
          onChange={handleInputChange}
          options={[
            { value: '', label: 'Select' },
            { value: 'High', label: 'High' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Low', label: 'Low' },
          ]}
        />
      </div>

      <div className="add-task-section">
        <textarea
          name="description"
          placeholder="Add a description..."
          value={formData.description}
          onChange={handleInputChange}
          className="add-task-textarea"
        />
      </div>
    </div>
  );
};

export default AddTaskForm;
