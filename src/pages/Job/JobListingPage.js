import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobListingPage.css';

const JobListingPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);

  useEffect(() => {
    const fetchJobListings = async () => {
      const options = {
        method: 'GET',
        url: 'https://jobs-api14.p.rapidapi.com/list',
        params: {
          query: 'Web Developer',
          location: 'United States',
          distance: '1.0',
          language: 'en_GB',
          remoteOnly: 'false',
          datePosted: 'month',
          employmentTypes: 'fulltime;parttime;intern;contractor',
          index: '0'
        },
        headers: {
          'X-RapidAPI-Key': '6e8a20946amsha1f388771cdd613p1fcff8jsnf562d6fbbf86',
          'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setJobListings(response.data.jobs); // Set jobListings state with fetched data
        setLoading(false); // Set loading state to false after successful fetch
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchJobListings();
  }, []);

  const toggleJobDetails = (jobId) => {
    setExpandedJobId((prevId) => (prevId === jobId ? null : jobId));
  };

  const handleApply = (job) => {
    // Redirect to a different page with job details included in the URL
    const queryString = `?title=${job.title}&company=${job.company}&description=${job.description}&type=${job.type}&location=${job.location}`;
    window.location.href = `/CandidateSummary${queryString}`;
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Job Listings</h1>
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
                {/* Add more details here */}
              </div>
            )}
            <button className="show-more-btn" onClick={() => toggleJobDetails(index)}>
              {expandedJobId === index ? 'Show Less' : 'Show More'}
            </button>
            <button className="apply-btn redirectButton" onClick={() => handleApply(job)}>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingPage;
