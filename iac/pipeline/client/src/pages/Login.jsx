import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [backendError, setBackendError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required.");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await axios.post("https://localhost/api/login", {
          email,
          password,
        });
        console.log(response.data); // Handle the response from the backend
      } catch (error) {
        setBackendError("Login failed. Please try again.");
        console.error("There was an error logging in!", error);
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <Link to="/">
        <div className="login-header">
          <img src={require("../assets/images/balanced-logo-white.png")} alt="Logo" />
        </div>
        </Link>
        <div className="login-container">
          <div className="login-card">
            <div className="card-header">
              <img
                src={require("../assets/images/profileIcon.png")}
                alt="Profile Icon"
              />
            </div>
            <div className="login-body">
              <p className="login-body-title">Welcome Back</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="text"
                    className={`form-control ${emailError ? "is-invalid InputError" : ""}`}
                    id="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password*</label>
                  <input
                    type="password"
                    className={`form-control ${
                      passwordError ? "is-invalid InputError" : ""
                    }`}
                    id="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                {backendError && (
                  <div className="alert alert-danger">{backendError}</div>
                )}
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <div className="login-footer">
                <p>
                  Not A Member? <Link to="/quizzes">Sign Up</Link>
                </p>
                <p>
                  <Link href="#">Forgot Password?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
