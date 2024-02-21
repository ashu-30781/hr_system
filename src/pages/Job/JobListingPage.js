import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobListingPage.css';

const JobListingPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('0');
  const [jobName, setJobName] = useState('');

  useEffect(() => {
    fetchJobListings();
  }, [pageIndex, jobType, experience, jobName]);

  const fetchJobListings = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://jobs-api14.p.rapidapi.com/list',
      params: {
        query: jobName || 'Web Developer',
        location: 'United States',
        distance: '1.0',
        language: 'en_GB',
        remoteOnly: 'false',
        datePosted: 'month',
        employmentTypes: jobType || 'fulltime;parttime;intern;contractor',
        experience: experience,
        index: pageIndex.toString()
      },
      headers: {
        'X-RapidAPI-Key': 'ad29c29c72msh721dc258fec300dp16bba3jsn82e5c51e21c1',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setJobListings((prevListings) => [...prevListings, ...response.data.jobs]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const toggleJobDetails = (jobId) => {
    setExpandedJobId((prevId) => (prevId === jobId ? null : jobId));
  };

  const handleApply = (job) => {
    const queryString = `?title=${job.title}&company=${job.company}&description=${job.description}&type=${job.type}&location=${job.location}`;
    window.location.href = `/CandidateSummary${queryString}`;
  };

  const handleLoadMore = () => {
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
    setPageIndex(0);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
    setPageIndex(0);
  };

  const handleJobNameChange = (e) => {
    setJobName(e.target.value);
    setPageIndex(0);
  };

  const handleApplyFilter = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setPageIndex(0);
    setJobListings([]);
    fetchJobListings();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='contaner'>
      <div className="top-bar">
        <label htmlFor="jobType">Job Type:</label>
        <select id="jobType" className='space-btw' value={jobType} onChange={handleJobTypeChange}>
          <option value="">All</option>
          <option value="fulltime">Full-time</option>
          <option value="parttime">Part-time</option>
          <option value="intern">Intern</option>
          <option value="contractor">Contractor</option>
        </select>
        <label htmlFor="experience">Experience:</label>
        <select id="experience" value={experience} onChange={handleExperienceChange}>
          <option value="0">All</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          {/* Add more experience options */}
        </select>
        <label htmlFor="jobName">Job Name:</label>
        <input type="text" className='serch-bar' id="jobName" value={jobName} onChange={handleJobNameChange} />
        <button className='filter-btn' onClick={(e) => handleApplyFilter(e)}>Apply Filter</button> {/* Apply Filter button */}
      </div>
      <ul className="job-listings">
        {jobListings.map((job, index) => (
          <li key={index} className="job-listing">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            {expandedJobId === index && (
              <div className="job-details">
                <p>{job.description}</p>
                <p>Type: {job.type}</p>
                <p>Location: {job.location}</p>
              </div>
            )}
            <button className="show-more-btn" onClick={() => toggleJobDetails(index)}>
              {expandedJobId === index ? 'Show Less' : 'Show More'}
            </button>
            <button className="apply-btn redirectButton" onClick={() => handleApply(job)}>Apply</button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default JobListingPage;
