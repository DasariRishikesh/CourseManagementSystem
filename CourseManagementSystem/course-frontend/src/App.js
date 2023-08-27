import React from 'react';
import CourseList from './components/CourseList';
import ApiCourseList from './components/ApiCourseList';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <CourseList /> {/* Render the CourseList component */}
      <ApiCourseList /> {/* Render the ApiCourseList component */}
    </div>
  );
}

export default App;
