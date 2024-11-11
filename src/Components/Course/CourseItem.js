import React from 'react';
import './CourseStyles.css';

const CourseItem = ({ course, onEdit, onDelete }) => (
  <div className="course-item">
    <img src={course.image} alt={course.title} />
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <p className="instructor">Instructor: {course.instructor}</p>
    <p className="semester">Semester: {course.semester}</p>
    <p className="status">{course.enrolled ? "Enrolled" : "Not Enrolled"}</p>

    <div className="course-actions">
      <button className="button-primary" onClick={() => onEdit(course)}>Edit</button>
      <button className="button-secondary" onClick={() => onDelete(course.id)}>Delete</button>
    </div>
  </div>
);

export default CourseItem;
