// src/components/Course/CourseList.js
import React from 'react';
import CourseItem from './CourseItem';
import './CourseStyles.css';

const CourseList = ({ courses, onEdit, onDelete }) => (
  <div className="course-list">
    {courses.map(course => (
      <CourseItem 
        key={course.courseId} 
        course={course} 
        onEdit={onEdit} 
        onDelete={onDelete} 
      />
    ))}
  </div>
);

export default CourseList;
