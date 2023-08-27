import React, { useState, useEffect } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses/') // This will be proxied to http://localhost:8000/api/courses/
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.title}>
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
