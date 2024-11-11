// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import CourseItem from './Components/Course/CourseItem';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming in Python.',
      semester: 'Spring 2024',
      instructor: 'Dr. John Doe',
      enrolled: true,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      description: 'An in-depth study of data structures and algorithms.',
      semester: 'Fall 2024',
      instructor: 'Prof. Jane Smith',
      enrolled: false,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Machine Learning',
      description: 'Introduction to machine learning concepts and applications.',
      semester: 'Summer 2024',
      instructor: 'Dr. Alice Johnson',
      enrolled: true,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  useEffect(() => {
    // Check if the user is logged in by checking Local Storage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {!isLoggedIn ? (
        <div className="auth-buttons">
          <Signup onSignup={handleLogin} />
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <div>
          <h1>My Courses</h1>
          <div className="course-list">
            {courses.map((course) => (
              <CourseItem
                key={course.id}
                course={course}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
