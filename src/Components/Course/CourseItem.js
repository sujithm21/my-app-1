// src/components/Course/CourseItem.js
import React from 'react';
import './CourseStyles.css';

const CourseItem = ({ course, onEdit, onDelete }) => (
  <div className="course-item">
    <img src={course.image} alt={course.title} />
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <p className="instructor">Instructor: {course.instructor}</p>
    <p className="semester">Semester: {course.semester}</p>
    <p className="status">{course.enrolledList.length > 0 ? "Enrolled" : "Not Enrolled"}</p>

    {/* Show Edit and Delete buttons only for enrolled courses */}
    {onEdit && onDelete && (
      <div className="course-actions">
        <button className="button-primary" onClick={() => onEdit(course)}>Edit</button>
        <button className="button-secondary" onClick={() => onDelete(course.id)}>Delete</button>
      </div>
    )}
  </div>
);

export default CourseItem;
