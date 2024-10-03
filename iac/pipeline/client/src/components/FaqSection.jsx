import React from "react";
import FAQCard from "./FaqCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Faq() {
  const FaqData = [
    {
      question: "What is Balanaced?",
      answer:
        " At Balanced, we understand that taking care of your health should be simple, private, and tailored to your needs.",
    },
    {
      question: "What is Balanaced?",
      answer:
        " At Balanced, we understand that taking care of your health should be simple, private, and tailored to your needs.",
    },
    {
      question: "What is Balanaced?",
      answer:
        " At Balanced, we understand that taking care of your health should be simple, private, and tailored to your needs.",
    },
    {
      question: "What is Balanaced?",
      answer:
        " At Balanced, we understand that taking care of your health should be simple, private, and tailored to your needs.",
    },
    {
      question: "What is Balanaced?",
      answer:
        " At Balanced, we understand that taking care of your health should be simple, private, and tailored to your needs.",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="faq_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 col-md-5 mb-5">
                <div className="left_section">
                  <h4 className="left_title" data-aos="fade-up">
                    Get Answers To All <span>Your Question</span>
                  </h4>
                  <p className="left_description" data-aos="fade-up">
                    Here you can find answers to all your question,feel free to
                    contact us if you didn’t find the answers to your questions
                    <Link
                      to="/contact-us"
                      className="link"
                      onClick={scrollToTop}
                    >
                      {" "}
                      here.
                    </Link>
                  </p>
                  <Link
                    to="/contact-us"
                    data-aos="fade-up"
                    onClick={scrollToTop}
                  >
                    <button className="ctaBtn contactUs_Btn">Contact Us</button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-7">
                {FaqData.map((Faq, index) => (
                  <div
                    className="faq_card_wrapper"
                    key={index}
                    data-aos="fade-up"
                  >
                    <FAQCard question={Faq.question} answer={Faq.answer} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
