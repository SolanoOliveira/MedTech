// CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card course-card" style={{ width: '18rem', margin: '10px' }}>
      <img src={imageUrl} className="card-img-top" alt="Course" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
