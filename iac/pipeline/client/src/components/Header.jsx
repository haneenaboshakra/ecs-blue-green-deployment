import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Header() {
  const [showNav, setShowNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      mobileDropdownRef.current &&
      !mobileDropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (mobileDropdownRef.current) {
        const dropdownMenu = mobileDropdownRef.current.querySelector(
          ".mobile_dropdown_menu"
        );
        if (dropdownMenu) {
          const dropdownHeight = dropdownMenu.offsetHeight;
          const windowHeight = window.innerHeight;
          if (dropdownHeight > windowHeight) {
            document.body.style.overflow = "hidden";
            dropdownMenu.style.maxHeight = `${windowHeight - 50}px`; // Adjust 100px as needed
            dropdownMenu.style.overflowY = "auto";
          }
        }
      }
    } else {
      document.body.style.overflow = "";
    }
    const mobileCurrent = mobileDropdownRef.current;
    return () => {
      document.body.style.overflow = "";

      if (mobileCurrent) {
        const dropdownMenu = mobileCurrent.querySelector(
          ".mobile_dropdown_menu"
        );
        if (dropdownMenu) {
          dropdownMenu.style.maxHeight = "";
          dropdownMenu.style.overflowY = "";
        }
      }
    };
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showNav]);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const hideMenu = () => {
    setShowNav(false);
    setIsOpen(false);
  };

  return (
    <div>
      {/* <div class="alert alert-primary" role="alert">
      <strong>Discover personalized treatment options.</strong> 
      <Link to="/quizzes"><button>Get Started</button></Link>
</div> */}
      <div id="header">
        
        <div className="container">
          <div className="nav_wrapper">
            <div className="nav_left_wrapper">
              <Link to="/">
                <div className="logo_div">
                  <img
                    src={require("..//assets/images/balanced-logo.png")}
                    alt="logo"
                  />
                </div>
              </Link>
              <div
                ref={navRef}
                className={`nav_links ${showNav ? "show" : ""}`}
              >
                <div className="mobile_menu_header  justify-content-between align-items-center w-100">
                  <p>Menu</p>
                  <img
                    src={require("../assets/images/closeIcon.png")}
                    alt="Close Icon"
                    onClick={toggleNavbar}
                  />
                </div>

                <hr className="w-100 mobile_menu_line" />
                <ul className="nav_list">
                  <Link
                    to="/"
                    className="nav_link mobile_nav_link"
                    onClick={hideMenu}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/our-story"
                    className="nav_link mobile_nav_link"
                    onClick={hideMenu}
                  >
                    <li>About Us</li>
                  </Link>
                  <div className="dropdown desktop_dropdown">
                    <a
                      className="dropdown-toggle nav_link"
                      href="#t"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={toggleDropdown}
                    >
                      What We Treat
                      <img
                        src={require("..//assets/images/arrowNavDown.png")}
                        className={`dropdownArrow ${isOpen ? "open" : ""}`}
                        alt="Dropdown Arrow"
                      />
                    </a>
                    <div
                      className="dropdown-menu mt-3"
                      aria-labelledby="dropdownMenuLink"
                      data-popper-placement="bottom-start"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="500"
                    >
                      <div className="dropdown-grid">
                        <div className="dropdown-column">
                          <Link
                            to="/questionnaire/anti-aging-and-vitality"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Anti-aging & Vitality</span>
                          </Link>
                          <Link
                            to="/questionnaire/cognitive-enhancement"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Cognitive Enhancement</span>
                          </Link>
                          <Link
                            to="/questionnaire/weight-loss"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Weight Loss</span>
                          </Link>
                          <Link
                            to="/questionnaire/muscle-support"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Muscle Support</span>
                          </Link>
                          <Link
                            to="/questionnaire/injury-repair-and-recovery"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Injury Repair and Recovery</span>
                          </Link>
                        </div>
                        <div className="dropdown-column">
                          <Link
                            to="/questionnaire/libido-enhancement"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Libido Enhancement</span>
                          </Link>
                          <Link
                            to="/questionnaire/mood-and-sleep"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Mood and Sleep</span>
                          </Link>
                          <Link
                            to="/questionnaire/hair-loss"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Hair Loss</span>
                          </Link>
                          <Link
                            to="/questionnaire/immunity"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Immunity</span>
                          </Link>
                          <Link
                            to="/questionnaire/skin-care"
                            className="dropdown-item"
                            onClick={hideMenu}
                          >
                            <span>Skin Care</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/how-it-works"
                    className="nav_link mobile_nav_link"
                    onClick={hideMenu}
                  >
                    <li>How It Works</li>
                  </Link>
                  <Link
                    to="/pricing"
                    className="nav_link mobile_nav_link"
                    onClick={hideMenu}
                  >
                    <li>Pricing</li>
                  </Link>
                  <Link to="/users/login">
                    <button className="cta login_btn mobile_login_btn">
                      Login
                    </button>
                  </Link>
                  <Link to="/quizzes">
                    <button className="cta quiz_btn mobile_login_btn">
                      Take Your Quiz
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="nav_cta">
              <Link to="/quizzes">
                <button className="cta getStarted_btn">Take your quiz</button>
              </Link>
              <div ref={mobileDropdownRef} className="mobile_dropdown">
                <button
                  className="nav_link mobile-toggle"
                  onClick={toggleDropdown}
                >
                  Our Treatments
                  <img
                    src={require("..//assets/images/arrowNavDown.png")}
                    className={`dropdownArrow ${isOpen ? "open" : ""}`}
                    alt="Dropdown Arrow"
                  />
                </button>
                <div
                  className={`mobile_dropdown_menu mt-3 ${
                    isOpen ? "show" : ""
                  }`}
                >
                  <div className="dropdown-grid">
                    <div className="dropdown-column">
                      <Link
                        to="/questionnaire/anti-aging-and-vitality"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Anti-aging & Vitality</span>
                      </Link>
                      <Link
                        to="/questionnaire/cognitive-enhancement"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Cognitive Enhancement</span>
                      </Link>
                      <Link
                        to="/questionnaire/weight-loss"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Weight Loss</span>
                      </Link>
                      <Link
                        to="/questionnaire/muscle-support"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Muscle Support</span>
                      </Link>
                      <Link
                        to="/questionnaire/injury-repair-and-recovery"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Injury Repair and Recovery</span>
                      </Link>
                    </div>
                    <div className="dropdown-column">
                      <Link
                        to="/questionnaire/libido-enhancement"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Libido Enhancement</span>
                      </Link>
                      <Link
                        to="/questionnaire/mood-and-sleep"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Mood and Sleep</span>
                      </Link>
                      <Link
                        to="/questionnaire/hair-loss"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Hair Loss</span>
                      </Link>
                      <Link
                        to="/questionnaire/immunity"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Immunity</span>
                      </Link>
                      <Link
                        to="/questionnaire/skin-care"
                        className="dropdown-item"
                        onClick={hideMenu}
                      >
                        <span>Skin Care</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/users/login">
                <button className="cta login_btn">Login</button>
              </Link>
              {/* <div className="mobile_menu" onClick={toggleNavbar}> */}
              <div className="mobile_menu" onClick={toggleNavbar}>
                <img
                  src={require("../assets/images/mobileMenu.png")}
                  alt="Hamburger Menu Icon"
                  onClick={toggleNavbar}
                />
                {/* {showNav ? (
                  <img
                    src={require("../assets/images/closeIcon.png")}
                    alt="Close Icon"
                    onClick={toggleNavbar}
                  />
                ) : (
                  <img
                    src={require("../assets/images/mobileMenu.png")}
                    alt="Hamburger Menu Icon"
                    onClick={toggleNavbar}
                  />
                )} */}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
