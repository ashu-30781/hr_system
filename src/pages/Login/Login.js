import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (

    <div className="main-div">
      <div className="first-section">
        <div className="image">
          <div className="icon">
            <img src="./conqt logo 1 1.png" alt="" />
          </div>
          <div className="text">
            HR Insight: Mastering Interviews with Confidence
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="image-2">
          <div>
            <div>
              <div className="text-2">
                Welcome to <span>HR Panel</span>
              </div>
              <p className="text-3">
                TalentTalks: Where HR Meets Seamless Interviews
              </p>
            </div>

            <div>
              <LoginForm />
            </div>
          </div>

          <footer>
            <p className="terms">Term of Service | Privacy Policy </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;