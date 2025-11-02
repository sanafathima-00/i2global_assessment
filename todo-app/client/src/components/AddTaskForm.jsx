import React from 'react';
import FormField from './common/FormField';
import './AddTaskForm.css';

const AddTaskForm = ({ formData, handleInputChange, today }) => {
  return (
    <div className="add-task-form">
      <div className="add-task-section">
        <FormField
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="add-task-section add-task-attributes-grid">
        <FormField
          type="date"
          name="startDate"
          label="Start Date"
          placeholder="dd-mm-yyyy"
          value={formData.startDate}
          onChange={handleInputChange}
          min={today}
        />
        <FormField
          type="select"
          name="category"
          label="Category"
          value={formData.category}
          onChange={handleInputChange}
          options={[
            { value: '', label: 'Select' },
            { value: 'Projects', label: 'Projects' },
            { value: 'Work', label: 'Work' },
            { value: 'Study', label: 'Study' },
          ]}
        />
        <FormField
          type="date"
          name="dueDate"
          label="Due Date"
          placeholder="dd-mm-yyyy"
          value={formData.dueDate}
          onChange={handleInputChange}
          min={formData.startDate || today}
          required
          showRequiredIndicator={false}
        />
        <FormField
          type="select"
          name="priority"
          label="Priority"
          value={formData.priority}
          onChange={handleInputChange}
          options={[
            { value: '', label: 'Select' },
            { value: 'High', label: 'High' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Low', label: 'Low' },
          ]}
          required
          showRequiredIndicator={false}
        />
      </div>

      <div className="add-task-section">
        <FormField
          type="textarea"
          name="description"
          placeholder="Add a description..."
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AddTaskForm;
