// JobPostingForm.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Commented out for now, uncomment when you have an API
import "./JobCreationPage.css";

const JobCreationPage = () => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    postName: "",
    jobDescription: "",
    minExperience: "",
    location: "",
    skills: "",
    noticePeriod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Commented out for now, uncomment when you have an API
      /*
      const apiUrl = "https://example.com/api/jobpost";
      const response = await axios.post(apiUrl, postData);
      console.log("API Response:", response.data);
      */
      console.log("Posting data:", postData);

      // Reset the form after successful submission
      setPostData({
        postName: "",
        jobDescription: "",
        minExperience: "",
        location: "",
        skills: "",
        noticePeriod: "",
      });

      // You can redirect to another page or perform other actions here
      // For demonstration purposes, it navigates to the home page
      navigate("/Home");
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="job-posting-container">
      <h1>Job Posting Form</h1>
      <form>
        <div>
          <label>Role:</label>
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
        <div>
          <label>Notice Period:</label>
          <input
            type="text" // You mentioned the input type is string
            name="noticePeriod"
            value={postData.noticePeriod}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Post
        </button>
      </form>
    </div>
  );
};

export default JobCreationPage;