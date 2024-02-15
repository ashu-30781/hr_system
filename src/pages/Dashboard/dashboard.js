import React, { useState } from 'react';
import "./dashboard.css";
import CandidateSummary from '../CandidateSummary/CandidateSummary';
import JobCreationPage from '../Job/JobCreationPage'
// import Login from "../Login/Login"
import JobListingPage from '../Job/JobListingPage';
// import ParentComponent from '../Job/ParentComponent';


const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard"); // Default selected option

  const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 h-screen">
        <div className="p-4 text-white sidebar">
          <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className={`block text-gray-300 hover:text-white ${selectedOption === 'Dashboard' ? 'font-bold' : ''}`} onClick={() => handleSidebarClick('Dashboard')}>Dashboard</a>
            </li>
            <li className="mb-2">
              <a href="#" className={`block text-gray-300 hover:text-white ${selectedOption === 'JobCreation' ? 'font-bold' : ''}`} onClick={() => handleSidebarClick('JobCreation')}>JobCreation</a>
            </li>
            <li className="mb-2">
              <a href="#JobListings" className={`block text-gray-300 hover:text-white ${selectedOption === 'JobListings' ? 'font-bold' : ''}`} onClick={() => handleSidebarClick('JobListings')}>JobListings</a>
            </li>

            {/* Add more sidebar links as needed */}
          </ul>
        </div>
      </div>
      {/* Main content */}
      <div className="w-3/4 bg-white h-screen">
        <div className="p-4 main-content">
          <h1 className="text-2xl font-semibold mb-4 uplo">{selectedOption}</h1>
          {selectedOption === 'Dashboard' && <CandidateSummary />}
          {selectedOption === 'JobCreation' && <JobCreationPage />}
          {selectedOption === 'JobListings' && <JobListingPage />}
          {/* Render CandidateSummary when Dashboard option is selected */}
          <p>This is the main content area of your {selectedOption}.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
