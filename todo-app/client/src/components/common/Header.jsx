import React from 'react';
import './Header.css';

const Header = ({
  title,
  subtitle,
  level = 1, // h1, h2, etc.
  align = 'center',
  className = '',
  ...props
}) => {
  const Tag = `h${level}`;
  const headerClass = `common-header common-header-${level} common-header-align-${align} ${className}`.trim();

  return (
    <Tag className={headerClass} {...props}>
      {title}
      {subtitle && <span className="common-header-subtitle">{subtitle}</span>}
    </Tag>
  );
};

export default Header;
