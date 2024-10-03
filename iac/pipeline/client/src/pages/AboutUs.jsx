import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function AboutUs() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="aboutUs_page_wrapper">
      <Header />
      <div className="aboutUs_page">
        <div className="about-us-hero-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-grid">
                <div className="about-us-hero-section-content">
                  <h2 className="about-us-hero-section-content-title">
                    Balanced Medical Care <span>Treatment Platform</span>
                  </h2>
                  <p className="about-us-hero-section-content-description">
                    Welcome to Balanced, where we blend cutting-edge medical
                    technologies with compassionate care to provide personalized
                    treatment plans for our patients.
                  </p>
                  <Link to="/quizzes" onClick={scrollToTop}>
                    <button className="ctaBtn about-us-btn">
                      Find your treatment
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-us-image-wrapper">
                  {/* <img
                  src={require("..//assets/images/Default_Doctor_uncopped_dark_teal_color_mood_1.jpg")}
                  alt="Doctor"
                  className="img-fluid about-us-image"
                /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-story">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="our-story-content">
                  <p
                    className="our-story-content-subtitle"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Balanced Your Go-To Medical Treatment Platform
                  </p>
                  <h3
                    className="our-story-content-title"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    We Do 🩺 Things Differently! Join Us On A Journey To Make
                    Medication 🏥 Easier.
                  </h3>
                  <Link to="/quizzes" onClick={scrollToTop}>
                    <button className="ctaBtn our-story-btn" data-aos="fade-up" data-aos-duration="800">
                      Find your treatment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="founders-section ">
          <div className="container">
            <h2
              className="founders-section-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Our Founders
            </h2>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="founder-card">
                  <div className="founder-card-top">
                    <img
                      src={require("..//assets/images/Default_Doctor_uncopped_dark_teal_color_mood_0.jpg")}
                      alt="John Doe"
                      className="img-fluid founder-card-image mb-3"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    />
                    <div className="founder-card-top-info">
                      <h5
                        className="founder-card-name"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        John Doe
                      </h5>
                      <p
                        className="founder-card-role"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        Founder
                      </p>
                    </div>
                  </div>
                  <p
                    className="founder-card-description"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Dr. John, the founder of the Balanced, embodies a passion
                    for healing and a commitment to excellence. With decades of
                    experience in the field, Dr. John envisioned a place where
                    patients could receive not just top-notch medical care but
                    also compassionate support and personalized attention.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="founder-card">
                  <div className="founder-card-top">
                    <img
                      src={require("..//assets/images/Default_Doctor_uncopped_dark_teal_color_mood_0.jpg")}
                      alt="Chris Doe"
                      className="img-fluid founder-card-image mb-3"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    />
                    <div className="founder-card-top-info">
                      <h5
                        className="founder-card-name"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        Chris Doe
                      </h5>
                      <p
                        className="founder-card-role"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        Co-Founder
                      </p>
                    </div>
                  </div>
                  <p
                    className="founder-card-description"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Dr. Chris, the co-founder of Balanced, brings a wealth of
                    expertise and a deep passion for patient-centered care. With
                    years of experience, Dr. Chris co-created the center with a
                    vision to provide exceptional healthcare that prioritizes
                    both clinical excellence and compassionate support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="story-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div
                  className="story-section-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  {/* <img
                  src={require("..//assets/images/Default_doctor_and_nurse_with_dark_teal_color_mood_3.jpg")}
                  alt="Team"
                  className="img-fluid"
                /> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="story-section-content">
                  <p
                    className="story-section-content-subtitle"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Our Story
                  </p>
                  <h2
                    className="story-section-content-title"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Balanced Medical Care Treatment Platform
                  </h2>
                  <p
                    className="story-section-content-description"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    At our state-of-the-art medical care treatment center, we
                    prioritize the well-being and recovery of every patient. Our
                    dedicated team of healthcare professionals combines
                    cutting-edge technology with compassionate care to provide
                    personalized treatment plans tailored to each individual's
                    needs.
                    <br />
                    <br />
                    From diagnostics to rehabilitation, we offer comprehensive
                    services to ensure holistic healing and long-term wellness.
                    We strive to be the premier destination for medical care and
                    treatment.
                  </p>
                  <Link to="/quizzes" onClick={scrollToTop} data-aos="fade-up" data-aos-duration="800">
                    {" "}
                    <button className="ctabtn story-section-btn">
                      Join Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="container">
            <h2
              className="features-section-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Why Choose Us
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="features-card h-100">
                  <div className="features-card-body">
                    <img
                      src={require("..//assets/images/illustration1.png")}
                      alt="Health Icon"
                      className="features-card-icon mb-3"
                      style={{ width: "70px", height: "70px" }}
                      data-aos="fade-up"
                      data-aos-duration="800"
                    />
                    <h5
                      className="features-card-title"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      Your Health First
                    </h5>
                    <p
                      className="features-card-text"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      We are dedicated to your health and well-being, providing
                      personalized care to help you achieve optimal health. Our
                      approach is comprehensive, considering all aspects of your
                      lifestyle and medical history to create a treatment plan
                      that is tailored to you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="features-card h-100">
                  <div className="features-card-body">
                    <img
                      src={require("..//assets/images/illustration2.png")}
                      alt="Honest Icon"
                      className="features-card-icon mb-3"
                      style={{ width: "70px", height: "70px" }}
                      data-aos="fade-up"
                      data-aos-duration="800"
                    />
                    <h5
                      className="features-card-title"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      Honest Care
                    </h5>
                    <p
                      className="features-card-text"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      Our team ensures you understand every step of your
                      treatment plan and are always informed about your
                      progress. We believe in transparent communication and
                      building trust with our patients, ensuring you are
                      comfortable and confident in your care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="features-card h-100">
                  <div className="features-card-body">
                    <img
                      src={require("..//assets/images/illustration3.png")}
                      alt="Personalized Icon"
                      className="mb-3 features-card-icon"
                      style={{ width: "70px", height: "70px" }}
                      data-aos="fade-up"
                      data-aos-duration="800"
                    />
                    <h5
                      className="features-card-title"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      Personalized Care
                    </h5>
                    <p
                      className="features-card-text"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      We recognize that every patient is unique. Our approach to
                      healthcare is individualized, focusing on your specific
                      needs and goals. We provide personalized treatment plans
                      that are designed to deliver the best possible outcomes
                      for your health and well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="callToAction_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <CallToAction />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
