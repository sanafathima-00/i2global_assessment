import React from 'react';
import './FormField.css';

const FormField = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
  disabled = false,
  min,
  max,
  step,
  options = [], // For select inputs
  variant = 'filled',
  className = '',
  showRequiredIndicator = true,
  ...props
}) => {
  const fieldClass = `common-form-field common-form-field-${variant} ${className}`.trim();

  const renderField = () => {
    if (type === 'select') {
      const selectClass = `${fieldClass} ${value === '' ? 'common-form-field-placeholder' : ''}`.trim();
      return (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={selectClass}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={fieldClass}
          {...props}
        />
      );
    }

    const inputClass = `${fieldClass} ${value === '' ? 'common-form-field-placeholder' : ''}`.trim();
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        className={inputClass}
        {...props}
      />
    );
  };

  return (
    <div className="common-form-field-wrapper">
      {label && (
        <label htmlFor={name} className="common-form-field-label">
          {label}
          {required && showRequiredIndicator && <span className="common-form-field-required"></span>}
        </label>
      )}
      {renderField()}
    </div>
  );
};

export default FormField;
