import React from "react";
import { Link } from "react-router-dom";
import TreatmentsSwiper from "../components/TreatmentsSwiper";
import HowitworksCard from "../components/HowItWorksCard";
import TestimonialsSection from "../components/TestimonialsSection";
import Faq from "../components/FaqSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Home() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div> <Header/> 
    <div id="home_page">
      <div className="hero-section-wrapper">
        <div className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-content" >
                      <h1 className="hero-title" >
                        Transforming Lives Through Personalized{" "}
                        <span>Treatment Packages</span>
                      </h1>
                      <p className="hero-description" >
                        At Balanced, we understand that taking care of your
                        health should be simple, private, and tailored to your
                        needs. Our online platform offers a range of treatments
                        for men’s health issues.
                      </p>
                      <Link to="/quizzes" onClick={scrollToTop}>
                        <button className="ctaBtn heroBtn" >
                          Check Your Health
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="description_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="description-content mb-5">
                    <h2 className="description-title" data-aos="fade-up" data-aos-duration="800">
                      Discover the power of our personalized treatment packages.
                    </h2>
                    <p className="description-section-description" data-aos="fade-up" data-aos-duration="800">
                      Our treatment packages are designed to address your
                      specific needs and deliver effective results. With our
                      comprehensive questionnaire, we tailor the treatment plan
                      to ensure optimal outcomes.
                    </p>
                    <Link to="our-story" onClick={scrollToTop}>
                      <button className="ctaBtn descriptionBtn" data-aos="fade-up" data-aos-duration="800">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="800">
                  <div className="description_section_img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="treatments_section">
        <div className="container-fluid	">
          <div className="row">
            <div className="col-lg-12">
              <div className="treatments-section-content">
                <h2 className="treatments-section-title" data-aos="fade-up" data-aos-duration="800">
                  Our Health Care Solutions
                </h2>
                <p className="treatments-section-description" data-aos="fade-up" data-aos-duration="800">
                  Discover our range of personalized treatment packages designed
                  to address your specific needs and goals.
                </p>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12" data-aos="fade-up" data-aos-duration="800">
                  <TreatmentsSwiper />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="howItWorks_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="howItWorks-section-content">
                <h2 className="howItWorks-section-title" data-aos="fade-up" data-aos-duration="800">
                  Join us to imporve your health
                </h2>
              </div>
              <HowitworksCard data-aos="fade-up"/>
            </div>
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className="testimonials_div">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonials_content">
                <h2 className="testimonials_title" data-aos="fade-up" data-aos-duration="800">What Our Clients Say</h2>
                <p className="testimonials_subtitle" data-aos="fade-up" data-aos-duration="900">
                  Check Out What Our Previous Clients Said About Our Services
                </p>
              </div>
              <TestimonialsSection />
            </div>
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div className="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Faq />
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className="callToAction_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CallToAction/>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>

    
  );
}
export default Home;
