import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import DoctorsCard from "../components/DoctorsCard";

function Doctors() {
  const doctorsList = [
    {
      image: "Default_Doctor_uncopped_dark_teal_color_mood_0.jpg",
      doctor_name: "John Doe",
      doctor_role: "Doctor",
    },
    {
      image: "Default_Doctor_uncopped_dark_teal_color_mood_1.jpg",
      doctor_name: "Alex Doe",
      doctor_role: "Doctor",
    },
    {
      image: "Default_Doctor_uncopped_dark_teal_color_mood_2.jpg",
      doctor_name: "Jonny Doe",
      doctor_role: "Nurse",
    },
  ];

  return (
    <div>
      <Header />
      <div className="doctors-page">
        <div className="doctors-hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="doctors-hero-section-content">
                  <h2 className="doctors-hero-section-content-title">
                    Meet Our Experts{" "}
                  </h2>
                  <p className="doctors-hero-section-content-description">
                    Welcome to balanced where we group a team of the best
                    experts in the field,that are ready to help you with your
                    problems.
                  </p>
                </div>
                <div className="doctors-hero-section-image"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="doctors-features-section">
          <div className="container">
            <h2
              className="doctors-features-section-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              What Makes Us Different
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="features-card h-100">
                  <div className="features-card-body">
                    <img
                      src={require("..//assets/images/01.png")}
                      alt="Health Icon"
                      className="features-card-icon mb-3"
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
                      personalized care to help you achieve optimal health.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="features-card card-2 h-100">
                  <div className="features-card-body">
                    <img
                      src={require("..//assets/images/02.png")}
                      alt="Honest Icon"
                      className="features-card-icon mb-3"
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
                      progress.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="features-card card-3 h-100">
                  <div className="features-card-body">
                    <img
                      src={require("..//assets/images/03.png")}
                      alt="Personalized Icon"
                      className="mb-3 features-card-icon"
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
                      needs and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="doctors-section">
          <div className="container">
            <h2
              className="doctors-section-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Our Experts
            </h2>
            <p className="doctors-section-description"  data-aos="fade-up"
              data-aos-duration="800">
              Meet Our Experts! Our doctors are here to provide for you the best
              service.
            </p>
            <div className="row">
              {doctorsList.map((doctor, index) => (
                <div className="col-md-4 mb-4">
                  <DoctorsCard
                    key={index}
                    image={require(`..//assets/images/${doctor.image}`)}
                    doctor_name={doctor.doctor_name}
                    doctor_role={doctor.doctor_role}
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="callToAction_section doctors-cta">
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

export default Doctors;
