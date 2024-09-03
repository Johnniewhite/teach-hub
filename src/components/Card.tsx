import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, children }) => {
  return (
    <div className="card fade-in">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;