import newLogo from './new-logo.png';
import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Admin from './Admin_Dashboard';
import Student from './Student_Dashboard';
import SubjectTeacher from './SubTeacher_Dashboard';
import StudentReferencePage from './StudentReferencePage'; // Import the new component

// Function to render the Admin component
function handleAdmin() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Admin />
    </React.StrictMode>
  );
}

// Function to render the Student component
function handleStudent() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Student />
    </React.StrictMode>
  );
}

// Function to render the SubjectTeacher component
function handleSubjectTeacher() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <SubjectTeacher />
    </React.StrictMode>
  );
}

// Function to render the StudentReferencePage component
function handleStudentReferencePage() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <StudentReferencePage />
    </React.StrictMode>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={newLogo} className="App-logo" alt="logo" />
        <p>
          Welcome to Academia Application
        </p>
        <button onClick={handleAdmin}>Open Admin Dashboard</button>
        <button onClick={handleStudent}>Open Student Dashboard</button>
        <button onClick={handleSubjectTeacher}>Open Subject Teacher Dashboard</button>
        <button onClick={handleStudentReferencePage}>Open Student Reference Page</button>
      </header>
    </div>
  );
}

export default App;