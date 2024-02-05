import React from "react";
import "./Login.css"
import Vector from "./Img/Vector.png";
import img2 from "./Img/img2.png";

function LoginForm() {
  const validate = (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the email and password input values
    const emailInput = document.getElementById("input");
    const passwordInput = document.getElementById("input2");

    // Get the error message elements
    const emailError = document.getElementById("email_error");
    const passError = document.getElementById("pass_error");

    // Reset previous error messages
    emailError.style.display = "none";
    passError.style.display = "none";

    // Validate email
    if (emailInput.value.trim() === "") {
      emailError.style.display = "block";
      return false;
    }

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === "") {
      passError.textContent = "Password is required";
      passError.style.display = "block";
      return false;
    }

    // Check password requirements
    if (passwordValue.length < 8) {
      passError.textContent = "Password should be at least 8 characters long";
      passError.style.display = "block";
      return false;
    }

    if (!/[A-Z]/.test(passwordValue)) {
      passError.textContent = "Password should contain at least one uppercase letter";
      passError.style.display = "block";
      return false;
    }

    // Simulate a successful login (you would typically handle this on the server)
    // alert("Login successful!");
    const redirectButton = document.getElementById('redirectButton');

    // Add a click event listener to the button
    redirectButton.addEventListener('click', () => {
      // Redirect to a different page
      // alert("Login successful!");
      window.location.href = '/CandidateSummary';  // Replace with your desired URL
    });
    // You can redirect the user to the home page or perform other actions here

    // For demonstration purposes, reset the form fields
    emailInput.value = "";
    passwordInput.value = "";

    return true;
  };


  return (
    <form
      className="login_form"
      method="post"
      name="form"
      action="home.html"
      onSubmit={validate}
    >
      <div className="input-container">
        <div id="input_container1">
          <input
            autoComplete="off"
            type="email"
            id="input"
            name="email"
            placeholder="customer@gmail.com"
            required
          />
          <img src={Vector} id="input_img" alt="input" />
        </div>
        <div id="email_error">Please fill up your Email Or Phone</div>
        <div id="input_container2">
          <input
            type="password"
            id="input2"
            name="password"
            placeholder="............"
            required
          />
          <img src={img2} id="input_img2" alt="input" />
        </div>
        <div id="pass_error">Please fill your Password</div>

        <div>
          <input
            className="checkbox"
            type="checkbox"
            id=""
            name="vehicle1"
            value=""
          />
          <label className="checkbox-text">Remember me</label>
          {/* <a className="forgot-password" href="#">
            Forgot password?
          </a> */}
        </div>
      </div>

      <div>
        <button id="redirectButton" className="button" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;