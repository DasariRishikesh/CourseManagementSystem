import React, { useState, useEffect } from 'react';

function ApiCourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/course-list/') // This will be proxied to http://localhost:8000/api/course-list/
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h2>API Course List</h2>
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

export default ApiCourseList;
