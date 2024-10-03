import React from "react";
import { Link } from "react-router-dom";
function FaqCategoryCard(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="faq-category-card">
      <Link to={`/support/${props.title}`} onClick={scrollToTop}>
        <div className="faq-category-card-content">
          <div className="faq-category-card-content-icon">
            <img src={props.image} alt="Icon" />
          </div>
          <h3 className="faq-category-card-content-title">{props.title}</h3>
          <p className="faq-category-card-content-desciption">
            {props.description}
          </p>
        </div>
        
        <div className="faq-category-card-arrow">
         <img src={require("..//assets/images/roundArrow.png")} alt="Round Arrow" />
        </div>
        
      </Link>
    </div>
  );
}

export default FaqCategoryCard;
