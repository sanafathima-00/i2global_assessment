import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  loading = false,
  icon,
  type = 'button',
  className = '',
  ...props
}) => {
  const buttonClass = `common-button common-button-${variant} common-button-${size} ${loading ? 'common-button-loading' : ''} ${icon ? 'common-button-with-icon' : ''} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {icon && <span className="common-button-icon">{icon}</span>}
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
