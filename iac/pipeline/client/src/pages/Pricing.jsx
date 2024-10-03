import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Pricing() {


  const treatments = [
    {
      title: "Anti-aging and Vitality",
      price: "$22.90/Week",
      description: "Boosts Energy And Slows Aging Signs.",
    },
    {
      title: "Weight Loss",
      price: "$22.90/Week",
      description: "Promotes Fat Loss And Healthy Metabolism.",
    },
    {
      title: "Muscle Support",
      price: "$21/Week",
      description: "Enhances Muscle Growth And Strength.",
    },
    {
      title: "Libido Enhancement",
      price: "$7.50/Dose",
      description: "Increases Sexual Desire And Performance.",
    },
    {
      title: "Cognitive Enhancement",
      price: "$2.67/Dose",
      description: "Improves Focus, Memory, And Mental Clarity.",
    },
    {
      title: "Mood and Sleep",
      price: "$22.90/Week",
      description: "Enhances Mood And Improves Sleep Quality.",
    },
    {
      title: "Hair Loss",
      price: "$24/Month",
      description: "Reduces Hair Loss And Promotes Growth.",
    },
    {
      title: "Immunity",
      price: "$69/Week",
      description: "Strengthens Immune System Against Infections.",
    },
    {
      title: "Skin Care",
      price: "TBD",
      description: "Improves Your Skin Health And Appearance.",
    },
    {
      title: "Injury Repair and Recovery",
      price: "$14.95/Day",
      description: "Speeds Healing Of Injuries And Recovery.",
    },
  ];

  const formatTitleForURL = (title) => {
    return title
      .replace(/ /g, '-')  
      .replace(/&/g, 'and') 
      .replace(/or/g, 'or');
  };

  // const formattedTitle = formatTitleForURL(title);

  return (
    <div>
      <Header />
      <div className="pricing_page">
        <div className="pricing-hero-header-wrapper">
          <div className="container">
            <div className="pricing-hero-content">
              <p className="pricing-hero-subtitle">Pricing Page</p>
              <h2 className="pricing-hero-title">
                Discover Our Treatments With The Best Pricing
              </h2>
              <p className="pricing-hero-description">
                Check Out Our Pricing List For All Our Treatments. Our Prices
                Are The Best In The Market Compared With The Quality Of Work
                Provided.
              </p>
            </div>
          </div>
        </div>
        <div className="pricing-card-section-wrapper">
        <div className="pricing-card-section">
          <div className="container">
            
              <div className="row">
                {treatments.slice(0, 4).map((treatment, index) => (
                  <div key={index} className="col-12 col-lg-6 mb-4">
                    <div className="pricing-card h-100 text-center">
                      <div className="pricing-card-body">
                        <div className="card-top">
                          <h5 className="pricing-card-title">
                            {treatment.title}
                          </h5>
                          <p className="pricing-card-text">
                            {treatment.description}
                          </p>
                          <Link to={`/questionnaire/${formatTitleForURL(treatment.title)}`} className="pricing-card-btn">
                            <p>Take Your Quiz →</p>
                          </Link>
                        </div>
                        <div className="pricing-card-price">
                          <p className="pricing-from">From</p>
                          <p className="pricing-card-price">
                            {treatment.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-12 mb-4">
                  <div className="pricing-card h-100 text-center">
                    <div className="pricing-card-body">
                      <div className="card-top">
                        <h5 className="pricing-card-title">
                          {treatments[4].title}
                        </h5>
                        <p className="pricing-card-text">
                          {treatments[4].description}
                        </p>
                        <Link to={`/questionnaire/${formatTitleForURL(treatments[4].title)}`} className="pricing-card-btn">
                          <p>Take Your Quiz →</p>
                        </Link>
                      </div>
                      <div className="pricing-card-price">
                        <p className="pricing-from">From</p>
                        <p className="pricing-card-price">
                          {treatments[2].price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {treatments.slice(5, 9).map((treatment, index) => (
                  <div key={index} className="col-12 col-lg-6 mb-4">
                    <div className="pricing-card h-100 text-center">
                      <div className="pricing-card-body">
                        <div className="card-top">
                          <h5 className="pricing-card-title">
                            {treatment.title}
                          </h5>
                          <p className="pricing-card-text">
                            {treatment.description}
                          </p>
                          <Link to={`/questionnaire/${formatTitleForURL(treatment.title)}`} className="pricing-card-btn">
                            <p>Take Your Quiz →</p>
                          </Link>
                        </div>
                        <div className="pricing-card-price">
                          <p className="pricing-from">From</p>
                          <p className="pricing-card-price">
                            {treatment.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* {treatments.slice(5, 7).map((treatment, index) => (
                  <div key={index} className="col-12 col-lg-6 mb-4">
                    <div className="pricing-card h-100 text-center">
                      <div className="pricing-card-body">
                        <div className="card-top">
                          <h5 className="pricing-card-title">
                            {treatment.title}
                          </h5>
                          <p className="pricing-card-text">
                            {treatment.description}
                          </p>
                          <Link to={`/questionnaire/${formatTitleForURL(treatment.title)}`} className="pricing-card-btn">
                            <p>Take Your Quiz →</p>
                          </Link>
                        </div>
                        <div className="pricing-card-price">
                          <p className="pricing-from">From</p>
                          <p className="pricing-card-price">
                            {treatment.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
                <div className="col-12 mb-4">
                  <div className="pricing-card h-100 text-center">
                    <div className="pricing-card-body">
                      <div className="card-top">
                        <h5 className="pricing-card-title">
                          {treatments[9].title}
                        </h5>
                        <p className="pricing-card-text">
                          {treatments[9].description}
                        </p>
                        <Link to={`/questionnaire/${formatTitleForURL(treatments[9].title)}`} className="pricing-card-btn">
                          <p>Take Your Quiz →</p>
                        </Link>
                      </div>
                      <div className="pricing-card-price">
                        <p className="pricing-from">From</p>
                        <p className="pricing-card-price">
                          {treatments[2].price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
