import React, { useState, useEffect } from "react";
import "./CandidateSummary.css";

function CandidateSummary() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "", // Added job title field
    companyName: "",
    graduationDegree: "",
    postGraduationDegree: "",
    phoneNumber: "",
    email: "",
    certifications: false,
    technicalSkills: "",
    projectName: "",
    technologyUsed: "",
    role: "",
    responsibilities: "",
    currentLocation: "",
    preferredLocation: "",
    currentCTC: "",
    expectedCTC: "",
    additionalInfo1: "",
    additionalInfo2: "",
    expectedCTC2: "",
    cv: null,

    // Additional state properties
    newProperty1: "",
    newProperty2: "",
    currentState: "", // Added current state field
    currentCountry: "", // Added current country field
    currentCity: "", // Added current city field
    currency: "", // Added currency field
  });

  useEffect(() => {
    // Function to retrieve job details from URL query parameters
    const getJobDetailsFromURL = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const jobTitle = searchParams.get('title');
      const companyName = searchParams.get('company');
      // Add logic to retrieve other job details from query parameters
      // Set the retrieved job details to the form data state
      setFormData(prevData => ({
        ...prevData,
        jobTitle: jobTitle || '',
        companyName: companyName || '',
        // Set other job details to the corresponding form fields
      }));
    };

    getJobDetailsFromURL();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [projectDetails, setProjectDetails] = useState([
    {
      projectName: "",
      technologyUsed: "",
      role: "",
      responsibilities: "",
    },
  ]);

  const handleProjectInputChange = (e, index) => {
    const { name, value } = e.target;

    setProjectDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index][name] = value;
      return updatedDetails;
    });
  };

  const handleDeleteProject = (index) => {
    setProjectDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails.splice(index, 1);
      return updatedDetails;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Handle form submission
    // Add your submission logic here

    // Your existing logic for creating FormData from form fields
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Submit the candidate data to the server
    try {
      const response = await fetch("/submit-candidate", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log("Candidate submitted successfully");

        // Add logic for any additional actions upon successful submission
        alert("Submit successful!");

        // Redirect to a different page after successful submission
        window.location.href = '/';  // Replace with your desired URL
      } else {
        // Handle error response from the API
        console.error("Error submitting candidate");
        // Add logic for error handling, if needed
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting candidate", error);
    }
    const redirectButton = document.getElementById('redirectButton');

    // Add a click event listener to the button
    redirectButton.addEventListener('click', () => {
      // Redirect to a different page
      alert("Submit  successful!");
      window.location.href = '/';  // Replace with your desired URL
    });


  };

  return (
    <div className="colores">
      <div className="container">
        <div className="first-cont">
          <h2>Add New Candidate</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Candidate's Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">Candidate's Full Name:*</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            {/* Job Title */}
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                // readOnly
                required
                onChange={handleInputChange}

              />
            </div>

            {/* Company Name */}
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                // readOnly
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Education Details */}
            <div className="form-group">
              <label>Education Details:*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Graduation Degree"
                name="graduationDegree"
                required
                value={formData.graduationDegree}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Post Graduation Degree"
                name="postGraduationDegree"
                value={formData.postGraduationDegree}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:*</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Email ID */}
            <div className="form-group">
              <label htmlFor="email">Email ID:*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Certifications */}
            <div className="form-group">
              <label htmlFor="certifications">Certifications:</label>
              <input
                type="text"
                id="certifications"
                name="certifications"
                checked={formData.certifications}
                onChange={handleInputChange}
              />
            </div>

            {/* Technical Skills (Textarea or Multiple Select) */}
            <div className="form-group">
              <label htmlFor="technicalSkills">Technical Skills:</label>
              <input
                type="text"
                className="form-control"
                id="technicalSkills"
                name="technicalSkills"
                rows="3"
                value={formData.technicalSkills}
                onChange={handleInputChange}
              ></input>
            </div>

            {/* Project Details */}
            <div className="form-group">
              <label htmlFor="projectName">Project Details:</label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
              />
              {/* ... (Add similar modifications for other project details) */}
            </div>

            {/* Location, CTC, Attach CV */}
            {/* ... (similar modifications for other existing form fields) */}
            <div className="form-group">
              <label htmlFor="currentState">Current State:</label>
              <input
                type="text"
                className="form-control"
                id="currentState"
                name="currentState"
                value={formData.currentState}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="currentCountry">Current Country:</label>
              <input
                type="text"
                className="form-control"
                id="currentCountry"
                name="currentCountry"
                value={formData.currentCountry}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="currentCity">Current City:</label>
              <input
                type="text"
                className="form-control"
                id="currentCity"
                name="currentCity"
                value={formData.currentCity}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="currency">Currency:</label>
              <input
                type="text"
                className="form-control"
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
              />
            </div>


          </form>

        </div>
        {/* Additional Information Section */}
        <div className="second-cont">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h3 className="mt-4">Additional Information</h3>
            <div className="form-group">
              {/* <label htmlFor="additionalInfo1">Current Location:</label>
              <input
                type="text"
                className="form-control"
                id="additionalInfo1"
                name="additionalInfo1"
                value={formData.additionalInfo1}
                onChange={handleInputChange}
              /> */}
            </div>
            <div className="form-group">
              <label htmlFor="PreferredLocation">Preferred Location:</label>
              <input
                type="text"
                className="form-control"
                id="PreferredLocation"
                name="PreferredLocation"
                value={formData.PreferredLocation}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="CurrentCTC">Current CTC:</label>
              <input
                type="text"
                className="form-control"
                id="CurrentCTC"
                name="CurrentCTC"
                value={formData.CurrentCTC}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expectedCTC">expected CTC:</label>
              <input
                type="text"
                className="form-control"
                id="expectedCTC"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Noticeperiod">Notice period:</label>
              <input
                type="text"
                className="form-control"
                id="Noticeperiod"
                name="Noticeperiod"

                value={formData.Noticeperiod}
                onChange={handleInputChange}
              />
            </div>

            {/* Attach CV */}
            <div className="form-group">
              <label htmlFor="cv">Attach CV (PDF, Word):*</label>
              <input
                type="file"
                className="form-control-file"
                id="cv"
                name="cv"
                accept=".pdf, .doc, .docx"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* Project Details */}
            {projectDetails.map((project, index) => (
              <div key={index} className="form-group">
                {/* Project Name */}
                <label htmlFor={`projectName${index}`}>Project Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="projectName"
                  name="projectName"
                  value={project.projectName}
                  onChange={(e) => handleProjectInputChange(e, index)}
                />

                {/* Technology Used */}
                {/* Add similar modifications for other project details, e.g., Technology Used */}
                <label htmlFor={`technologyUsed${index}`}>Technology Used:</label>
                <input
                  type="text"
                  className="form-control"
                  id="technologyUsed"
                  name="technologyUsed"
                  value={project.technologyUsed}
                  onChange={(e) => handleProjectInputChange(e, index)}
                />

                {/* Role */}
                {/* Add similar modifications for other project details, e.g., Role */}
                <label htmlFor={`role${index}`}>Role:</label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  name="role"
                  value={project.role}
                  onChange={(e) => handleProjectInputChange(e, index)}
                />

                {/* Responsibilities */}
                {/* Add similar modifications for other project details, e.g., Responsibilities */}
                <label htmlFor={`responsibilities${index}`}>Responsibilities:</label>
                <input
                  type="text"
                  className="form-control"
                  id="responsibilities"
                  name="responsibilities"
                  value={project.responsibilities}
                  onChange={(e) => handleProjectInputChange(e, index)}
                />

                {/* Delete button for project details */}
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  onClick={() => handleDeleteProject(index)}
                >
                  Remove
                </button>
              </div>
            ))}


            {/* Button to add more project details */}
            <button
              type="button"
              className=" btn-secondary"
              onClick={() => setProjectDetails([...projectDetails, {}])}
            >
              Add
            </button>

            {/* Existing form fields... */}

            {/* Submit Button */}
            <button id="redirectButton" type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CandidateSummary;
