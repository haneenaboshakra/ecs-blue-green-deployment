import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HowItWorks = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <div className="how-it-works">
        <div className="how-it-works-hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="how-it-works-hero-section-content">
                  <h2 className="how-it-works-hero-section-content-title">
                    How It Works
                  </h2>
                  <p className="how-it-works-hero-section-content-description">
                    At Balanced, we understand that taking care of your health
                    should be simple, private, and tailored to your needs. Our
                    online platform offers a range of treatments for men’s
                    health issues.
                  </p>
                  <ul className="list-unstyled how-it-works-hero-section-content-list">
                    <li className="d-flex align-items-center justify-content-center">
                      <img
                        src={require("..//assets/images/checkmark.png")}
                        alt="checkmark"
                      />
                      <p className="mb-0 ms-2">Identify The Problem</p>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <img
                        src={require("..//assets/images/checkmark.png")}
                        alt="checkmark"
                      />
                      <p className="mb-0 ms-2">Meet With Specialists</p>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <img
                        src={require("..//assets/images/checkmark.png")}
                        alt="checkmark"
                      />
                      <p className="mb-0 ms-2">Get The Right Treatment</p>
                    </li>
                  </ul>
                  <Link to="/quizzes" onClick={scrollToTop}>
                  <button className="ctabtn how-it-works-hero-section-content-btn">
                    Check Your Health
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-works-journey-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="how-it-works-journey-section-wrapper">
                  <div className="how-it-works-journey-section-content">
                    <h2 className="how-it-works-journey-section-content-title" data-aos="fade-up" data-aos-duration="800">
                      Balanced Journey
                    </h2>
                    <p className="how-it-works-journey-section-description" data-aos="fade-up" data-aos-duration="800">
                      Start by taking our quick online quiz to register. This
                      quiz helps us understand your unique health needs and
                      preferences. Once registered, you’ll be matched with one
                      of our doctors for a consultation to be able to choose the
                      right treatment for you.
                    </p>

                    <div className="how-it-works-journey-section-steps">
                      <div className="how-it-work-journey-section-section-steps-step" data-aos="fade-up" data-aos-duration="800">
                        <div className="step-number">1</div>
                        <div className="step-name">Register</div>
                      </div>
                      <div className="arrow mx-2" data-aos="fade-up" data-aos-duration="800">
                        {/* ➔ */}
                        <img
                          src={require("..//assets/images/journey_steps_arrow.png")}
                          alt="journey steps arrow"
                        />
                      </div>
                      <div className="how-it-work-journey-section-section-steps-step" data-aos="fade-up" data-aos-duration="800">
                        <div className="step-number">2</div>
                        <div className="step-name">Consultation</div>
                      </div>
                      <div className="arrow mx-2" data-aos="fade-up" data-aos-duration="800">
                        {/* ➔ */}
                        <img
                          src={require("..//assets/images/journey_steps_arrow.png")}
                          alt="journey steps arrow"
                        />
                      </div>
                      <div className="how-it-work-journey-section-section-steps-step" data-aos="fade-up" data-aos-duration="800">
                        <div className="step-number">3</div>
                        <div className="step-name">Treatment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-works-process-details questionnaire">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center image-wrapper"  data-aos="fade-up" data-aos-duration="800">
                <img
                  src={require("..//assets/images/Default_Doctor_uncopped_dark_teal_color_mood_1.jpg")}
                  alt="Doctor"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 how-it-works-process-details-content">
                <h3 className="how-it-works-process-details-title" data-aos="fade-up" data-aos-duration="800">
                  Fill A Questionnaire
                </h3>
                <ul className="how-it-works-process-details-list">
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    {" "}
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />{" "}
                    <p className="mb-0 ms-2">
                      Choose One From Our 10 Treatments
                    </p>
                  </li>
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    {" "}
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />{" "}
                    <p className="mb-0 ms-2">
                      Answer simple questions about yourself
                    </p>
                  </li>
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    {" "}
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />{" "}
                    <p className="mb-0 ms-2">Sign Up For Our Platform</p>
                  </li>
                </ul>
                <Link to="/quizzes" onClick={scrollToTop}>
                <button className="ctabtn how-it-works-process-details-btn" data-aos="fade-up" data-aos-duration="800">
                  Find My Treatment
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-works-process-details consultation">
          <div className="container">
            <div className="row">
              <div className="col-md-6 how-it-works-process-details-content">
                <h3 className="how-it-works-process-details-title" data-aos="fade-up" data-aos-duration="800">
                  Consultation
                </h3>
                <ul className="how-it-works-process-details-list">
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />
                    <p className="mb-0 ms-2">
                      Book Your Online Consultation
                    </p>
                  </li>
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />
                    <p className="mb-0 ms-2">
                      Discuss Your Health History
                    </p>
                  </li>
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />
                    <p className="mb-0 ms-2">Review Your Treatments Options </p>
                  </li>
                </ul>
                <Link to="/quizzes" onClick={scrollToTop}>
                <button className="ctabtn how-it-works-process-details-btn" data-aos="fade-up" data-aos-duration="800">
                  Book A Consultation
                </button>
                </Link>
              </div>
              <div className="col-md-6 text-center image-wrapper" data-aos="fade-up" data-aos-duration="800">
                <img
                  src={require("..//assets/images/Default_doctor_and_nurse_with_dark_teal_color_mood_0.jpg")}
                  alt="Doctor"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-works-process-details questionnaire">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center image-wrapper" data-aos="fade-up" data-aos-duration="800">
                <img
                  src={require("..//assets/images/Default_super_happy_individual_with_dark_teal_color_mood_2.jpg")}
                  alt="Doctor"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 how-it-works-process-details-content">
                <h3 className="how-it-works-process-details-title" data-aos="fade-up" data-aos-duration="800">
                  Recieve Your Treatment
                </h3>
                <ul className="how-it-works-process-details-list ">
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />
                    <p className="mb-0 ms-2">
                      Choose Your Treatment And Pay Online
                    </p>
                  </li>
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />
                    <p className="mb-0 ms-2">
                      Get Your Treatment Packed & Ready
                    </p>
                  </li>
                  <li className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800">
                    <img
                      src={require("..//assets/images/checkmark.png")}
                      alt="checkmark"
                    />
                    <p className="mb-0 ms-2">
                      Get Your Treatment Delivered
                    </p>
                  </li>
                </ul>
                <Link to="/quizzes" onClick={scrollToTop}>
                <button className="ctabtn how-it-works-process-details-btn" data-aos="fade-up" data-aos-duration="800">
                  Find My Treatment
                </button>
                </Link>
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
};

export default HowItWorks;
