import React from "react";
import { Link } from "react-router-dom";

function TreatmentCard(props) {
  const formatTitleForURL = (title) => {
    return title
      .replace(/ /g, '-')
      .replace(/&/g, 'and')
      .replace(/or/g, 'or'); 
  };

  const formattedTitle = formatTitleForURL(props.treatment_name);
  return (
    <div>
      <Link to={`questionnaire/${formattedTitle}`} style={{color:'unset'}}>
      <div className="treatment_card">
        <div className="card_body">
          <div className="card_top">
            <div className="card_img">
              <img
                src={props.image}
                alt="Mockup"
              />
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom-text">
              <h6 className="treatment-name text-align-center">
               {props.treatment_name}
              </h6>

              <div className="treatment-info d-flex">
                <p className="treatment-description">
                  {props.treatment_description}
                </p>
                <img
                  src={require("..//assets/images/roundArrow.png")}
                  alt="Right Arrow"
                  className="roundedRight-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default TreatmentCard;
