import React from "react";
import { Link } from "react-router-dom";
import { logToServer } from "../Logger/LogService";
function Questionairre() {
  const path = window.location.pathname;
  const quizLogging = () => {
    logToServer("Submit", "New Questionnaire Started.");
  };
  return (
    <div>
      <div className="questionnaire-wrapper">
        <div className="container">
          <Link to="/">
            <div className="questionnaire-header">
              <img
                src={require("../assets/images/balanced-logo-white.png")}
                alt="Logo"
              />
            </div>
          </Link>

          <div className="questionnaire-container">
            <div className="questionnaire-card">
              <div className="card-header">
                <img
                  src={require("../assets/images/questionairreIllustration.png")}
                  alt="Illustration"
                />
              </div>
              <div className="card-body">
                <h3 className="questionnaire-title">
                  Welcome To Your Assessment
                </h3>
                <p className="questionnaire-description">
                  Let's begin with few questions for your practitioner.Your
                  responses will be kept confidential between you and our
                  medical team.
                </p>
                <div className="time-to-complete">
                  <p className="time-needed">
                    Time to complete: <span>2 minutes</span>
                  </p>
                </div>
                <p className="questionnaire-notice">
                  By continuing you agree to our{" "}
                  <Link to="terms-and-conditions" className="link">
                    terms & conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="link">
                    privacy policy{" "}
                  </Link>
                  and consent to telehealth.{" "}
                </p>
                <Link to={`${path}/start-quiz`} onClick={quizLogging}>
                  <button className="questionairre-startBtn">
                    Start Your Assessment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionairre;
