// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import CourseItem from './Components/Course/CourseItem';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/SignUp';
import CourseForm from './Components/Course/CourseForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [view, setView] = useState("home"); // New view state
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming in Python.',
      semester: 'Spring 2024',
      instructor: 'Dr. John Doe',
      enrolledList: [1, 2],
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      description: 'An in-depth study of data structures and algorithms.',
      semester: 'Fall 2024',
      instructor: 'Prof. Jane Smith',
      enrolledList: [],
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (token && storedUser) {
      setIsLoggedIn(true);
      setUserId(storedUser.id);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserId(null);
    setView("home");
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(true);
    setUserId(storedUser.id);
  };

  // Create Course function
  const handleCreateCourse = (newCourse) => {
    const newCourseWithEnrollment = {
      ...newCourse,
      enrolledList: [...newCourse.enrolledList, userId], // Add the logged-in user to the enrolled list
      id: courses.length + 1, // Assuming we add the new course with the next available ID
    };
    setCourses((prevCourses) => [...prevCourses, newCourseWithEnrollment]);
    setView("home"); // Switch to home view after course is created
  };

  const handleEditCourse = (updatedCourse) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
    setEditingCourse(null);
    setView("home");
  };

  const handleDeleteCourse = (courseId) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
  };

  const enrolledCourses = courses.filter((course) => course.enrolledList.includes(userId));
  const unenrolledCourses = courses.filter((course) => !course.enrolledList.includes(userId));

  return (
    <div className="App">
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onSelectView={(view) => setView(view)}
      />

      {!isLoggedIn ? (
        <div className="auth-buttons">
          <Signup onSignup={handleLogin} />
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <div>
          {view === "home" && (
            <>
              <h1>Enrolled Courses</h1>
              <div className="course-list">
                {enrolledCourses.length === 0 ? (
                  <p>No enrolled courses</p>
                ) : (
                  enrolledCourses.map((course) => (
                    <CourseItem
                      key={course.id}
                      course={course}
                      onEdit={() => {
                        setEditingCourse(course);
                        setView("edit");
                      }}
                      onDelete={handleDeleteCourse}
                    />
                  ))
                )}
              </div>

              <h1>Unenrolled Courses</h1>
              <div className="course-list">
                {unenrolledCourses.length === 0 ? (
                  <p>No available courses to enroll</p>
                ) : (
                  unenrolledCourses.map((course) => (
                    <CourseItem key={course.id} course={course} />
                  ))
                )}
              </div>
            </>
          )}

          {view === "edit" && enrolledCourses.length > 0 && (
            <>
              <h1>Edit Enrolled Courses</h1>
              <div className="course-list">
                {enrolledCourses.map((course) => (
                  <CourseItem
                    key={course.id}
                    course={course}
                    onEdit={() => {
                      setEditingCourse(course);
                      setView("edit");
                    }}
                    onDelete={handleDeleteCourse}
                  />
                ))}
              </div>
            </>
          )}

          {view === "create" && (
            <CourseForm onSave={handleCreateCourse} onCancel={() => setView("home")} />
          )}

          {view === "edit" && editingCourse && (
            <CourseForm
              initialCourse={editingCourse}
              onSave={handleEditCourse}
              onCancel={() => setView("home")}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;

