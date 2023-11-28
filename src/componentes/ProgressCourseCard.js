// ProgressCourseCard.js
import React from 'react';

const ProgressCourseCard = ({ title, imageUrl, progress }) => {
  return (
    <div className="progress-course-card">
      <img src={imageUrl} alt={title} className="progress-course-image" />
      <div className="progress-course-info">
        <h3>{title}</h3>
        <div className="progress-bar-background">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCourseCard;
