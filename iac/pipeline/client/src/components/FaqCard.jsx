import React, { useState } from "react";

function FAQCard(props) {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq_card_wrapper">
    <div className="faq_card" onClick={toggleAccordion}>
      <div className="faq_header">
        <h5 className="faq_header_title">{question}</h5>
        <div className="faq_img_wrapper">
          <img
            src={require("..//assets/images/sortDown.png")}
            alt="Arrow"
            className={`faq_arrow ${isOpen ? "open" : ""}`}
          />
        </div>
      </div>
     
    </div>
    <p className={`faq_answer ${isOpen ? "openbox" : ""}`}>{answer}</p>
    </div>
    
  );
}

export default FAQCard;
