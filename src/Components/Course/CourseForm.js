// src/components/Course/CourseForm.js
import React, { useState, useEffect } from 'react';

const CourseForm = ({ initialCourse, onSave, onCancel }) => {
  const [title, setTitle] = useState(initialCourse?.title || '');
  const [description, setDescription] = useState(initialCourse?.description || '');
  const [semester, setSemester] = useState(initialCourse?.semester || '');
  const [instructor, setInstructor] = useState(initialCourse?.instructor || '');
  const [image, setImage] = useState(initialCourse?.image || '');

  useEffect(() => {
    if (initialCourse) {
      setTitle(initialCourse.title);
      setDescription(initialCourse.description);
      setSemester(initialCourse.semester);
      setInstructor(initialCourse.instructor);
      setImage(initialCourse.image);
    }
  }, [initialCourse]);

  const handleSave = () => {
    const newCourse = {
      ...initialCourse,
      title,
      description,
      semester,
      instructor,
      image,
      enrolledList: initialCourse ? initialCourse.enrolledList : [],
    };
    onSave(newCourse);
  };

  return (
    <div className="course-form">
      <h2>{initialCourse ? 'Edit Course' : 'Add Course'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Semester"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      />
      <input
        type="text"
        placeholder="Instructor"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button onClick={handleSave}>{initialCourse ? 'Update Course' : 'Create Course'}</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default CourseForm;
