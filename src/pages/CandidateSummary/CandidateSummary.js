import React, { useState } from "react";
import "./CandidateSummary.css";

function CandidateSummary() {
  const [formData, setFormData] = useState({
    fullName: "",
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
    cv: null,

    // Additional state properties
    newProperty1: "",
    newProperty2: "",
  });

  const [projectDetails, setProjectDetails] = useState([
    {
      projectName: "",
      technologyUsed: "",
      role: "",
      responsibilities: "",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

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
    // Handle submission logic
    e.preventDefault();

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
        <h2>Add New Candidate</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Candidate's Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Candidate's Full Name:</label>
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

          {/* Education Details */}
          <div className="form-group">
            <label>Education Details:</label>
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
            <label htmlFor="phoneNumber">Phone Number:</label>
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
            <label htmlFor="email">Email ID:</label>
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
              type="checkbox"
              id="certifications"
              name="certifications"
              checked={formData.certifications}
              onChange={handleInputChange}
            />
          </div>

          {/* Technical Skills (Textarea or Multiple Select) */}
          <div className="form-group">
            <label htmlFor="technicalSkills">Technical Skills:</label>
            <textarea
              className="form-control"
              id="technicalSkills"
              name="technicalSkills"
              rows="3"
              value={formData.technicalSkills}
              onChange={handleInputChange}
            ></textarea>
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

          {/* Additional Information Section */}
          <h3 className="mt-4">Additional Information</h3>
          <div className="form-group">
            <label htmlFor="additionalInfo1">Current Location:</label>
            <input
              type="text"
              className="form-control"
              id="additionalInfo1"
              name="additionalInfo1"
              value={formData.additionalInfo1}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo2">Preferred Location:</label>
            <input
              type="text"
              className="form-control"
              id="additionalInfo2"
              name="additionalInfo2"
              value={formData.additionalInfo2}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo2">Current CTC:</label>
            <input
              type="text"
              className="form-control"
              id="additionalInfo2"
              name="additionalInfo2"
              value={formData.additionalInfo2}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo2">expected CTC:</label>
            <input
              type="text"
              className="form-control"
              id="additionalInfo2"
              name="additionalInfo2"
              value={formData.additionalInfo2}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo2">Notice period:</label>
            <input
              type="text"
              className="form-control"
              id="additionalInfo2"
              name="additionalInfo2"
              value={formData.additionalInfo2}
              onChange={handleInputChange}
            />
          </div>

          {/* Attach CV */}
          <div className="form-group">
            <label htmlFor="cv">Attach CV (PDF, Word):</label>
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
                id={`projectName${index}`}
                name={`projectName${index}`}
                value={project.projectName}
                onChange={(e) => handleProjectInputChange(e, index)}
              />

              {/* Technology Used */}
              {/* Add similar modifications for other project details, e.g., Technology Used */}
              <label htmlFor={`technologyUsed${index}`}>Technology Used:</label>
              <input
                type="text"
                className="form-control"
                id={`technologyUsed${index}`}
                name={`technologyUsed${index}`}
                value={project.technologyUsed}
                onChange={(e) => handleProjectInputChange(e, index)}
              />

              {/* Role */}
              {/* Add similar modifications for other project details, e.g., Role */}
              <label htmlFor={`role${index}`}>Role:</label>
              <input
                type="text"
                className="form-control"
                id={`role${index}`}
                name={`role${index}`}
                value={project.role}
                onChange={(e) => handleProjectInputChange(e, index)}
              />

              {/* Responsibilities */}
              {/* Add similar modifications for other project details, e.g., Responsibilities */}
              <label htmlFor={`responsibilities${index}`}>Responsibilities:</label>
              <input
                type="text"
                className="form-control"
                id={`responsibilities${index}`}
                name={`responsibilities${index}`}
                value={project.responsibilities}
                onChange={(e) => handleProjectInputChange(e, index)}
              />

              {/* Delete button for project details */}
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => handleDeleteProject(index)}
              >
                Delete
              </button>
            </div>
          ))}


          {/* Button to add more project details */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setProjectDetails([...projectDetails, {}])}
          >
            Add Project
          </button>

          {/* Existing form fields... */}

          {/* Submit Button */}
          <button id="redirectButton" type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CandidateSummary;
