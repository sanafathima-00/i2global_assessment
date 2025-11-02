import React from 'react';
import './AddTaskField.css';

const AddTaskField = ({ type, name, placeholder, value, onChange, min, options }) => {
  const isRequired = name === 'dueDate' || name === 'priority';

  if (type === 'select') {
    return (
      <div className="add-task-field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="add-task-input"
          required={isRequired}
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
        placeholder={isRequired ? `${placeholder} *` : placeholder}
        value={value}
        onChange={onChange}
        min={min}
        className="add-task-input"
        required={isRequired}
      />
    </div>
  );
};

export default AddTaskField;
