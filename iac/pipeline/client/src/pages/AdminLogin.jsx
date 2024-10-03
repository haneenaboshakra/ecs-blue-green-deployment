// src/pages/AdminLogin.js
import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { useAuth } from "..//Auth/Auth";
import { Link } from "react-router-dom";
import { logToServer } from "../Logger/LogService";
const AdminLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [backendError, setBackendError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      const storedHashedPassword =
        CryptoJS.SHA256("b@lanced@dminl0gin").toString();
      const enteredHashedPassword = CryptoJS.SHA256(password).toString();

      if (
        email === "admin@balanced.com.au" &&
        enteredHashedPassword === storedHashedPassword
      ) {
        logToServer('Login', 'Admin Login.');
        login();

      } else {
        logToServer('Error', 'Admin Login Failed.');
        setBackendError("Login failed. Please try again.");
      }
    }
  };
  // eslint-disable-next-line
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
              <p className="login-body-title">Admin Login</p>
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
                    className={`form-control ${passwordError ? "is-invalid InputError" : ""}`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
