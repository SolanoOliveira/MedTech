// CategoryCard.js
import React from 'react';

const CategoryCard = ({ categoryName, backgroundColor }) => {
  return (
    <div className="category-card" style={{ backgroundColor: backgroundColor }}>
      <div className="category-name">{categoryName}</div>
    </div>
  );
};

export default CategoryCard;
