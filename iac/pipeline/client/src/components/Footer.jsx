import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer">
            <div className="row footer-top">
              <div className="col-md-3 footer-column mb-5">
                <img
                  src={require("..//assets/images/balanced-logo-white.png")}
                  alt="Logo"
                  className="footer-logo"
                />
                <ul className="footer-column-list">
                  <li>
                    <a href="mailto:support@balanced.com.au">support@balanced.com.au</a>
                    
                  </li>
                  <li>
                    <a href="tel:+615570890234">+61-5570890234</a>
                    
                  </li>
                </ul>
                <div className="socials">
                  <a
                    href="https://www.facebook.com/balanced"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("..//assets/images/facebookIcon.png")}
                      alt="Facebook"
                      className="facebook-icon"
                    />
                  </a>
                  <a href="https://balanced" target="_blank" rel="noreferrer">
                    <img
                      src={require("..//assets/images/instaIcon.png")}
                      alt="Instagram"
                      className="insta-icon"
                    />
                  </a>
                </div>
              </div>

              <div className="col-md-3 footer-column mb-4">
                <h5 className="footer-column-title">What We Treat</h5>
                <ul className="footer-column-list">
                  <li>
                    <Link to="/questionnaire/anti-aging-and-vitality" onClick={scrollToTop}>
                      Anti-aging & Vitality
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/cognitive-enhancement" onClick={scrollToTop}>
                      Cognitive Enhancement
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/weight-loss" onClick={scrollToTop}>
                      Weight Loss
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/muscle-support" onClick={scrollToTop}>
                      Muscle Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/questionnaire/injury-repair-and-recovery"
                      onClick={scrollToTop}
                    >
                      Injury Repair & Recovery
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/libido-enhancement" onClick={scrollToTop}>
                      Libido Enhancement
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/mood-and-sleep" onClick={scrollToTop}>
                      Mood & Sleep
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/hair-sleep" onClick={scrollToTop}>
                      Hair Sleep
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/immunity" onClick={scrollToTop}>
                      Immunity
                    </Link>
                  </li>
                  <li>
                    <Link to="/questionnaire/skin-conditions" onClick={scrollToTop}>
                      Skin conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-column mb-4">
                <h5 className="footer-column-title">Quick Links</h5>
                <ul className="footer-column-list">
                  <li>
                    <Link to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-story" onClick={scrollToTop}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-it-works" onClick={scrollToTop}>
                      How It Works{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-doctors" onClick={scrollToTop}>
                      Doctors
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" onClick={scrollToTop}>
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-column mb-4">
                <h5 className="footer-column-title">Support</h5>
                <ul className="footer-column-list">
                  <li>
                    <Link to="/contact-us" onClick={scrollToTop} target="_blank" rel="noreferrer">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" onClick={scrollToTop} target="_blank" rel="noreferrer">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions" onClick={scrollToTop} target="_blank" rel="noreferrer">
                      Terms And Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" onClick={scrollToTop} target="_blank" rel="noreferrer">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/refund-policy" onClick={scrollToTop} target="_blank" rel="noreferrer">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="copyrights">
            Copyrights &copy; Balanced. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
