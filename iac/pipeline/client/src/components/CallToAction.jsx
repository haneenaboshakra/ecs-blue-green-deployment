import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function CallToAction() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="callToAction_Div">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <div className="callToAction_content">
                  <h6 className="callToAction_title" data-aos="fade-up">
                    Ready to get started and improve <span>your lifestyle?</span>
                  </h6>

                  <div className="callToAction_btn">
                    <Link to="/quizzes" onClick={scrollToTop}>
                      <button className="cta getStarted_btn" >
                        Take your quiz
                      </button>
                    </Link>
                    <Link to="/contact-us" onClick={scrollToTop}>
                      <button className="cta login_btn">Contact Us</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;