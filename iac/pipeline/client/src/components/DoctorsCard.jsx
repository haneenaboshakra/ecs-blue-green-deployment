import React from "react";

function DoctorsCard(props) {
  return (
    <div>
      <div className="doctors_card"  data-aos="fade-up"
              data-aos-duration="800">
        <div className="card_body">
          <div className="card_top">
            <div className="card_img">
              <img
                src={props.image}
                alt="doctor"
              />
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom-text">
              <h6 className="doctors-name text-align-center">
               {props.doctor_name}
              </h6>

              <div className="doctors-info">
                <p className="doctors-description">
                  {props.doctor_role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsCard;
