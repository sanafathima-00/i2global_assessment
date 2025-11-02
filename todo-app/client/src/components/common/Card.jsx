import React from 'react';
import './Card.css';

const Card = ({
  children,
  className = '',
  padding = 'medium',
  shadow = true,
  borderRadius = 'medium',
  variant = 'filled',
  ...props
}) => {
  const cardClass = `common-card common-card-padding-${padding} common-card-radius-${borderRadius} common-card-variant-${variant} ${shadow ? 'common-card-shadow' : ''} ${className}`.trim();

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

export default Card;
