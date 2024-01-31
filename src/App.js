// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login/Login';
import CandidateSummary from './pages/CandidateSummary/CandidateSummary';
// import RegistrationForm from './components/RegistrationForm/RegistrationForm';
// import CVForm from './components/CVForm/CVForm';
// import InterviewScheduling from './components/InterviewScheduling/InterviewScheduling';
// import UserManagement from './components/UserManagement/UserManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CandidateSummary" element={<CandidateSummary />} />
          {/* <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/cv-form" element={<CVForm />} />
          <Route path="/interview-scheduling" element={<InterviewScheduling />} />
          <Route path="/user-management" element={<UserManagement />} />  */}
          {/* {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
