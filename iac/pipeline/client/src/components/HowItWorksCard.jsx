import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function HowitworksCard() {
  return (
    <div className="howItWorks_Card">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800">
              <div className="howItWorks_card_img"></div>
            </div>
            <div className="col-lg-6 process_column">
              <div className="process">
                <div className="process_line" data-aos="fade-up" data-aos-duration="800">
                  <img
                    src={require("..//assets/images/workProcess.PNG")}
                    alt=""
                  />
                </div>
                <div class="process_card" data-aos="fade-up" data-aos-duration="820">
                  <div className="details_wrapper">
                    <h4 class="process_name">Register</h4>
                    <p class="process_description">
                      Register as a balanced patient and complete a medical
                      questionnaire.
                    </p>
                  </div>
                </div>
                <div class="process_card" data-aos="fade-up" data-aos-duration="830">
                  <div className="details_wrapper" data-aos="fade-up">
                    <h4 class="process_name">Fill in the questionnaire</h4>
                    <p class="process_description">
                      Register as a balanced patient and complete a medical
                      questionnaire.
                    </p>
                  </div>
                </div>

                <div class="process_card" data-aos="fade-up" data-aos-duration="840">
                  <div className="details_wrapper">
                    <h4 class="process_name">Patient care call</h4>
                    <p class="process_description">
                      Register as a balanced patient and complete a medical
                      questionnaire.
                    </p>
                  </div>
                </div>
                <div class="process_card" data-aos="fade-up" data-aos-duration="840">
                  <div className="details_wrapper">
                    <h4 class="process_name">Place Your Order</h4>
                    <p class="process_description">
                      Register as a balanced patient and complete a medical
                      questionnaire.
                    </p>
                  </div>
                </div>
                <div class="process_card" data-aos="fade-up" data-aos-duration="850">
                  <div className="details_wrapper" >
                    <h4 class="process_name">Client Collaboration</h4>
                    <p class="process_description">
                      Register as a balanced patient and complete a medical
                      questionnaire.
                    </p>
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

export default HowitworksCard;
