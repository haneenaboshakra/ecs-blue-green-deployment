import React from "react";
import FAQCard from "../components/FaqCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function FaqAnswers() {
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
  return (
         <div><Header/>
    <div className="faq_page">
      <div className="faq-hero-header-wrapper">
        <div className="container">
          <div className="faq-hero-content">
            <h2 className="faq-hero-title">
              Find Answers To All Your Questions
            </h2>
            <div
              className="form-outline faq-search-div mb-4"
              data-mdb-input-init
            >
              <input
                type="search"
                className="form-control faq-search-input"
                id="datatable-search-input"
                placeholder="Type your question"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                  <h4 className="faq_section_title mt-3 mb-5 text-align-center"> <Link to="/support" style={{color:'#000'}}>Faq</Link> &gt; About Balanced</h4>
              <div className="row d-flex ">
                <div className="col-lg-8 col-md-7">
                  {FaqData.map((Faq, index) => (
                    <div className="faq_card_wrapper" key={index}>
                      <FAQCard question={Faq.question} answer={Faq.answer} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default FaqAnswers;
