import React from 'react';
import './AddTaskField.css';

const AddTaskField = ({ type, name, placeholder, value, onChange, min, options }) => {
  if (type === 'select') {
    return (
      <div className="add-task-field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="add-task-input"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="add-task-field">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        className="add-task-input"
      />
    </div>
  );
};

export default AddTaskField;
