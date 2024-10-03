// HealthTransform.js

import React from "react";
import GetStartedCard from "../components/GetStartedCard";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const treatmentCards = [
    {
      title: "Anti-aging & Vitality",
      description: "Boosts energy and slows down aging signs.",
    },
    {
      title: "Cognitive Enhancement",
      description: "Improves focus, memory, and mental clarity.",
    },
    {
      title: "Weight Loss",
      description: "Promotes fat loss and healthy metabolism.",
    },
    {
      title: "Muscle Support",
      description: "Enhances your muscle growth and strength.",
    },
    {
      title: "Injury Repair and Recovery",
      description: "Speeds up healing of injuries and recovery.",
    },
    {
      title: "Libido Enhancement",
      description: "Increases sexual desire and performance.",
    },
    {
      title: "Mood and Sleep",
      description: "Enhances mood and improves sleep quality.",
    },
    {
      title: "Hair Loss",
      description: "Reduces your hair loss and promotes growth.",
    },
    {
      title: "Immunity",
      description: "Strengthens immune system against infections.",
    },
    {
      title: "Skin Care",
      description: "Improves your skin health and appearance.",
    },
  ];

  return (
    <div className="getStarted_page">
      <Link to="/">
        <div className="getStarted_header">
          <div className="getStarted_logo">
            <img src={require("../assets/images/balanced-logo.png")} alt="Logo" />
          </div>
        </div>
      </Link>
      <div className="container">
        <div className="getstarted_content">
          <h2 className="getStarted_title">Transform Your Health</h2>
          <p className="getStarted_description">
            Discover personalized health insights with our tailored tests.
            Choose the right one to enhance your lifestyle and well-being. Start
            your journey to a healthier you!
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row justify-content-center">
            {treatmentCards
              .map((card, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 d-flex justify-content-center align-items-stretch mb-1"
                  >
                    <GetStartedCard
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                );
              })
              .reduce((rows, card, index) => {
                if (index % 2 === 0) {
                  rows.push([]);
                }
                rows[rows.length - 1].push(card);
                return rows;
              }, [])
              .map((row, index) => (
                <div className="row justify-content-center" key={index}>
                  {row}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
