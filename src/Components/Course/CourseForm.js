// src/components/Course/CourseForm.js
import React, { useState } from 'react';
import './CourseStyles.css';

const CourseForm = ({ onSubmit, course }) => {
  const [formData, setFormData] = useState({
    title: course?.title || '',
    description: course?.description || '',
    semester: course?.semester || '',
    instructor: course?.instructor || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <label>Title</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      <label>Semester</label>
      <select name="semester" value={formData.semester} onChange={handleChange} required>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Fall">Fall</option>
        <option value="Winter">Winter</option>
      </select>

      <label>Instructor</label>
      <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} required />

      <button type="submit">Save Course</button>
    </form>
  );
};

export default CourseForm;
