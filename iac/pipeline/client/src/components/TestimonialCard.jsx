import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function TestimonialCard(props) {
  const { title, review, name } = props;
  return (
    <div className="testimonial_card">
      <div className="testimonial_card_content">
        <h4 className="testimonial_card_title" data-aos="zoom-in-up" data-aos-duration="1000">{title}</h4>
        <p className="testimonial_card_text" data-aos="zoom-in-up" data-aos-duration="1100">{review}</p>
      </div>

      <div className="closing_info">
        <h5 className="client_name" data-aos="zoom-in-up" data-aos-duration="1100">{name}</h5>
        <img
          src={require("..//assets/images/stars.png")}
          alt="Testimonial"
          className="testimonial_img"
          
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
