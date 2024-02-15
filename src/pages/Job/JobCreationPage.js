import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Job.css';

const JobCreationPage = () => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    postName: '',
    jobDescription: '',
    minExperience: '',
    location: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // You can replace this with your API endpoint
    // For demonstration purposes, it logs the data to the console
    console.log('Posting data:', postData);

    // Reset the form after submission
    setPostData({
      postName: '',
      jobDescription: '',
      minExperience: '',
      location: '',
      skills: '',
    });

    // You can redirect to another page or perform other actions here
    // For demonstration purposes, it navigates to the home page
    navigate('/');
  };

  return (
    <div className='space'>
      <div className="job-posting-container main-content">
        <h1>Job Posting Form</h1>
        <form>
          <div>
            <label>Post Name:</label>
            <input
              type="text"
              name="postName"
              value={postData.postName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Job Description:</label>
            <textarea
              name="jobDescription"
              value={postData.jobDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Minimum Experience (Years):</label>
            <input
              type="number"
              name="minExperience"
              value={postData.minExperience}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={postData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Skills:</label>
            <input
              type="text"
              name="skills"
              value={postData.skills}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobCreationPage;