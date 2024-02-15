// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from "./pages/Dashboard/dashboard";
import JobListingPage from './pages/Job/JobListingPage'
import JobCreationPage from './pages/Job/JobCreationPage'
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
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/JobListingPage" element={<JobListingPage />} />
          <Route path="/JobCreationPage" element={<JobCreationPage />} />
          {/* Uncomment and add more routes as needed */}
          {/* <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/cv-form" element={<CVForm />} />
          <Route path="/interview-scheduling" element={<InterviewScheduling />} />
          <Route path="/user-management" element={<UserManagement />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
