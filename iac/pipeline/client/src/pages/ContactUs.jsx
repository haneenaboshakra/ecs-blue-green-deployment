import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    assistance: "",
    additionalInfo: ""
  });

  const [errors, setErrors] = useState({});
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/auth/check");
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error("Authentication check failed", error);
      }
    };

    checkAuth();
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.assistance) formErrors.assistance = "Please select an option";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/api/contact", formData);
        console.log(response.data);
      } catch (error) {
        console.error("There was an error submitting the form!", error);
      }
    }
  };


  return (
    <div>
      <Header />
      <div className="contact_us_page">
        <div className="contact-us-hero-header-wrapper">
          <div className="container">
            <div className="contact-us-hero-content">
              <h2 className="contact-us-hero-title">Get In Touch Today</h2>
              <p className="contact-us-hero-description">
                If you'd like to get in touch with our team here at balanced,
                fill out the form and we'll be with you shortly.
              </p>
            </div>
          </div>
        </div>

        <main>
          <section className="contact-form-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <form className="contact-form-wrapper" onSubmit={handleSubmit}>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="firstName">
                            First name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="lastName">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="assistance">
                        How can we assist you?
                      </label>
                      <select
                        className={`form-select ${errors.assistance ? "is-invalid" : ""}`}
                        id="assistance"
                        name="assistance"
                        value={formData.assistance}
                        onChange={handleChange}
                      >
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      {errors.assistance && <small className="text-danger">{errors.assistance}</small>}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="additionalInfo">
                        Additional information to assist you 
                      </label>
                      <textarea
                        className="form-control"
                        id="additionalInfo"
                        name="additionalInfo"
                        rows="4"
                        placeholder="Write down your message"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="submitBtn w-100">SUBMIT</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
